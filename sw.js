const CACHE_NAME = 'tanquib-cache-v7';
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

// Instalación: Guarda los archivos en la memoria del celular
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('TanQuib: Archivos cacheados para combate offline');
      return cache.addAll(assets);
    })
  );
});

// Estrategia: Carga desde caché para velocidad máxima, si no existe, busca en red
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((res) => {
      return res || fetch(evt.request);
    })
  );
});