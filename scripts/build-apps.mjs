import { spawnSync } from "node:child_process";
import { discoverApps } from "./lib/apps.mjs";

const apps = await discoverApps();

if (apps.length === 0) {
  console.warn("No apps discovered under apps/*/app.json — nothing to build.");
  process.exit(0);
}

console.log(`Building ${apps.length} application(s) sequentially...\n`);

for (const app of apps) {
  const basePath = `/${app.slug}/`;
  console.log(`\n▶ Building "${app.manifest.name}" (${app.slug}) with base=${basePath}`);

  const result = spawnSync("pnpm", ["run", "build"], {
    cwd: app.dir,
    stdio: "inherit",
    env: { ...process.env, VITE_BASE_PATH: basePath, NEXT_BASE_PATH: basePath.replace(/\/$/, "") },
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    console.error(`\n✖ Build failed for app "${app.slug}"`);
    process.exit(result.status ?? 1);
  }
}

console.log("\n✔ All applications built successfully.");
