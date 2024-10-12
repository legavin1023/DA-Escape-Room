<template>
  <div class="mobile-warning" v-if="isMobile">
    <p>
      본 게임은 <br />
      모바일로 플레이 할 수 없습니다.<br />
      <span>PC환경으로 접속</span>해주십시오.
    </p>
    <a class="logo" href="https://legavin1023.github.io/nugbug/#/">너그버그</a>
  </div>
  <div v-else class="page main">
    <button class="start" @click="handleStart">시작하기</button>
  </div>
</template>

<script>
import router from '@/router'
import { inject, ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const toggleMusic = inject('toggleMusic') // 부모 컴포넌트에서 제공된 음악 재생/정지 함수
    const showMusic = inject('showMusic') // music 컴포넌트를 보여줄지 여부 상태
    const isMobile = ref(false)

    const handleStart = () => {
      showMusic.value = true // 음악 컴포넌트를 보여줌
      toggleMusic() // 음악 재생
      router.push('/intro') // 라우터 이동
    }

    const checkIfMobile = () => {
      isMobile.value = window.innerWidth <= 768 // 모바일 기준 설정 (768px)
    }

    onMounted(() => {
      checkIfMobile()
      window.addEventListener('resize', checkIfMobile)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkIfMobile)
    })

    return {
      isMobile, // 반환하여 템플릿에서 사용 가능
      handleStart, // 클릭 이벤트에서 호출될 함수 반환
      toggleMusic, // 음악 재생/정지 함수 반환
      showMusic // 음악 컴포넌트 표시 상태 반환
    }
  }
}
</script>

<style></style>
