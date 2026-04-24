import { useEffect, useRef, useState } from "react";
import { createAsciiGlobe } from "./ascii-globe-engine";
import "./ascii-globe-view.css";

function AsciiGlobeView() {
  const mountRef = useRef(null);
  const globeRef = useRef(null);
  const [vibe, setVibe] = useState("Welcome");

  useEffect(() => {
    let cancelled = false;

    const setup = async () => {
      const location = await resolveApproxLocation();
      if (cancelled || !mountRef.current) return;

      setVibe("Welcome");

      globeRef.current = createAsciiGlobe({
        mount: mountRef.current,
        lat: location.lat,
        lon: location.lon,
        onFocusComplete: () => {
          if (!cancelled) setVibe("Welcome");
        },
      });
    };

    setup();

    return () => {
      cancelled = true;
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
    };
  }, []);

  const onTogglePin = () => {
    if (!globeRef.current) return;
    globeRef.current.toggleAxisMode();
    setVibe("Welcome");
  };

  return (
    <div className="ascii-globe-wrap">
      <button
        className="ascii-globe-pin-toggle"
        type="button"
        onClick={onTogglePin}
        aria-label="Toggle pin lock"
      >
        <span className="ascii-globe-pin-icon" aria-hidden="true" />
      </button>
      <div className="ascii-globe-vibe">{vibe}</div>
      <div ref={mountRef} className="ascii-globe-root" />
    </div>
  );
}

async function resolveApproxLocation() {
  const fallback = { lat: 0, lon: 0, city: "your area" };

  const browserLocation = await resolveViaBrowserGeolocation();
  if (browserLocation) return browserLocation;

  try {
    const local = await resolveViaLocalMaxIp();
    if (local) return local;

    const ipwho = await fetchWithTimeout("https://ipwho.is/", 2200);
    if (ipwho && ipwho.ok) {
      const payload = await ipwho.json();
      if (payload && payload.success !== false) {
        const lat = Number(payload.latitude);
        const lon = Number(payload.longitude);
        const city = String(payload.city || "").trim() || fallback.city;
        if (Number.isFinite(lat) && Number.isFinite(lon)) return { lat, lon, city };
      }
    }

    const ipapi = await fetchWithTimeout("https://ipapi.co/json/", 2200);
    if (ipapi && ipapi.ok) {
      const payload = await ipapi.json();
      const lat = Number(payload.latitude);
      const lon = Number(payload.longitude);
      const city = String(payload.city || "").trim() || fallback.city;
      if (Number.isFinite(lat) && Number.isFinite(lon)) return { lat, lon, city };
    }
  } catch {
    return fallback;
  }

  return fallback;
}

async function resolveViaBrowserGeolocation() {
  if (typeof window === "undefined" || !window.isSecureContext || !navigator?.geolocation) {
    return null;
  }

  try {
    const position = await getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 7000,
      maximumAge: 120000,
    });

    const lat = Number(position?.coords?.latitude);
    const lon = Number(position?.coords?.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

    const city = (await resolveCityFromCoordinates(lat, lon)) || "your area";
    return { lat, lon, city };
  } catch {
    return null;
  }
}

function getCurrentPosition(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

async function resolveCityFromCoordinates(lat, lon) {
  const encodedLat = encodeURIComponent(String(lat));
  const encodedLon = encodeURIComponent(String(lon));

  const candidates = [
    {
      url: `https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&zoom=10&lat=${encodedLat}&lon=${encodedLon}`,
      readCity: (payload) =>
        payload?.address?.city ||
        payload?.address?.town ||
        payload?.address?.village ||
        payload?.address?.municipality ||
        payload?.address?.county,
    },
    {
      url: `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${encodedLat}&longitude=${encodedLon}&localityLanguage=en`,
      readCity: (payload) => payload?.city || payload?.locality || payload?.principalSubdivision,
    },
  ];

  for (const candidate of candidates) {
    try {
      const response = await fetchWithTimeout(candidate.url, 2200);
      if (!response || !response.ok) continue;
      const payload = await response.json();
      const city = cleanCityName(candidate.readCity(payload));
      if (city) return city;
    } catch {
      // try next reverse-geocode provider
    }
  }

  return "";
}

async function resolveViaLocalMaxIp() {
  const candidates = [
    "/api/location",
    "http://localhost:8787/api/location",
    "http://127.0.0.1:8787/api/location",
    "http://localhost:3100/api/location",
    "http://127.0.0.1:3100/api/location",
  ];

  for (const url of candidates) {
    try {
      const response = await fetchWithTimeout(url, 1200);
      if (!response || !response.ok) continue;
      const payload = await response.json();
      const parsed = normalizeLocationPayload(payload);
      if (parsed) return parsed;
    } catch {
      // try next candidate
    }
  }

  return null;
}

function normalizeLocationPayload(payload) {
  if (!payload || typeof payload !== "object") return null;

  const directLat = Number(payload.lat);
  const directLon = Number(payload.lon);
  if (Number.isFinite(directLat) && Number.isFinite(directLon)) {
    const city = getCityFromLabel(payload.label) || String(payload.city || "").trim() || "your area";
    return { lat: directLat, lon: directLon, city };
  }

  const nestedLat = Number(payload.location?.lat ?? payload.location?.latitude);
  const nestedLon = Number(payload.location?.lon ?? payload.location?.longitude);
  if (Number.isFinite(nestedLat) && Number.isFinite(nestedLon)) {
    const city = getCityFromLabel(payload.location?.label) || String(payload.location?.city || "").trim() || "your area";
    return { lat: nestedLat, lon: nestedLon, city };
  }

  return null;
}

function getCityFromLabel(label) {
  const raw = String(label || "").trim();
  if (!raw) return "";
  const [city] = raw.split(",").map((part) => part.trim());
  return cleanCityName(city);
}

function cleanCityName(value) {
  const city = String(value || "").trim();
  if (!city || city.toLowerCase().includes("unknown")) return "";
  return city.replace(/^(city|district|municipality|regional municipality)\s+of\s+/i, "").trim();
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
}

export default AsciiGlobeView;
