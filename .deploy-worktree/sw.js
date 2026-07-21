const CACHE_NAME = "portfolio-shell-v1";
const SHELL_ASSETS = ["/", "/index.html", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
});

// Network-first for navigations, falling back to the cached shell when offline.
// Requests to sub-app paths (e.g. /custody/*) are intentionally left alone —
// each app is free to register its own service worker independently.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isSubApp = /^\/[^/]+\//.test(url.pathname) && url.pathname !== "/";

  if (event.request.mode === "navigate" && !isSubApp) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("/index.html")),
    );
  }
});
