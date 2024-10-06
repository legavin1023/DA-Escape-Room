import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 해시 모드로 변경
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/main.vue'),
    },
    {
      path: '/intro',
      name: 'intro',
      component: () => import('@/components/intro.vue'),
    },
    {
      path: '/stage_1',
      name: 'stage_1',
      component: () => import('@/components/stage_1.vue'),
    },
    {
      path: '/stage_2',
      name: 'stage_2',
      component: () => import('@/components/stage_2.vue'),
    },
    {
      path: '/stage_3',
      name: 'stage_3',
      component: () => import('@/components/stage_3.vue'),
    },
    {
      path: '/stage_4',
      name: 'stage_4',
      component: () => import('@/components/stage_4.vue'),
    },
    {
      path: '/ending',
      name: 'ending',
      component: () => import('@/components/ending.vue'),
    },
    {
      path: '/outro',
      name: 'outro',
      component: () => import('@/components/outro.vue'),
    },
  ],
});

export default router;
