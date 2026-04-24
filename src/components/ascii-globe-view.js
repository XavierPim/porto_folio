import { useEffect, useRef, useState } from "react";
import { createAsciiGlobe } from "./ascii-globe-engine";
import "./ascii-globe-view.css";

function AsciiGlobeView() {
  const mountRef = useRef(null);
  const globeRef = useRef(null);
  const [city, setCity] = useState("your city");
  const [vibe, setVibe] = useState("auto-focusing to your region...");

  useEffect(() => {
    let cancelled = false;

    const setup = async () => {
      const location = await resolveApproxLocation();
      if (cancelled || !mountRef.current) return;

      setCity(location.city);
      setVibe("auto-focusing to your region...");

      globeRef.current = createAsciiGlobe({
        mount: mountRef.current,
        lat: location.lat,
        lon: location.lon,
        onFocusComplete: () => {
          if (!cancelled) setVibe(buildVibeLine(location.city));
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
    const next = globeRef.current.toggleAxisMode();
    if (next === "orbit") {
      setVibe(buildVibeLine(city));
    } else {
      setVibe(`re-locking on ${city}...`);
    }
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
  if (!city || city.toLowerCase().includes("unknown")) return "";
  return city;
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

function buildVibeLine(city) {
  if (timeIsLate()) {
    return `still awake at ${formatLocalTime()} in ${city}?`;
  }

  const lines = [
    `how is it in ${city}?`,
    `what's the vibe in ${city}?`,
  ];
  return lines[Math.floor(Math.random() * lines.length)];
}

function timeIsLate(now = new Date()) {
  const hour = now.getHours();
  return hour >= 23 || hour < 5;
}

function formatLocalTime(now = new Date()) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(now);
}

export default AsciiGlobeView;
