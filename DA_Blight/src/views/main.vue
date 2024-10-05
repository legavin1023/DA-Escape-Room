<template>
  <div class="page main">
    <button class="start" @click="handleStart">시작하기</button>
  </div>
</template>

<script>
import router from '@/router'
import { inject } from 'vue'

export default {
  setup() {
    const toggleMusic = inject('toggleMusic') // 부모 컴포넌트에서 제공된 음악 재생/정지 함수
    const showMusic = inject('showMusic') // music 컴포넌트를 보여줄지 여부 상태

    const handleStart = () => {
      showMusic.value = true // 음악 컴포넌트를 보여줌
      toggleMusic() // 음악 재생
      router.push('/intro') // 라우터 이동
    }

    return {
      handleStart
    }
  }
}
</script>

<style></style>
