<template>
  <div>
    <canvas ref="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gifler from 'gifler' // 이 방식이 작동하지 않는 경우:
export default {
  setup() {
    const canvas = ref(null)
    const router = useRouter()

    const renderGif = () => {
      const ctx = canvas.value.getContext('2d')

      gifler('/DA-Escape-Room/image/splash/Master_final.gif').get((aGif) => {
        aGif.animateInCanvas(canvas.value, {
          done: () => {
            // GIF가 끝났을 때 이동할 라우트
            router.push({ name: 'main' })
          }
        })
      })
    }

    onMounted(() => {
      renderGif()
    })
    return {
      renderGif
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
