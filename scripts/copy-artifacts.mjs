import fs from "fs-extra";
import path from "node:path";
import { discoverApps, ROOT } from "./lib/apps.mjs";

const DIST = path.join(ROOT, "dist");
const PORTFOLIO_BUILD = path.join(ROOT, "dist-portfolio");

async function copyArtifacts() {
  await fs.remove(DIST);
  await fs.ensureDir(DIST);

  if (!(await fs.pathExists(PORTFOLIO_BUILD))) {
    throw new Error(
      `Portfolio build output not found at ${PORTFOLIO_BUILD}. Run "pnpm build:portfolio" first.`,
    );
  }
  await fs.copy(PORTFOLIO_BUILD, DIST);
  console.log(`Copied portfolio build → dist/`);

  const apps = await discoverApps();
  for (const app of apps) {
    const appDist = path.join(app.dir, "dist");
    const target = path.join(DIST, app.slug);

    if (!(await fs.pathExists(appDist))) {
      throw new Error(
        `Build output not found for "${app.slug}" at ${appDist}. Run "pnpm build:apps" first.`,
      );
    }

    await fs.copy(appDist, target);
    console.log(`Copied ${app.slug} build → dist/${app.slug}/`);
  }

  // GitHub Pages: prevent Jekyll processing and preserve dotfiles/underscored assets
  await fs.ensureFile(path.join(DIST, ".nojekyll"));

  // SPA-style fallback for the portfolio shell only. Sub-app routes are real
  // static folders and never need this fallback.
  const indexHtml = path.join(DIST, "index.html");
  const notFoundHtml = path.join(DIST, "404.html");
  if (await fs.pathExists(indexHtml)) {
    await fs.copy(indexHtml, notFoundHtml);
  }

  console.log(`\n✔ Final dist/ assembled with ${apps.length} app(s).`);
}

copyArtifacts().catch((err) => {
  console.error(err);
  process.exit(1);
});
