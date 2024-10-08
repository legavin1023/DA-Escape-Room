import '@/assets/scss/index.scss'
import '@/assets/css/reset.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
// 오디오 객체를 생성하고 전역 속성에 등록
app.config.globalProperties.$audio = new Audio("https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav");


app.mount('#app')
