import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";

const DEFAULT_ASCII_SET = "   ..,:-=+*#";
const WATER_MASK_TEXTURE_URL = "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg";
const GLOBE_RADIUS = 4;

export function createAsciiGlobe({ mount, lat, lon, onFocusComplete }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return createAsciiFallback(mount, onFocusComplete);
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(mount.clientWidth || window.innerWidth, mount.clientHeight || window.innerHeight);
  renderer.setClearColor(0xffffff, 0);

  const effect = new AsciiEffect(renderer, DEFAULT_ASCII_SET, {
    invert: false,
    resolution: 0.2,
    alpha: true,
  });
  effect.setSize(mount.clientWidth || window.innerWidth, mount.clientHeight || window.innerHeight);
  effect.domElement.className = "ascii-globe-ascii-layer";
  effect.domElement.style.color = "#3bff31";
  effect.domElement.style.backgroundColor = "transparent";
  mount.innerHTML = "";
  mount.appendChild(effect.domElement);

  const scene = new THREE.Scene();
  scene.background = null;
  const camera = new THREE.PerspectiveCamera(55, (mount.clientWidth || window.innerWidth) / (mount.clientHeight || window.innerHeight), 0.1, 1000);
  camera.position.set(0, 0, 12);

  const controls = new OrbitControls(camera, effect.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 8;
  controls.maxDistance = 22;
  controls.autoRotate = false;

  const globeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });

  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  const globe = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_RADIUS, 96, 96), globeMaterial);
  globeGroup.add(globe);
  applyLandMaskTexture(globeMaterial);

  const marker = createMarker();
  const markerLocal = latLonToVector(lat, lon, GLOBE_RADIUS + 0.32);
  marker.position.copy(markerLocal);
  marker.renderOrder = 10;
  marker.traverse((node) => {
    if (node.isMesh) node.renderOrder = 10;
  });
  globeGroup.add(marker);

  const bornMs = performance.now();
  const focusDelayMs = 1900;
  const focusDurationMs = 1800;
  const axisDurationMs = 1100;
  const identityQ = new THREE.Quaternion();
  const focusToQ = new THREE.Quaternion().setFromUnitVectors(
    markerLocal.clone().normalize(),
    new THREE.Vector3(0, 0, 1)
  );
  const cameraStart = camera.position.clone();
  const cameraFocus = new THREE.Vector3(0, 0, 8.9);
  const transition = {
    active: false,
    startedAt: 0,
    duration: 0,
    fromQ: new THREE.Quaternion(),
    toQ: new THREE.Quaternion(),
    fromCam: new THREE.Vector3(),
    toCam: new THREE.Vector3(),
    endPhase: "focused",
  };
  let phase = "intro";
  let animationFrame = null;

  const animate = () => {
    const now = performance.now();
    if (phase === "intro") {
      globeGroup.rotation.y += 0.0028;
      if (!transition.active && now - bornMs >= focusDelayMs) {
        startTransition(focusToQ, cameraFocus, focusDurationMs, "focused");
      }
    }

    if (transition.active) {
      const t = Math.min(1, (now - transition.startedAt) / transition.duration);
      const eased = easeOutCubic(t);
      globeGroup.quaternion.slerpQuaternions(transition.fromQ, transition.toQ, eased);
      camera.position.lerpVectors(transition.fromCam, transition.toCam, eased);
      if (t >= 1) {
        transition.active = false;
        phase = transition.endPhase;
        if (phase === "focused" && typeof onFocusComplete === "function") {
          onFocusComplete();
        }
      }
    } else if (phase === "orbit") {
      globeGroup.rotation.y += 0.0022;
    }

    marker.lookAt(camera.position);
    const pulse = (Math.sin(now * 0.0062) + 1) * 0.5;
    const halo = marker.userData.halo;
    if (halo) {
      const haloScale = 1 + pulse * 0.55;
      halo.scale.setScalar(haloScale);
      halo.material.opacity = 0.78 - pulse * 0.48;
    }
    controls.update();
    effect.render(scene, camera);
    animationFrame = requestAnimationFrame(animate);
  };
  animate();

  const onResize = () => {
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    effect.setSize(width, height);
  };
  window.addEventListener("resize", onResize);

  return {
    destroy() {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      globe.geometry.dispose();
      globe.material.dispose();
      marker.traverse((node) => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach((m) => m.dispose());
          } else {
            node.material.dispose();
          }
        }
      });
      renderer.dispose();
      mount.innerHTML = "";
    },
    toggleAxisMode() {
      const activeOrTargetPhase = transition.active ? transition.endPhase : phase;
      if (activeOrTargetPhase === "focused") {
        startTransition(identityQ, cameraStart, axisDurationMs, "orbit");
        return "orbit";
      }

      startTransition(focusToQ, cameraFocus, focusDurationMs, "focused");
      return "focused";
    },
  };

  function startTransition(toQuaternion, toCamera, duration, endPhase) {
    transition.active = true;
    transition.startedAt = performance.now();
    transition.duration = duration;
    transition.fromQ.copy(globeGroup.quaternion);
    transition.toQ.copy(toQuaternion);
    transition.fromCam.copy(camera.position);
    transition.toCam.copy(toCamera);
    transition.endPhase = endPhase;
  }
}

