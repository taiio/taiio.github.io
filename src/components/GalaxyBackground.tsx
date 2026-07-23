import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * A playful, fully interactive 3D galaxy sitting behind the hero section.
 *
 * - Drag to orbit the galaxy
 * - Scroll / pinch to zoom
 * - Right-click drag (or two-finger drag) to pan
 * - It also gently spins on its own, so it never looks frozen even before
 *   anyone touches it
 *
 * Pure three.js (no react-three-fiber) so it stays a single self-contained
 * component with no extra framework dependency beyond `three` itself.
 */

const GALAXY_PARAMS = {
  count: 14000,
  radius: 6,
  branches: 4,
  spin: 1.2,
  randomness: 0.55,
  randomnessPower: 3,
  insideColor: "#ff6ec7",
  outsideColor: "#4facfe",
};

const STAR_COUNT = 3000;

function buildGalaxyPoints() {
  const { count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor } =
    GALAXY_PARAMS;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const colorInside = new THREE.Color(insideColor);
  const colorOutside = new THREE.Color(outsideColor);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const r = Math.random() * radius;
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;
    const spinAngle = r * spin;

    const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
    const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r * 0.4;
    const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

    positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

    const mixedColor = colorInside.clone().lerp(colorOutside, r / radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.045,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    transparent: true,
  });

  return new THREE.Points(geometry, material);
}

function buildStarfield() {
  const positions = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT; i++) {
    const i3 = i * 3;
    // Scatter stars across a big sphere shell so they surround the galaxy.
    const radius = 25 + Math.random() * 35;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 0.06,
    sizeAttenuation: true,
    color: "#ffffff",
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
  });

  return new THREE.Points(geometry, material);
}

export function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      200,
    );
    camera.position.set(0, 3.2, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const galaxy = buildGalaxyPoints();
    galaxy.rotation.x = 0.35;
    scene.add(galaxy);

    const starfield = buildStarfield();
    scene.add(starfield);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enablePan = true;
    controls.minDistance = 2.5;
    controls.maxDistance = 40;
    controls.enableZoom = true;

    let frameId: number;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      galaxy.rotation.y += delta * 0.05;
      starfield.rotation.y -= delta * 0.01;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      galaxy.geometry.dispose();
      (galaxy.material as THREE.Material).dispose();
      starfield.geometry.dispose();
      (starfield.material as THREE.Material).dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        cursor: "grab",
      }}
    />
  );
}
