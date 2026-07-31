import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { COLORS, clamp01, lerp, rand } from "./constants.js";

/* =========================================================================
   SCENE MANAGER — everything Three.js: meshes, materials, camera, bloom,
   click-to-explore interaction. Framework-agnostic: mount it into any
   container element, drive it from React (or anything else) via its methods.
   ========================================================================= */
export class SceneManager {
  constructor(container) {
    this.container = container;
    this.clock = new THREE.Clock();
    this.nodeMeshes = new Map();     // id -> mesh
    this.nodeState = new Map();      // id -> {colorFrom, colorTo, t0, dur, scaleFrom, scaleTo}
    this.edgeMeshes = new Map();     // edgeId -> mesh
    this.edgeLabelMap = new Map();   // edgeId -> weight label sprite
    this.edgeState = new Map();
    this.labelSprites = [];
    this.travelers = [];             // moving light pulses along edges
    this.particles = [];
    this.pulseNodes = new Set();     // ids currently pulsing (current node)
    this.exploreTimers = new Map();  // edgeId -> timeout handle (click-to-explore auto-hide)
    this.currentGraph = null;

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this._pointerDownPos = null;

    this._initRenderer();
    this._initScene();
    this._initPostFX();
    this._initInteraction();
    window.addEventListener("resize", () => this._onResize());
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.82;
    this.container.appendChild(this.renderer.domElement);
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x070a10, 0.0032);

    this.camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(0, 40, 150);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.35;
    this.controls.minDistance = 20;
    this.controls.maxDistance = 400;

    const ambient = new THREE.AmbientLight(0x8a8f96, 0.4);
    const key = new THREE.DirectionalLight(0x9aa3b0, 0.42);
    key.position.set(80, 120, 60);
    const rim = new THREE.PointLight(0xb45cff, 0.3, 500);
    rim.position.set(-100, -60, -80);
    this.scene.add(ambient, key, rim);

    this.graphGroup = new THREE.Group();
    this.scene.add(this.graphGroup);

