const CACHE_NAME = 'v1';
const urlsToCache = [
    '/image/map1/background_1.png',
    '/image/next_btn.png',
    '/image/clue_ui.png',
    '/image/map1/map_1_1.png',
    '/image/map1/map_1_2_1.png',
    '/image/map1/map_1_2_2.png',
    '/image/map1/map_1_3_1.png',
    '/image/map1/map_1_3_2.png',
    '/image/map2/map_2_1.png',
    '/image/map2/map_2_2_1.png',
    '/image/map2/map_2_2_2.png',
    '/image/map2/map_2_3.png',
    '/image/map2/map_2_4.png',
    '/image/map3/map_3_1.png',
    '/image/map3/map_3_2_1.png',
    '/image/map3/map_3_2_2.png',
    '/image/map3/map_3_3_1.png',
    '/image/map3/map_3_3_2.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('install', event => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});