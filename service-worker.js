const CACHE_NAME = "valca-cache-v1";
const urlsToCache = [
  "/",
  "/manifest.json",
  "/index.html",
  "/2.mp4",
  "/3.mp4",
  "/home.mp4",
  "/songdo.mp4",
  "/light%20come.mp4",
  "/casa.mp4",
  "/lucky.mp4",
  "/dream.mp4",
  "/valca.mp4",
  "/windy.wav",
  "/sonhall.mp3",
  "/documentary_loop_audio.mp3"
];

// Installer le service worker et mettre en cache les fichiers
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Récupérer depuis le cache si possible
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});