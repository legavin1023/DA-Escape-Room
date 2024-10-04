<script setup></script>

<template>
  <header v-if="showMusic && route.name !== 'main'">
    <music />
  </header>
  <RouterView />
</template>

<script>
import music from '@/views/music.vue'
import { ref, provide, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    music
  },
  setup() {
    const isPlaying = ref(false) // 음악 재생 상태
    const showMusic = ref(false) // music 컴포넌트를 보여줄지 여부
    const toggleMusic = () => {
      isPlaying.value = !isPlaying.value // 음악 재생/정지 상태 토글
    }

    // 현재 라우트 정보 가져오기
    const route = useRoute()

    // 특정 라우트로 이동할 때 음악 자동 재생
    watch(route, (newRoute) => {
      if (newRoute.name === 'intro') {
        isPlaying.value = true // 음악을 무조건 재생 상태로 설정
        showMusic.value = true // music 컴포넌트도 보여줌
      }
    })

    // `provide`로 상태와 함수를 주입
    provide('isPlaying', isPlaying)
    provide('toggleMusic', toggleMusic)
    provide('showMusic', showMusic)

    return {
      showMusic,
      route
    }
  }
}
</script>

<style scoped></style>
