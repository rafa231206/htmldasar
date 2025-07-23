const CACHE_NAME = 'profile-card-v1';
const urlsToCache = [
  '/',
  'index.html',
  'web/1. HTML.html',
  'web/2. list.html',
  'web/3. link.html',
  'web/4. atribute html.html',
  'web/5. tabel.html',
  'web/6. form.html',
  'web/7. images.html',
  'web/8. video.html',
  'web/9. suara.html',
  'web/latihan/latihan 1.html',
  'web/latihan/latihan 2/buku.html',
  'web/latihan/latihan 2/index.html',
  'web/latihan/latihan 2/kontak.html',
  'web/latihan/latihan 3/buku.html',
  'web/latihan/latihan 3/index.html',
  'web/latihan/latihan 3/kontak.html',
  'web/latihan/latihan 3/img/at-taisir.jpg',
  'web/latihan/latihan 3/img/bumi-manusia.jpg',
  'web/latihan/latihan 3/img/Lambang_Kabupaten_Lumajang.png',
  'web/latihan/latihan 3/img/rectoverso.jpg',
  'img/quality_restoration_20250330050655089.jpg',
  'web/img/instagram_logo_icon_168715.png',
  'web/img/lv_7300184189909945607_20240404052751.mp4',
  'web/img/lv_7319512867731033345_20240404042752.mp4',
  'web/img/media_social_tiktok_icon_124256.png',
  'web/img/KUTO KARANGANYAR TENTREM ADEM AYEM BUMI SUROKARTO - SOUND TIKTOK VIRAL 2025 [bVtGILl5nro].mp3',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  // Tambahkan path ke ikon PWA Anda di sini
  'img/icons/icon-192x192.png',
  'img/icons/icon-512x512.png',
  'img/icons/favicon.ico',
  'img/icons/apple-touch-icon.png',
  'img/icons/favicon-32x32.png',
  'img/icons/favicon-16x16.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => {
        // Bisa kembalikan page offline, gambar dummy, atau lain
      });
    })
  );
});


self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
