// Service worker for Markdown — makes the app installable and
// lets it open even with a weak/no connection (using the last loaded data).

const CACHE_NAME = 'markdown-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './deals.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: cache the core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate: clean up old caches if we ever ship a v2
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: try the network first (so deals stay fresh), fall back to cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
