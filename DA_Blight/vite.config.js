import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: process.env.NODE_ENV === 'production'
    ? '/<DA_Escape_Room>/'  // GitHub Pages의 리포지토리 이름으로 변경
    : '/',  // 개발 환경에서는 루트 경로
});
