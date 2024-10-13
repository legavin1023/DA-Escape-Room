import '@/assets/scss/index.scss'
import '@/assets/css/reset.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

//서비스워커로 이미지 미리다운
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/DA-Escape-Room/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}



app.use(router)
// 오디오 객체를 생성하고 전역 속성에 등록
app.config.globalProperties.$audio = new Audio("https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav");
app.config.globalProperties.$poteto = new Audio("https://legavin1023.github.io/DA-Escape-Room/sound/리추얼엔딩.mp3");


app.mount('#app')
