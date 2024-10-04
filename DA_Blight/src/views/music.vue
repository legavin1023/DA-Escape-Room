<template>
  <div>
    <button @click="toggleMusic">
      <span v-if="isPlaying">🔊</span>
      <!-- 재생 중이면 스피커 아이콘 -->
      <span v-else>🔇</span>
      <!-- 정지 상태면 음소거 아이콘 -->
    </button>

    <!-- 음악 요소 -->
    <audio ref="audioElement" src="/music/Anguish.mp3" loop></audio>
  </div>
</template>

<script>
import { inject, onMounted, ref, watch } from 'vue'

export default {
  setup() {
    const isPlaying = inject('isPlaying') // 부모 컴포넌트에서 제공된 음악 상태
    const toggleMusic = inject('toggleMusic') // 음악 재생/정지 함수
    const audioElement = ref(null) // audio 엘리먼트 참조

    // 음악 재생/정지 상태가 변경될 때마다 오디오를 제어하는 watch 함수
    watch(isPlaying, (newVal) => {
      if (audioElement.value) {
        if (newVal) {
          audioElement.value.play() // 음악 재생
        } else {
          audioElement.value.pause() // 음악 정지
        }
      }
    })

    onMounted(() => {
      if (isPlaying.value && audioElement.value) {
        audioElement.value.play() // 음악 재생
      }
    })

    return {
      isPlaying,
      toggleMusic,
      audioElement
    }
  }
}
</script>
