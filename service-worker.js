const CACHE_NAME = 'DAimage';
const urlsToCache = [
    '/DA-Escape-Room/image/next_btn.png',
    '/DA-Escape-Room/image/clue_ui.png',
    '/DA-Escape-Room/image/arrow_back.png"',
    '/DA-Escape-Room/image/display_area.png',
    '/DA-Escape-Room/image/map1/background_1.png',
    '/DA-Escape-Room/image/map2/background_2.png',
    '/DA-Escape-Room/image/map3/background_3.png',
    '/DA-Escape-Room/image/map4/background_4.png',
    '/DA-Escape-Room/image/nugbug/display_area.png',
    '/DA-Escape-Room/image/map1/map_1_1.png',
    '/DA-Escape-Room/image/map1/map_1_2_1.png',
    '/DA-Escape-Room/image/map1/map_1_2_2.png',
    '/DA-Escape-Room/image/map1/map_1_3_1.png',
    '/DA-Escape-Room/image/map1/map_1_3_2.png',
    '/DA-Escape-Room/image/map2/map_2_1.png',
    '/DA-Escape-Room/image/map2/map_2_2_1.png',
    '/DA-Escape-Room/image/map2/map_2_2_2.png',
    '/DA-Escape-Room/image/map2/map_2_3.png',
    '/DA-Escape-Room/image/map2/map_2_4.png',
    '/DA-Escape-Room/image/map3/map_3_1.png',
    '/DA-Escape-Room/image/map3/map_3_2_1.png',
    '/DA-Escape-Room/image/map3/map_3_2_2.png',
    '/DA-Escape-Room/image/map3/map_3_3_1.png',
    '/DA-Escape-Room/image/map3/map_3_3_2.png',
    '/DA-Escape-Room/image/map1/bonfire.png',
    '/DA-Escape-Room/image/map1/light_1.png',
    '/DA-Escape-Room/image/map1/light_2.png',
    '/DA-Escape-Room/image/map1/bone.png',
    '/DA-Escape-Room/image/map1/lock.png"',
    '/DA-Escape-Room/image/map1/화살움직.png',
    '/DA-Escape-Room/image/map1/화살고정.png',
    '/DA-Escape-Room/image/map1/frame_light.png',
    '/DA-Escape-Room/image/map2/candle.png',
    '/DA-Escape-Room/image/map2/logo.png',
    '/DA-Escape-Room/image/map2/crow.png"',
    '/DA-Escape-Room/image/map2/map.png',
    '/DA-Escape-Room/image/map3/shadow2.png',
    '/DA-Escape-Room/image/map3/shadow1.png"',
    '/DA-Escape-Room/image/map3/camp_light.png',
    '/DA-Escape-Room/image/map4/formBox.png',
    '/DA-Escape-Room/image/map4/textInput.png',
    '/DA-Escape-Room/image/outro/모리건.png',
    '/DA-Escape-Room/image/outro/text_1.png',
    '/DA-Escape-Room/image/outro/text_2.png',
    '/DA-Escape-Room/image/nugbug/logo.png'


];

// 설치 이벤트에서 캐시하기
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching files:', urlsToCache);
            return Promise.all(urlsToCache.map(url => {
                return fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Network response was not ok for ${url}`);
                        }
                        return cache.add(url); // Cache the response
                    })
                    .catch(error => {
                        console.error(`Failed to cache: ${url}`, error);
                    });
            }));
        })
    );
});

// 활성화 이벤트에서 오래된 캐시 삭제
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 요청 이벤트에서 캐시된 파일 반환
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response; // 캐시에서 응답
            }
            return fetch(event.request).catch((error) => {
                console.error('Fetching failed:', error);
            });
        })
    );
});
urlsToCache.forEach((url) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response;
        })
        .then(response => {
            console.log(`Successfully cached: ${url}`);
        })
        .catch(error => {
            console.error(`Failed to cache: ${url}`, error);
        });
});
urlsToCache.forEach(url => {
    
   
console.log(`캐싱 시도 중: ${url}`);
});