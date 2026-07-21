/**
 * Shape of every app.json manifest found under apps/<slug>/.
 * This is the ONLY contract between a sub-application and the host portfolio.
 * Adding an app to the site never requires touching host source code —
 * it only requires dropping a conforming app.json inside apps/<slug>/.
 */
export interface AppManifest {
  /** Human readable name, e.g. "Custody Architecture" */
  name: string;
  /** URL-safe slug used for routing and the build output folder, e.g. "custody" */
  slug: string;
  /** One or two sentence description shown on cards */
  description: string;
  /** Free-form tags used for search / filter-by-tag */
  tags: string[];
  /** Whether this app appears in the "Featured Projects" section */
  featured?: boolean;
  /** Sort priority, lower = earlier. Defaults to 999 */
  priority?: number;
  /** Path to an icon file relative to the app's own src, e.g. "icon.png" */
  icon?: string;
  /** Optional external repo link, defaults to monorepo apps/<slug> path */
  repoUrl?: string;
  /** Optional live status flag - lets you list an app before it's deployed */
  status?: "live" | "in-progress" | "archived";
}

/** A fully-resolved entry as consumed by the portfolio UI and the registry generator. */
export interface AppRegistryEntry extends AppManifest {
  /** Route path, always `/${slug}` */
  path: string;
}