function createAsciiFallback(mount, onFocusComplete) {
  const pre = document.createElement("pre");
  pre.className = "ascii-globe-fallback";
  pre.textContent = [
    "                  .........                  ",
    "             ..::-----------::..            ",
    "          .:--===+++++*+++++===--:.         ",
    "        .:--==++**#########**++==--:.       ",
    "      .:--==+**###%%%%%%%%%###**+==--:.     ",
    "      .:--==+**###%%%%%%%%%###**+==--:.     ",
    "        .:--==++**#########**++==--:.       ",
    "          .:--===+++++*+++++===--:.         ",
    "             ..::-----------::..            ",
    "                  .........                  ",
  ].join("\n");
  mount.innerHTML = "";
  mount.appendChild(pre);
  const timer = window.setTimeout(() => {
    if (typeof onFocusComplete === "function") onFocusComplete();
  }, 600);

  return {
    destroy() {
      window.clearTimeout(timer);
      mount.innerHTML = "";
    },
    toggleAxisMode() {
      return "focused";
    },
  };
}

function createMarker() {
  const group = new THREE.Group();
  const haloMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.56,
    depthTest: false,
    depthWrite: false,
  });

  const halo = new THREE.Mesh(new THREE.RingGeometry(0.115, 0.155, 44), haloMaterial);
  halo.position.z = 0.005;
  group.add(halo);

  const center = new THREE.Mesh(
    new THREE.CircleGeometry(0.055, 28),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    })
  );
  center.position.z = 0.03;
  group.add(center);
  group.userData.halo = halo;

  return group;
}

function applyLandMaskTexture(material) {
  const loader = new THREE.TextureLoader();
  loader.load(
    WATER_MASK_TEXTURE_URL,
    (texture) => {
      const processed = buildLandMaskTextureFromWaterMask(texture);
      processed.colorSpace = THREE.SRGBColorSpace;
      processed.anisotropy = 8;
      material.map = processed;
      material.transparent = false;
      material.alphaTest = 0;
      material.needsUpdate = true;
    },
    undefined,
    () => {}
  );
}

function buildLandMaskTextureFromWaterMask(sourceTexture) {
  const sourceImage = sourceTexture.image;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx || !sourceImage) {
    return sourceTexture;
  }

  canvas.width = sourceImage.width;
  canvas.height = sourceImage.height;
  ctx.drawImage(sourceImage, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    // This specular mask behaves with darker oceans in our pipeline.
    const isOcean = luminance < 78;

    if (isOcean) {
      // Non-inverted pipeline: dark oceans render as sparse/black.
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      data[i + 3] = 255;
    } else {
      // Land stays bright so it renders dense green ASCII.
      const land = 244;
      data[i] = land;
      data[i + 1] = land;
      data[i + 2] = land;
      data[i + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function latLonToVector(lat, lon, radius) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
