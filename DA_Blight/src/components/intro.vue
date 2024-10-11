<template>
  <div class="page intro">
    <div class="dim"></div>
    <div class="narration">
      <div class="narration-border">
        <p class="narration-text" :class="{ visible: isVisible }">{{ displayedText }}</p>
      </div>
    </div>
    <button class="collect-nextBtn" v-if="showBtn" @click="goNext">-></button>
  </div>
  <audio
    ref="nextSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav"
  ></audio>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Base64 } from 'js-base64'
const texts = ['머리가 너무 아프다.', '어떻게, 어떻게 된 거지? 여긴 어디지?', '나는, 누구지?']

export default {
  name: 'NextPage',

  setup() {
    const router = useRouter() // Router instance 가져오기
    const showBtn = ref(false) // Next 버튼 표시 여부
    const displayedText = ref('') // 현재 표시되는 텍스트
    const index = ref(0) // 글자 인덱스
    const currentTextIndex = ref(0) // 현재 표시할 문장의 인덱스
    const isVisible = ref(false) // visibility 상태
    const nextSound = ref(null)

    // 문장을 한 글자씩 표시하는 함수
    const typeText = (fullText) => {
      if (index.value < fullText.length) {
        displayedText.value += fullText[index.value]
        index.value++
        setTimeout(() => typeText(fullText), 100) // 글자 간격 (100ms)
      } else {
        showBtn.value = true // 모든 글자가 표시된 후 Next 버튼 활성화
      }
    }

    // 컴포넌트가 마운트되면 첫 번째 문장을 표시
    onMounted(() => {
      isVisible.value = true // 처음에 visible 설정
      typeText(texts[currentTextIndex.value])
    })

    const goNext = () => {
      // 다음 문장으로 이동
      if (currentTextIndex.value < texts.length - 1) {
        playSound(nextSound)
        currentTextIndex.value++
        displayedText.value = '' // 이전 텍스트 지우기
        index.value = 0 // 인덱스 초기화
        showBtn.value = false // 버튼 숨기기

        // 다음 문장 표시
        isVisible.value = false // visible을 false로 설정
        setTimeout(() => {
          typeText(texts[currentTextIndex.value]) // 다음 문장 표시
          isVisible.value = true // visible을 true로 설정
        }, 300) // 300ms 대기 후 visible 설정
      } else {
        // playSound(nextSound)
        router.push(`/${Base64.encode('stage_1')}`) // 다음 페이지로 이동
      }
    }
    const playSound = (sound) => {
      if (sound.value) {
        sound.value.pause() // 이전 소리 멈춤
        sound.value.currentTime = 0 // 소리의 시작 시간 초기화

        // 소리 재생
        sound.value.play()

        // 소리 재생이 끝났을 때의 동작
        sound.value.onended = () => {
          sound.value.pause() // 소리 멈춤
          sound.value.currentTime = 0 // 시작 시간 초기화
        }
      }
    }
    return {
      showBtn,
      goNext,
      texts,
      displayedText,
      isVisible,
      playSound,
      nextSound
    }
  }
}
</script>

<style>
.narration-text {
  opacity: 0; /* 초기 오퍼시티 0 */
  transition: opacity 0.3s ease; /* 오퍼시티 전환 효과 */
}

.narration-text.visible {
  opacity: 1; /* visible 클래스가 적용되면 오퍼시티 1로 전환 */
}
</style>
