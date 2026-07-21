import type { AppManifest, AppRegistryEntry } from "@/types/app";

/**
 * Automatic application discovery.
 *
 * Vite statically analyzes this glob at build time and inlines every
 * matching app.json as an eagerly-imported module. Adding a new app under
 * apps/<slug>/app.json is picked up automatically — nothing here needs to
 * change, and nothing here hardcodes a project list.
 */
const manifestModules = import.meta.glob<AppManifest>("/apps/*/app.json", {
  eager: true,
  import: "default",
});

function toRegistryEntry(manifest: AppManifest): AppRegistryEntry {
  return {
    ...manifest,
    path: `/${manifest.slug}`,
  };
}

/** All discovered applications, sorted by priority then name. */
export const appRegistry: AppRegistryEntry[] = Object.values(manifestModules)
  .map(toRegistryEntry)
  .sort((a, b) => {
    const pa = a.priority ?? 999;
    const pb = b.priority ?? 999;
    if (pa !== pb) return pa - pb;
    return a.name.localeCompare(b.name);
  });

export const featuredApps: AppRegistryEntry[] = appRegistry.filter((app) => app.featured);

export function getAllTags(): string[] {
  const tags = new Set<string>();
  appRegistry.forEach((app) => app.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function searchApps(query: string, tag?: string | null): AppRegistryEntry[] {
  const q = query.trim().toLowerCase();
  return appRegistry.filter((app) => {
    const matchesQuery =
      q.length === 0 ||
      app.name.toLowerCase().includes(q) ||
      app.description.toLowerCase().includes(q) ||
      app.tags.some((t) => t.toLowerCase().includes(q));
    const matchesTag = !tag || app.tags.includes(tag);
    return matchesQuery && matchesTag;
  });
}
