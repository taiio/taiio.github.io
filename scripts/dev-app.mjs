import { spawnSync } from "node:child_process";
import { discoverApps } from "./lib/apps.mjs";

const slug = process.argv[2];

if (!slug) {
  const apps = await discoverApps();
  console.log("Usage: pnpm dev:app <slug>\n\nAvailable apps:");
  apps.forEach((a) => console.log(`  ${a.slug}`));
  process.exit(1);
}

const apps = await discoverApps();
const app = apps.find((a) => a.slug === slug);

if (!app) {
  console.error(`No app found with slug "${slug}". Run "pnpm discover" to list available apps.`);
  process.exit(1);
}

console.log(`Starting dev server for "${app.manifest.name}" in ${app.dir}...`);
const result = spawnSync("pnpm", ["run", "dev"], {
  cwd: app.dir,
  stdio: "inherit",
  shell: process.platform === "win32",
});
process.exit(result.status ?? 0);
