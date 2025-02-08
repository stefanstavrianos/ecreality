self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("blogger-pwa-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/favicon.ico",
        "/styles.css",
        "/scripts.js",
        "https://yourblog.blogspot.com/"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
