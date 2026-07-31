/* Color palette — matches the legend shown in the HUD */
export const COLORS = {
  nodeUnvisited: 0xfcfafa,
  nodeCurrent: 0xffff00,
  nodeVisited: 0x00d9ff,
  nodeQueued: 0xff8c00,
  nodeSource: 0x00ff88,
  nodeTarget: 0xff0055,
  nodePath: 0xd946ef,

  edgeIdle: 0x4f4f4f,
  edgeRelaxing: 0xffff00,
  edgeImproved: 0x00ff88,
  edgeRejected: 0xff0055,
  edgePath: 0xd946ef,
};

export const STEP_MS = 700; // 500-1000ms per algorithm step, per spec

export const clamp01 = (t) => Math.max(0, Math.min(1, t));
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
