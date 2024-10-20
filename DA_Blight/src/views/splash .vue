<template>
  <div>
    <canvas ref="canvas" width="500" height="500"></canvas>
  </div>
  <audio
    ref="potetoSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_4/빵파레.mp3"
  ></audio>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import 'gifler'

export default {
  setup() {
    const canvas = ref(null)
    const router = useRouter()

    const renderGif = () => {
      const ctx = canvas.value.getContext('2d') // ctx 사용
      if (!ctx) {
        console.error('Canvas context is null.')
        return
      }

      gifler('/image/splash/Master_final.gif').get((aGif) => {
        // GIF 애니메이션을 캔버스에 그립니다.
        aGif.animateInCanvas(canvas.value, {
          loop: false, // 반복하지 않음
          done: () => {
            router.push({ name: 'main' }) // GIF가 끝났을 때 이동할 라우트
          }
        })
      })
    }

    onMounted(() => {
      renderGif() // renderGif 함수 호출
    })

    return {
      renderGif,
      canvas
    }
  }
}
</script>

<style scoped>
/* 캔버스 크기 조정 */
canvas {
  width: 100%;
  height: auto;
}
</style>
