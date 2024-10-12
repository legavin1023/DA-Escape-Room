const CACHE_NAME = 'v1';
const urlsToCache = [
    '/image/map1/background_1.png',
    '/image/map2/background_2.png',
    '/image/map3/background_3.png',
    '/image/map4/background_4.png',
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
urlsToCache.forEach(url => {
    console.log(`Attempting to cache: ${url}`);
});

cache.addAll(urlsToCache)
    .catch(error => {
        console.error('Failed to cache:', error);
}); 
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('ImageLoad').then((cache) => {
             console.log('Caching files:', urlsToCache);
            return cache.addAll(urlsToCache);
        })
    );
});



self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        console.log('Deleting old cache:', name);
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});