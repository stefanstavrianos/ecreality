self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("ecreality-pwa-cache").then((cache) => {
      return cache.addAll([
        "https://ecreality.blogspot.com/", // Αρχική σελίδα
        "https://ecreality.blogspot.com/favicon.ico", // Favicon
        "https://ecreality.blogspot.com/p/about.html", // Σελίδα "About" (αν υπάρχει)
        "https://ecreality.blogspot.com/p/microeconomics.html", // Σελίδα "About" (αν υπάρχει)
        "https://ecreality.blogspot.com/p/macroeconomics.html", // Σελίδα "About" (αν υπάρχει)   
        "https://ecreality.blogspot.com/p/finance.html", // Σελίδα "About" (αν υπάρχει)  
        "https://ecreality.blogspot.com/p/econometrics.html", // Σελίδα "About" (αν υπάρχει)  
        "https://ecreality.blogspot.com/p/practice.html", // Σελίδα "About" (αν υπάρχει)  
        "https://ecreality.blogspot.com/p/contact.html", // Σελίδα "Contact" (αν υπάρχει)
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
