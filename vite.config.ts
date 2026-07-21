import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// The portfolio is always deployed at the domain root:
//   https://username.github.io/
// Sub-applications each carry their own base path (see apps/*/vite.config.ts
// and scripts/lib/apps.mjs for the single source of truth on base paths).
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist-portfolio",
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port: 5173,
    open: false,
  },
});
