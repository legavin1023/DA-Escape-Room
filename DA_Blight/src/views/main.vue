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
    <div class="noise-effect"><div class="glitch-lines"></div></div>
    <div class="glitch-vertical-line" style="animation-delay: 0s; left: 20%"></div>
    <div class="glitch-vertical-line" style="animation-delay: 0.1s; left: 48%"></div>
    <div class="glitch-vertical-line" style="animation-delay: 0.2s; left: 52%"></div>
    <div class="glitch-vertical-line" style="animation-delay: 0.2s; left: 72%"></div>
    <div class="glitch-vertical-line" style="animation-delay: 0.2s; left: 88%"></div>
    <canvas id="noise" class="noise"></canvas>
    <button class="start" @click="handleStart">시작하기</button>
  </div>
</template>

<script>
import router from '@/router'
import { inject, ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

export default {
  setup() {
    const toggleMusic = inject('toggleMusic') // 부모 컴포넌트에서 제공된 음악 재생/정지 함수
    const showMusic = inject('showMusic') // music 컴포넌트를 보여줄지 여부 상태
    const isMobile = ref(false)

    const noise = () => {
      let canvas, ctx
      let wWidth, wHeight
      let noiseData = []
      let frame = 0
      let loopTimeout

      // Create Noise
      const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight)
        const buffer32 = new Uint32Array(idata.data.buffer)
        const len = buffer32.length

        for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
            buffer32[i] = 0xffffffff // 검은색 픽셀
          }
        }

        noiseData.push(idata)
      }

      // Play Noise
      const paintNoise = () => {
        if (frame === 9) {
          frame = 0
        } else {
          frame++
        }

        ctx.putImageData(noiseData[frame], 0, 0)
      }

      // Loop
      const loop = () => {
        paintNoise()

        loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop)
        }, 1000 / 25) // 25fps
      }

      // Setup
      const setup = () => {
        wWidth = window.innerWidth
        wHeight = window.innerHeight

        canvas.width = wWidth
        canvas.height = wHeight

        noiseData = []

        for (let i = 0; i < 10; i++) {
          createNoise()
        }

        loop()
      }

      // Reset on Resize
      const reset = () => {
        let resizeThrottle
        window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle)
          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout)
            setup()
          }, 200)
        })
      }

      // Init
      onMounted(() => {
        canvas = document.getElementById('noise')
        ctx = canvas.getContext('2d')

        setup()
        reset()
      })

      onUnmounted(() => {
        window.clearTimeout(loopTimeout)
      })
    }
    noise()
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
      showMusic, // 음악 컴포넌트 표시 상태 반환
      noise
    }
  }
}
</script>

<style></style>
