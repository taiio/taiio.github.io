import { discoverApps } from "./lib/apps.mjs";

const apps = await discoverApps();

console.log(`Discovered ${apps.length} application(s):\n`);
apps.forEach((app) => {
  console.log(`  • ${app.manifest.name}  →  /${app.slug}  (${app.dir})`);
});

if (apps.length === 0) {
  console.warn("\nNo apps found under apps/*/app.json.");
}
