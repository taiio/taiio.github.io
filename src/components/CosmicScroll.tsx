import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const COUNT = 9000;

interface ShapeData {
  positions: Float32Array;
  colors: Float32Array;
  size: number;
}

function lerpColor(a: THREE.Color, b: THREE.Color, t: number) {
  return a.clone().lerp(b, t);
}

/** Spiral galaxy. */
function makeGalaxy(): ShapeData {
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const radius = 6;
  const branches = 4;
  const spin = 1.2;
  const randomness = 0.55;
  const inside = new THREE.Color("#ff6ec7");
  const outside = new THREE.Color("#4facfe");

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3;
    const r = Math.random() * radius;
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;
    const spinAngle = r * spin;
    const rx = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
    const ry = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * randomness * r * 0.4;
    const rz = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

    positions[i3] = Math.cos(branchAngle + spinAngle) * r + rx;
    positions[i3 + 1] = ry;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + rz;

    const c = lerpColor(inside, outside, r / radius);
    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;
  }

  return { positions, colors, size: 0.045 };
}

/** Accretion disk / black-hole ring - a thin glowing band with a hot core. */
function makeRing(): ShapeData {
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const hot = new THREE.Color("#fff6d5");
  const warm = new THREE.Color("#ff8a3d");

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3;
    const isCore = i % 6 === 0;
    if (isCore) {
      const r = Math.pow(Math.random(), 2) * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
      colors[i3] = hot.r;
      colors[i3 + 1] = hot.g;
      colors[i3 + 2] = hot.b;
    } else {
      const angle = Math.random() * Math.PI * 2;
      const r = 2.6 + Math.random() * 2.6;
      positions[i3] = Math.cos(angle) * r;
      positions[i3 + 1] = (Math.random() - 0.5) * 0.18;
      positions[i3 + 2] = Math.sin(angle) * r;
      const c = lerpColor(hot, warm, (r - 2.6) / 2.6);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }
  }

  return { positions, colors, size: 0.05 };
}

/** Supernova burst - particles scattered across an expanding shell. */
function makeBurst(): ShapeData {
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const hot = new THREE.Color("#ffffff");
  const cool = new THREE.Color("#ff3b3b");

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3;
    const r = 1 + Math.pow(Math.random(), 0.5) * 7;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = r * Math.cos(phi);

    const c = lerpColor(hot, cool, Math.min(r / 8, 1));
    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;
  }

  return { positions, colors, size: 0.05 };
}

/** Double-helix tunnel - two intertwined strands stretching along Z. */
function makeHelix(): ShapeData {
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const cyan = new THREE.Color("#5ef3ff");
  const purple = new THREE.Color("#b06bff");
  const turns = 6;
  const length = 22;

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3;
    const strand = i % 2;
    const t = i / COUNT;
    const angle = t * Math.PI * 2 * turns + strand * Math.PI;
    const radius = 1.5 + Math.sin(t * Math.PI * 3) * 0.15;
    positions[i3] = Math.cos(angle) * radius;
    positions[i3 + 1] = Math.sin(angle) * radius;
    positions[i3 + 2] = t * length - length / 2;

    const c = lerpColor(cyan, purple, t);
    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;
  }

  return { positions, colors, size: 0.045 };
}

const SHAPES: ShapeData[] = [makeGalaxy(), makeRing(), makeBurst(), makeHelix(), makeGalaxy()];
const SEGMENTS = SHAPES.length - 1;

/**
 * Wheel-to-zoom is only active while the cursor sits inside this region,
 * expressed as ratios of the viewport so it scales with any screen size.
 * Everywhere outside it, the mouse wheel must fall through to normal page
 * scrolling instead of zooming the 3D scene.
 */
const ZOOM_AREA = {
  centerXRatio: 0.5,
  centerYRatio: 0.5,
  widthRatio: 0.3,
  heightRatio: 0.3,
};

/**
 * Tests viewport-relative coordinates (as reported by PointerEvent.clientX/Y)
 * against the configurable ZOOM_AREA region centered in the viewport.
 */
function isCursorInsideZoomArea(clientX: number, clientY: number): boolean {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const areaWidth = viewportWidth * ZOOM_AREA.widthRatio;
  const areaHeight = viewportHeight * ZOOM_AREA.heightRatio;
  const centerX = viewportWidth * ZOOM_AREA.centerXRatio;
  const centerY = viewportHeight * ZOOM_AREA.centerYRatio;

  const left = centerX - areaWidth / 2;
  const right = centerX + areaWidth / 2;
  const top = centerY - areaHeight / 2;
  const bottom = centerY + areaHeight / 2;

  return clientX >= left && clientX <= right && clientY >= top && clientY <= bottom;
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

export function CosmicScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const mount = mountRef.current;
    const wrapper = wrapperRef.current;
    if (!mount || !wrapper) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200,
    );
    camera.position.set(0, 2.6, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const livePositions = new Float32Array(SHAPES[0].positions);
    const liveColors = new Float32Array(SHAPES[0].colors);
    geometry.setAttribute("position", new THREE.BufferAttribute(livePositions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(liveColors, 3));

    const material = new THREE.PointsMaterial({
      size: SHAPES[0].size,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 30 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.06,
      color: "#ffffff",
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.minDistance = 2.5;
    controls.maxDistance = 40;

    // Wheel-to-zoom is only meant to fire inside the ZOOM_AREA region (see
    // isCursorInsideZoomArea above). Rather than intercepting the wheel
    // event ourselves, we just toggle OrbitControls' own `enableZoom` flag:
    // its internal wheel handler bails out (without calling preventDefault)
    // whenever enableZoom is false, so the event passes straight through to
    // the browser's normal scroll behavior outside the region. Pan and
    // rotate are untouched by this and keep working everywhere, as before.
    // Starts false (i.e. "outside") until the first pointermove tells us
    // otherwise, so a stray wheel event before any mouse movement never
    // hijacks the page scroll.
    controls.enableZoom = false;

    function handlePointerMove(event: PointerEvent) {
      controls.enableZoom = isCursorInsideZoomArea(event.clientX, event.clientY);
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    let frameId: number;
    const clock = new THREE.Clock();

    function updateMorph() {
      const scaled = progressRef.current * SEGMENTS;
      let segIndex = Math.floor(scaled);
      if (segIndex >= SEGMENTS) segIndex = SEGMENTS - 1;
      if (segIndex < 0) segIndex = 0;
      const t = smoothstep(Math.min(Math.max(scaled - segIndex, 0), 1));

      const a = SHAPES[segIndex];
      const b = SHAPES[segIndex + 1];

      for (let i = 0; i < COUNT * 3; i++) {
        livePositions[i] = a.positions[i] + (b.positions[i] - a.positions[i]) * t;
        liveColors[i] = a.colors[i] + (b.colors[i] - a.colors[i]) * t;
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
      material.size = a.size + (b.size - a.size) * t;
    }

    function animate() {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      updateMorph();
      points.rotation.y += delta * 0.06;
      stars.rotation.y -= delta * 0.008;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function computeScrollProgress() {
      const rect = wrapper!.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const scrolled = -rect.top;
      progressRef.current = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          computeScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    }
    computeScrollProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    function handleResize() {
      camera.aspect = mount!.clientWidth / mount!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount!.clientWidth, mount!.clientHeight);
      computeScrollProgress();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      controls.dispose();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: `${(SEGMENTS + 1) * 100}vh`, position: "relative" }}>
      <div
        ref={mountRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          cursor: "grab",
        }}
      />
    </div>
  );
}
