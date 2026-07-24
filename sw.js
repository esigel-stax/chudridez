/* Chudridez service worker — v4
   IMPORTANT CHANGE: the app shell (index.html, data.js, CSS/JS) is now NETWORK-FIRST,
   so when you're online you always get the latest deploy and never get trapped on a
   stale cached page. Map tiles stay cache-first (fast + offline). Bump CACHE_VERSION
   on any future deploy to force old caches to clear. */
const CACHE_VERSION = 'chudridez-v4';
const SHELL  = `${CACHE_VERSION}-shell`;
const RUNTIME = `${CACHE_VERSION}-runtime`;

const SHELL_URLS = [
  './', './index.html', './data.js', './manifest.json',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css'
];
const RUNTIME_MAX = 600;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL).then((c) =>
      Promise.all(SHELL_URLS.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => null)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !k.startsWith(CACHE_VERSION)).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

async function trim(name, max) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Live services — always network, fall back to cache only if offline.
  const NETWORK_ONLY = ['router.project-osrm.org','api.mapbox.com','api.open-meteo.com','files.sfchronicle.com'];
  if (NETWORK_ONLY.some((h) => url.hostname.includes(h))) {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  const isNavigation = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');
  const isShellAsset = url.origin === self.location.origin || SHELL_URLS.some((u) => req.url.startsWith(u));

  // App shell (the page + its code): NETWORK-FIRST so you always get the latest deploy online.
  if (isNavigation || isShellAsset) {
    event.respondWith(
      fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(SHELL).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req).then((c) => c || caches.match('./index.html')))
    );
    return;
  }

  // Everything else (map tiles, fonts, sprites): cache-first with a size cap.
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      if (res && (res.status === 200 || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(RUNTIME).then((c) => { c.put(req, copy); trim(RUNTIME, RUNTIME_MAX); });
      }
      return res;
    }).catch(() => cached))
  );
});
