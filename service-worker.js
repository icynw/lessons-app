var GHPATH = "/lessons-app";
var APP_PREFIX = "lessons_";
var VERSION = "version_04";

var IMAGE_CACHE_NAME = "image_cache_" + VERSION;
var CACHE_NAME = APP_PREFIX + VERSION;
const assets = [
  `./`,
  `./index.html`,
  `./style.css`,

  `./assets/dist/js/bootstrap.bundle.min.js`,
  `./lessons.js`,
  `./app.js`,

  "https://fonts.googleapis.com/css?family=Poppins",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
  "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
  "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js",

  "https://lessons-app-assignment.herokuapp.com",
  "https://lessons-app-assignment.herokuapp.com/lessons",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  var requestURL = new URL(fetchEvent.request.url);

  if (requestURL.origin == location.origin) {
    fetchEvent.respondWith(
      caches
        .match(fetchEvent.request)
        .then((res) => {
          return res || fetch(fetchEvent.request);
        })
        .catch((err) => {
          console.log("fetching cache error: ", err);
          return fetch(fetchEvent.request);
        })
    );
  } else {
    fetchEvent.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(function (cache) {
        return cache.match(fetchEvent.request).then(function (response) {
          let fetchPromise = fetch(fetchEvent.request).then(function (
            networkResponse
          ) {
            cache.put(fetchEvent.request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        });
      })
    );
  }
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log("Deleting cache : " + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
