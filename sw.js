var CACHE_NAME = 'yanban-shell-v1';
var APP_SHELL = ['./', './index.html', './manifest.json'];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(APP_SHELL).catch(function(){ /* ignore individual failures */ });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  var isSameOrigin = e.request.url.indexOf(self.location.origin) === 0;
  if (!isSameOrigin) return; // let CDN (firebase) requests pass through untouched

  e.respondWith(
    caches.match(e.request).then(function(cached){
      var fetchPromise = fetch(e.request).then(function(networkResp){
        if (networkResp && networkResp.status === 200) {
          caches.open(CACHE_NAME).then(function(cache){ cache.put(e.request, networkResp.clone()); });
        }
        return networkResp;
        }).catch(function(){ return cached; });
      return cached || fetchPromise;
    })
  );
});
