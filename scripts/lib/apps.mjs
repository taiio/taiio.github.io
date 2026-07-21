import fg from "fast-glob";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, "..", "..");
export const APPS_DIR = path.join(ROOT, "apps");

/**
 * @typedef {object} DiscoveredApp
 * @property {string} slug
 * @property {string} dir       absolute path to the app's folder
 * @property {object} manifest  parsed app.json contents
 */

/**
 * Scans apps/* /app.json (no hardcoded list) and returns every discovered app,
 * sorted by manifest.priority then name. This is the Node-side twin of
 * src/lib/registry.ts's import.meta.glob-based discovery used in the browser.
 *
 * @returns {Promise<DiscoveredApp[]>}
 */
export async function discoverApps() {
  const manifestPaths = await fg("*/app.json", { cwd: APPS_DIR, absolute: true });

  const apps = await Promise.all(
    manifestPaths.map(async (manifestPath) => {
      const manifest = await fs.readJson(manifestPath);
      const dir = path.dirname(manifestPath);

      if (!manifest.slug) {
        throw new Error(`app.json at ${manifestPath} is missing required field "slug"`);
      }
      if (path.basename(dir) !== manifest.slug) {
        throw new Error(
          `app.json slug "${manifest.slug}" does not match its folder name "${path.basename(dir)}" (${manifestPath})`,
        );
      }

      return { slug: manifest.slug, dir, manifest };
    }),
  );

  return apps.sort((a, b) => {
    const pa = a.manifest.priority ?? 999;
    const pb = b.manifest.priority ?? 999;
    if (pa !== pb) return pa - pb;
    return a.manifest.name.localeCompare(b.manifest.name);
  });
}
