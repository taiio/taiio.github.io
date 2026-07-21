import fs from "fs-extra";
import path from "node:path";
import { discoverApps, ROOT } from "./lib/apps.mjs";

const apps = await discoverApps();

const registry = apps.map((app) => ({
  slug: app.slug,
  title: app.manifest.name,
  description: app.manifest.description,
  tags: app.manifest.tags ?? [],
  featured: Boolean(app.manifest.featured),
  priority: app.manifest.priority ?? 999,
  status: app.manifest.status ?? "live",
  path: `/${app.slug}`,
}));

const outPath = path.join(ROOT, "generated", "apps.json");
await fs.ensureDir(path.dirname(outPath));
await fs.writeJson(outPath, registry, { spaces: 2 });

console.log(`Wrote ${registry.length} app(s) to generated/apps.json`);
