const CACHE_NAME = 'tanquib-v7';
const assets = [
  'index.html',
  'manifest.json',
  'suelo.png',
  'tanque_base.png',
  'tanque_torreta.png',
  'enemigo_base.png',
  'enemigo_torreta.png',
  'muros.png',
  'municion.png',
  'vida.png'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((res) => {
      return res || fetch(evt.request);
    })
  );
});