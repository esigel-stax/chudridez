/* Chudridez service worker — offline app shell + runtime tile/data caching.
   Bump CACHE_VERSION whenever you deploy index.html or data.js. */
const CACHE_VERSION = 'chudridez-v3';
const APP_SHELL = `${CACHE_VERSION}-shell`;
const RUNTIME   = `${CACHE_VERSION}-runtime`;

// Files that make the app usable offline. Keep the data.js query string in sync
// with the one in index.html so the cached copy matches what the page requests.
const SHELL_URLS = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css'
];

// Cap the runtime cache so map tiles don't grow without bound.
const RUNTIME_MAX = 600;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_SHELL).then((cache) =>
      // addAll fails the whole install if one URL 404s; add individually instead.
      Promise.all(SHELL_URLS.map((u) =>
        cache.add(new Request(u, { cache: 'reload' })).catch(() => null)
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => !k.startsWith(CACHE_VERSION)).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

async function trimCache(name, max) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  if (keys.length > max) {
    for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Never cache routing / elevation / live GeoJSON — always go to network,
  // fall back to whatever we have if offline.
  const NETWORK_ONLY = [
    'router.project-osrm.org',
    'api.mapbox.com',
    'api.open-meteo.com',
    'files.sfchronicle.com'
  ];
  if (NETWORK_ONLY.some((h) => url.hostname.includes(h))) {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // App shell (same-origin HTML/JS/CSS + pinned CDN libs): stale-while-revalidate.
  const isShell = SHELL_URLS.some((u) => req.url.startsWith(u)) ||
                  url.origin === self.location.origin;
  if (isShell) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const network = fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(APP_SHELL).then((c) => c.put(req, copy));
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Everything else (map tiles, fonts, sprites): cache-first with a size cap.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && (res.status === 200 || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => {
            c.put(req, copy);
            trimCache(RUNTIME, RUNTIME_MAX);
          });
        }
        return res;
      }).catch(() => cached);
    })
  );
});
