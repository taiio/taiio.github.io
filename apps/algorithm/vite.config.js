import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Reusable base-path strategy (identical in every app's vite.config.ts):
 *
 * 1. The monorepo build pipeline (scripts/build-apps.mjs) sets VITE_BASE_PATH
 *    to "/<slug>/" for every app, read straight from that app's own app.json.
 * 2. When this app is run completely standalone (`cd apps/algorithm && npm run dev`),
 *    VITE_BASE_PATH is unset, so it falls back to this app's own known slug below.
 *
 * This keeps every app.json as the single source of truth for its own path
 * without requiring apps to import anything from outside their own folder.
 */
const FALLBACK_BASE = "/algorithm/";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? FALLBACK_BASE,
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port: 5175,
  },
});
