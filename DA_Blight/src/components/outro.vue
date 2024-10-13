<template>
  <div class="page outro">
    <div class="morrigan"></div>
    <div class="morrigan_text_1" :class="{ visible: isText1Visible }">
      <p>일어났으면 그만 나가봐!</p>
    </div>
    <div class="morrigan_text_2" :class="{ visible: isText2Visible }">
      <p>
        이제 각자 해야 할 <br />
        일이 있잖아?
      </p>
    </div>
    <div class="narration">
      <button class="collect-nextBtn" v-if="showBtn" @click="goNext"></button>

      <div class="narration-border">
        <p class="narration-text" :class="{ visible: isVisible }">{{ displayedText }}</p>
      </div>
    </div>
  </div>
  <audio
    ref="nextSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav"
  ></audio>
  <audio
    ref="morriganSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/outro/모리건샤우팅.mp3"
  ></audio>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NextPage',

  setup() {
    const showBtn = ref(false)
    const router = useRouter() // Router instance 가져오기
    const morriganSound = ref(false)
    const displayedText = ref('') // 현재 표시되는 텍스트
    const index = ref(0) // 글자 인덱스
    const isVisible = ref(false) // visibility 상태
    // const fullText = ['모리건…'] // 배열일 경우
    const fullText = '모리건…' // 표시할 전체 텍스트
    const isText1Visible = ref(false)
    const isText2Visible = ref(false)
    // 문장을 한 글자씩 표시하는 함수
    const typeText = () => {
      if (index.value < fullText.length) {
        displayedText.value += fullText[index.value]
        index.value++
        setTimeout(typeText, 100) // 글자 간격 (100ms)
      }
    }

    // 배열로 문장 여러개넣기
    // const typeText = (fullText) => {
    //   if (index.value < fullText.length) {
    //     displayedText.value += fullText[index.value]
    //     index.value++
    //     setTimeout(() => typeText(fullText), 100) // 글자 간격 (100ms)
    //   }
    // }

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

    // 컴포넌트가 마운트되면 텍스트를 표시
    onMounted(() => {
      // 2초 후에 morrigan_text_1 표시
      setTimeout(() => {
        isText1Visible.value = true
        playSound(morriganSound)
      }, 1000)

      // 6초 후에 morrigan_text_2 표시
      setTimeout(() => {
        isText2Visible.value = true
        playSound(morriganSound)
      }, 2000)
      setTimeout(() => {
        isVisible.value = true // 처음에 visible 설정
        typeText() // 텍스트 타이핑 시작
      }, 4000)
      setTimeout(() => {
        showBtn.value = true
      }, 6000) //
    })
    const goNext = () => {
      router.push('/nugbug')
    }
    return {
      displayedText,
      isVisible,
      isText1Visible,
      isText2Visible,
      showBtn,
      goNext,
      playSound,
      morriganSound
    }
  }
}
</script>

<style></style>