    // faint starfield backdrop for depth
    const starGeo = new THREE.BufferGeometry();
    const starCount = 800;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = rand(-600, 600);
      positions[i * 3 + 1] = rand(-600, 600);
      positions[i * 3 + 2] = rand(-600, 600);
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x445a77, size: 1.1, transparent: true, opacity: 0.5 });
    this.stars = new THREE.Points(starGeo, starMat);
    this.scene.add(this.stars);
  }

  _initPostFX() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight), 0.55, 0.35, 0.32
    );
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
  }

  _initInteraction() {
    const dom = this.renderer.domElement;

    dom.addEventListener("pointerdown", (e) => {
      this._pointerDownPos = { x: e.clientX, y: e.clientY, t: performance.now() };
    });

    dom.addEventListener("pointerup", (e) => {
      if (!this._pointerDownPos) return;
      const dx = e.clientX - this._pointerDownPos.x;
      const dy = e.clientY - this._pointerDownPos.y;
      const moved = Math.hypot(dx, dy);
      const elapsed = performance.now() - this._pointerDownPos.t;
      this._pointerDownPos = null;
      if (moved < 6 && elapsed < 500) this._handlePointerClick(e);
    });

    dom.addEventListener("pointermove", (e) => {
      const hit = this._raycastNode(e);
      dom.style.cursor = hit ? "pointer" : "grab";
    });
  }

  _raycastNode(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const meshes = [...this.nodeMeshes.values()];
    const hits = this.raycaster.intersectObjects(meshes, false);
    return hits.length > 0 ? hits[0].object : null;
  }

  _handlePointerClick(event) {
    const mesh = this._raycastNode(event);
    if (!mesh) return;
    this.revealNeighbors(mesh.userData.nodeId);
    this._pulseClickedNode(mesh);
  }

  _pulseClickedNode(mesh) {
    const base = mesh.userData.baseScale ?? 1;
    const start = performance.now();
    const dur = 320;
    const tick = () => {
      const t = clamp01((performance.now() - start) / dur);
      const s = 1 + Math.sin(t * Math.PI) * 0.3;
      if (!this.pulseNodes.has(mesh.userData.nodeId)) mesh.scale.setScalar(base * s);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* reveal a node's neighboring edges/weights — used for click-to-explore.
     Unlike the algorithm's own reveals, these auto-hide again after a few
     seconds unless the algorithm has since claimed the edge permanently. */
  revealNeighbors(nodeId) {
    if (!this.currentGraph) return;
    for (const { edgeId } of this.currentGraph.neighbors(nodeId)) {
      this.revealEdge(edgeId, { targetOpacity: 0.55, duration: 350, permanent: false });
      this._scheduleExploreHide(edgeId, 4000);
    }
  }

  _scheduleExploreHide(edgeId, holdMs) {
    if (this.exploreTimers.has(edgeId)) clearTimeout(this.exploreTimers.get(edgeId));
    const timer = setTimeout(() => {
      this.exploreTimers.delete(edgeId);
      const mesh = this.edgeMeshes.get(edgeId);
      if (mesh && mesh.userData.exploreOnly) {
        mesh.userData.revealTarget = 0;
        mesh.userData.exploreOnly = false;
        this._tweenMeshOpacity(mesh, 0, 500);
        const label = this.edgeLabelMap.get(edgeId);
        if (label) {
          label.userData.revealTarget = 0;
          this._tweenSpriteOpacity(label, 0, 500);
        }
      }
    }, holdMs);
    this.exploreTimers.set(edgeId, timer);
  }

  /* fade an edge (and its weight label) into view, only ever getting brighter.
     permanent:true (the default, used by the algorithm itself) cancels any
     pending auto-hide — once the algorithm has explored an edge it stays lit. */
  revealEdge(edgeId, { duration = 400, targetOpacity = 0.85, permanent = true } = {}) {
    const mesh = this.edgeMeshes.get(edgeId);
    if (mesh) {
      const current = mesh.userData.revealTarget || 0;
      if (targetOpacity > current) {
        mesh.userData.revealTarget = targetOpacity;
        this._tweenMeshOpacity(mesh, targetOpacity, duration);
      }
      if (permanent) {
        mesh.userData.permanentlyRevealed = true;
        mesh.userData.exploreOnly = false;
        if (this.exploreTimers.has(edgeId)) {
          clearTimeout(this.exploreTimers.get(edgeId));
          this.exploreTimers.delete(edgeId);
        }
        if (!mesh.userData.solid) {
          mesh.userData.solid = true;
          mesh.material.dashSize = 200;
          mesh.material.gapSize = 0;
        }
      } else if (!mesh.userData.permanentlyRevealed) {
        mesh.userData.exploreOnly = true;
      }
    }
    const label = this.edgeLabelMap.get(edgeId);
    if (label) {
      const current = label.userData.revealTarget || 0;
      const labelTarget = targetOpacity * 0.95;
      if (labelTarget > current) {
        label.userData.revealTarget = labelTarget;
        this._tweenSpriteOpacity(label, labelTarget, duration);
      }
    }
  }

  _onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
  }

  _makeGradientTexture() {
    if (this._gradientTex) return this._gradientTex;
    const canvas = document.createElement("canvas");
    canvas.width = 8; canvas.height = 128;
    const ctx = canvas.getContext("2d");
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.5, "#b7bfca");
    grad.addColorStop(1, "#5c6472");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 8, 128);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    this._gradientTex = tex;
    return tex;
  }

  _makeLabelSprite(text, size = 64, color = "#cfe0f5") {
    const canvas = document.createElement("canvas");
    const scale = 4;
    canvas.width = size * scale; canvas.height = (size / 2) * scale;
    const ctx = canvas.getContext("2d");
    ctx.font = `600 ${34 * scale / 2}px 'IBM Plex Mono', monospace`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, opacity: 0 });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(size / 8, size / 16, 1);
    sprite.userData.baseScaleX = size / 8;
    sprite.userData.baseScaleY = size / 16;
    sprite.renderOrder = 999;
    return sprite;
  }

  /* ----- build a fresh graph's visuals ----- */
  buildGraph(graph, startId, endId) {
    this.clearGraph();

    for (const [id, node] of graph.nodes) {
      const geo = new THREE.SphereGeometry(1.5, 24, 24);
      const isSource = id === startId, isTarget = id === endId;
      const baseColor = isSource ? COLORS.nodeSource : isTarget ? COLORS.nodeTarget : COLORS.nodeUnvisited;
      const mat = new THREE.MeshStandardMaterial({
        color: baseColor, map: this._makeGradientTexture(),
        emissive: baseColor, emissiveIntensity: isSource || isTarget ? 0.5 : 0.08,
        roughness: 0.5, metalness: 0.1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(node.position);
      mesh.userData.baseScale = 1;
      mesh.userData.nodeId = id;
      mesh.scale.setScalar(0.001); // pop-in animation
      this.graphGroup.add(mesh);
      this.nodeMeshes.set(id, mesh);

      const label = this._makeLabelSprite(`N${id}`);
      label.position.copy(node.position).add(new THREE.Vector3(0, 3.2, 0));
      label.userData.kind = "node";
      label.userData.refId = id;
      this.graphGroup.add(label);
      this.labelSprites.push(label);
      this._fadeSpriteIn(label, 500 + Math.random() * 400, 1);

      this._animateNodeIn(mesh, 300 + Math.random() * 400);
    }

    for (const e of graph.edges.values()) {
      const a = graph.nodes.get(e.a).position;
      const b = graph.nodes.get(e.b).position;
      const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
      const mat = new THREE.LineDashedMaterial({
        color: COLORS.edgeIdle,
        transparent: false,
        opacity: 0.1,
        dashSize: 1.4,
        gapSize: 1.6,
        linewidth: 1, // most WebGL implementations clamp this to 1px regardless — which is exactly the "thin as thread" look we want, unaffected by zoom
      });
      const mesh = new THREE.Line(geo, mat);
      mesh.computeLineDistances(); // required for the dash pattern to render
      mesh.userData.revealTarget = 0; // hidden until relaxed by the algorithm or clicked into view
      mesh.userData.solid = false;
      this.graphGroup.add(mesh);
      this.edgeMeshes.set(e.id, mesh);

      const mid = a.clone().lerp(b, 0.5);
      const weightLabel = this._makeLabelSprite(`${e.weight}`, 44, "#7d90a8");
      weightLabel.position.copy(mid);
      weightLabel.scale.multiplyScalar(0.8);
      weightLabel.userData.baseScaleX *= 0.8;
      weightLabel.userData.baseScaleY *= 0.8;
      weightLabel.userData.kind = "edge";
      weightLabel.userData.refId = e.id;
      weightLabel.userData.revealTarget = 0;
      this.graphGroup.add(weightLabel);
      this.labelSprites.push(weightLabel);
      this.edgeLabelMap.set(e.id, weightLabel);
    }

    this.currentGraph = graph;

    // frame camera around the new graph
    const box = new THREE.Box3().setFromObject(this.graphGroup);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const dist = Math.max(sphere.radius * 2.6, 60);
    this.controls.target.copy(sphere.center);
    this.camera.position.copy(sphere.center).add(new THREE.Vector3(dist * 0.5, dist * 0.35, dist * 0.8));
    this.labelRefDistance = dist; // used to keep label size proportional to zoom
  }

  _animateNodeIn(mesh, delay) {
    const start = performance.now() + delay;
    const dur = 500;
    const tick = () => {
      const t = clamp01((performance.now() - start) / dur);
      if (t <= 0) { requestAnimationFrame(tick); return; }
      const s = 1 - Math.pow(1 - t, 3);
      mesh.scale.setScalar(s * mesh.userData.baseScale);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  _fadeSpriteIn(sprite, delay, targetOpacity = 1) {
    const start = performance.now() + delay;
    const dur = 450;
    const tick = () => {
      const t = clamp01((performance.now() - start) / dur);
      if (t <= 0) { requestAnimationFrame(tick); return; }
      sprite.material.opacity = t * targetOpacity;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  clearGraph() {
    for (const t of this.exploreTimers.values()) clearTimeout(t);
    this.exploreTimers.clear();

    for (const mesh of this.nodeMeshes.values()) {
      this.graphGroup.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose();
    }
    for (const mesh of this.edgeMeshes.values()) {
      this.graphGroup.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose();
    }
    for (const s of this.labelSprites) {
      this.graphGroup.remove(s); s.material.map.dispose(); s.material.dispose();
    }
    // dispose any in-flight travelers/particle bursts too — leaving these behind
    // is what caused stray glowing dots to survive into the next cycle
    for (const tr of this.travelers) {
      this.graphGroup.remove(tr.mesh); tr.mesh.geometry.dispose(); tr.mesh.material.dispose();
    }
    for (const p of this.particles) {
      this.graphGroup.remove(p.points); p.points.geometry.dispose(); p.points.material.dispose();
    }
    this.nodeMeshes.clear(); this.edgeMeshes.clear(); this.labelSprites = [];
    this.edgeLabelMap.clear();
    this.nodeState.clear(); this.edgeState.clear(); this.pulseNodes.clear();
    this.travelers = []; this.particles = [];
  }

  /* fade the entire graph group out (used between cycles) */
  fadeOutGraph(durationMs) {
    return new Promise((resolve) => {
      const start = performance.now();
      const meshes = [...this.nodeMeshes.values(), ...this.edgeMeshes.values()];
      const sprites = this.labelSprites;
      const tick = () => {
        const t = clamp01((performance.now() - start) / durationMs);
        for (const m of meshes) {
          m.material.opacity = m.material.opacity !== undefined ? lerp(m.material.opacity, 0, t) : 1;
          m.material.transparent = true;
          m.scale.setScalar(Math.max(0.001, (1 - t)) * (m.userData.baseScale ?? 1));
        }
        for (const s of sprites) {
          const from = s.userData.fadeFrom ?? s.material.opacity;
          s.userData.fadeFrom = from;
          s.material.opacity = lerp(from, 0, t);
        }
        if (t < 1) requestAnimationFrame(tick); else resolve();
      };
      tick();
    });
  }

  /* dim everything except the final path — used to spotlight the answer */
  _tweenMeshOpacity(mesh, target, duration) {
    return new Promise((resolve) => {
      mesh.material.transparent = true;
      const from = mesh.material.opacity !== undefined ? mesh.material.opacity : 1;
      const start = performance.now();
      const token = {};
      mesh.userData._opacityToken = token;
      const tick = () => {
        if (mesh.userData._opacityToken !== token) { resolve(); return; }
        const t = clamp01((performance.now() - start) / duration);
        mesh.material.opacity = lerp(from, target, t);
        if (t < 1) requestAnimationFrame(tick); else resolve();
      };
      tick();
    });
  }

  _tweenSpriteOpacity(sprite, target, duration) {
    return new Promise((resolve) => {
      const from = sprite.material.opacity;
      const start = performance.now();
      const token = {};
      sprite.userData._opacityToken = token;
      const tick = () => {
        if (sprite.userData._opacityToken !== token) { resolve(); return; }
        const t = clamp01((performance.now() - start) / duration);
        sprite.material.opacity = lerp(from, target, t);
        if (t < 1) requestAnimationFrame(tick); else resolve();
      };
      tick();
    });
  }

  async dimNonPath(graph, path, duration = 600) {
    const pathNodeSet = new Set(path);
    const pathEdgeIds = new Set();
    for (let i = 1; i < path.length; i++) {
      const a = path[i - 1], b = path[i];
      pathEdgeIds.add(graph.edges.has(`${a}-${b}`) ? `${a}-${b}` : `${b}-${a}`);
    }

    const tweens = [];
    for (const [id, mesh] of this.nodeMeshes) {
      if (!pathNodeSet.has(id)) tweens.push(this._tweenMeshOpacity(mesh, 0.05, duration));
    }
    for (const [id, mesh] of this.edgeMeshes) {
      if (!pathEdgeIds.has(id)) tweens.push(this._tweenMeshOpacity(mesh, 0.03, duration));
    }
    for (const sprite of this.labelSprites) {
      const keep =
        (sprite.userData.kind === "node" && pathNodeSet.has(sprite.userData.refId)) ||
        (sprite.userData.kind === "edge" && pathEdgeIds.has(sprite.userData.refId));
      if (!keep) tweens.push(this._tweenSpriteOpacity(sprite, 0.04, duration));
    }
    await Promise.all(tweens);
  }

  /* ----- node / edge state transitions ----- */
  setNodeColor(id, colorHex, { emissive = 0.5, duration = 350, scale = 1 } = {}) {
    const mesh = this.nodeMeshes.get(id);
    if (!mesh) return;
    const fromColor = mesh.material.color.clone();
    const toColor = new THREE.Color(colorHex);
    const fromScale = mesh.scale.x;
    const start = performance.now();
    this.nodeState.set(id, { start, duration });
    const stateToken = this.nodeState.get(id);
    const tick = () => {
      if (this.nodeState.get(id) !== stateToken) return; // superseded by a newer transition
      const t = clamp01((performance.now() - start) / duration);
      mesh.material.color.copy(fromColor).lerp(toColor, t);
      mesh.material.emissive.copy(fromColor).lerp(toColor, t);
      mesh.material.emissiveIntensity = lerp(mesh.material.emissiveIntensity, emissive, t);
      mesh.scale.setScalar(lerp(fromScale, scale, t));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  pulseNode(id, on) {
    if (on) this.pulseNodes.add(id); else this.pulseNodes.delete(id);
  }

  setEdgeColor(edgeId, colorHex, { emissive = 0.6, duration = 300, flashThenIdle = false } = {}) {
    const mesh = this.edgeMeshes.get(edgeId);
    if (!mesh) return;
    const fromColor = mesh.material.color.clone();
    const toColor = new THREE.Color(colorHex).multiplyScalar(1 + emissive); // lines are unlit — brightness alone carries the "glow" and trips bloom
    const start = performance.now();
    const token = {};
    this.edgeState.set(edgeId, token);
    const tick = () => {
      if (this.edgeState.get(edgeId) !== token) return;
      const t = clamp01((performance.now() - start) / duration);
      mesh.material.color.copy(fromColor).lerp(toColor, t);
      if (t < 1) {
        requestAnimationFrame(tick);
      } else if (flashThenIdle) {
        setTimeout(() => this.setEdgeColor(edgeId, COLORS.edgeIdle, { emissive: 0, duration: 400 }), 260);
      }
    };
    requestAnimationFrame(tick);
  }

  /* light pulse traveling along an edge, from -> to */
  spawnTraveler(fromId, toId, colorHex, durationMs) {
    const a = this.nodeMeshes.get(fromId)?.position;
    const b = this.nodeMeshes.get(toId)?.position;
    if (!a || !b) return;
    const geo = new THREE.SphereGeometry(0.55, 12, 12);
    const mat = new THREE.MeshBasicMaterial({ color: colorHex });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(a);
    this.graphGroup.add(mesh);
    this.travelers.push({ mesh, a, b, start: performance.now(), duration: durationMs });
  }

  /* small particle burst at a node position */
  spawnBurst(nodeId, colorHex, count = 18) {
    const origin = this.nodeMeshes.get(nodeId)?.position;
    if (!origin) return;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = origin.x; positions[i * 3 + 1] = origin.y; positions[i * 3 + 2] = origin.z;
      velocities.push(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(rand(6, 16)));
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: colorHex, size: 0.9, transparent: true, opacity: 1 });
    const points = new THREE.Points(geo, mat);
    this.graphGroup.add(points);
    this.particles.push({ points, velocities, start: performance.now(), duration: 900 });
  }

  update() {
    const dt = this.clock.getDelta();
    const now = performance.now();

    // pulsing "current" nodes
    for (const id of this.pulseNodes) {
      const mesh = this.nodeMeshes.get(id);
      if (!mesh) continue;
      const pulse = 1 + Math.sin(now * 0.008) * 0.12;
      mesh.scale.setScalar(1.55 * pulse);
    }

    // travelers
    this.travelers = this.travelers.filter((tr) => {
      const t = clamp01((now - tr.start) / tr.duration);
      tr.mesh.position.copy(tr.a).lerp(tr.b, t);
      const fade = t > 0.85 ? 1 - (t - 0.85) / 0.15 : 1;
      tr.mesh.material.opacity = fade;
      tr.mesh.material.transparent = true;
      if (t >= 1) {
        this.graphGroup.remove(tr.mesh);
        tr.mesh.geometry.dispose(); tr.mesh.material.dispose();
        return false;
      }
      return true;
    });

    // particles
    this.particles = this.particles.filter((p) => {
      const t = clamp01((now - p.start) / p.duration);
      const pos = p.points.geometry.attributes.position;
      for (let i = 0; i < p.velocities.length; i++) {
        pos.array[i * 3] += p.velocities[i].x * dt;
        pos.array[i * 3 + 1] += p.velocities[i].y * dt;
        pos.array[i * 3 + 2] += p.velocities[i].z * dt;
      }
      pos.needsUpdate = true;
      p.points.material.opacity = 1 - t;
      if (t >= 1) {
        this.graphGroup.remove(p.points);
        p.points.geometry.dispose(); p.points.material.dispose();
        return false;
      }
      return true;
    });

    // labels shrink as the camera moves closer (and grow, capped, from afar)
    // so text never overwhelms a node when zoomed in
    if (this.labelRefDistance) {
      for (const sprite of this.labelSprites) {
        const d = this.camera.position.distanceTo(sprite.position);
        const factor = THREE.MathUtils.clamp(d / this.labelRefDistance, 0.32, 1.5);
        sprite.scale.set(sprite.userData.baseScaleX * factor, sprite.userData.baseScaleY * factor, 1);
      }
    }
    this.stars.rotation.y += dt * 0.003;

    this.controls.update();
    this.composer.render();
  }
}
