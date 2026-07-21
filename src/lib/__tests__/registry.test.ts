import { describe, expect, it } from "vitest";
import { appRegistry, featuredApps, getAllTags, searchApps } from "@/lib/registry";

describe("app registry", () => {
  it("discovers at least one app from apps/*/app.json", () => {
    expect(appRegistry.length).toBeGreaterThan(0);
  });

  it("every entry has a route path derived from its slug", () => {
    appRegistry.forEach((app) => {
      expect(app.path).toBe(`/${app.slug}`);
    });
  });

  it("sorts featured apps as a subset of the full registry", () => {
    featuredApps.forEach((app) => {
      expect(appRegistry.find((a) => a.slug === app.slug)).toBeTruthy();
    });
  });

  it("collects all unique tags", () => {
    const tags = getAllTags();
    expect(new Set(tags).size).toBe(tags.length);
  });

  it("search filters by query text", () => {
    const all = searchApps("");
    expect(all.length).toBe(appRegistry.length);

    const none = searchApps("this-should-not-match-anything-xyz");
    expect(none.length).toBe(0);
  });
});
