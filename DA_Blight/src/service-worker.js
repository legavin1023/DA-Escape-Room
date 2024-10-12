const CACHE_NAME = 'v1';
const urlsToCache = [
    '@/assets/image/map1/background_1.png',
    '@/assets/image/next_btn.png',
    '@/assets/image/clue_ui.png',
    '@/assets/image/map1/map_1_1.png',
    '@/assets/image/map1/map_1_2_1.png',
    '@/assets/image/map1/map_1_2_2.png',
    '@/assets/image/map1/map_1_3_1.png',
    '@/assets/image/map1/map_1_3_2.png',
    '@/assets/image/map2/map_2_1.png',
    '@/assets/image/map2/map_2_2_1.png',
    '@/assets/image/map2/map_2_2_2.png',
    '@/assets/image/map2/map_2_3.png',
    '@/assets/image/map2/map_2_4.png',
    '@/assets/image/map3/map_3_1.png',
    '@/assets/image/map3/map_3_2_1.png',
    '@/assets/image/map3/map_3_2_2.png',
    '@/assets/image/map3/map_3_3_1.png',
    '@/assets/image/map3/map_3_3_2.png'
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
