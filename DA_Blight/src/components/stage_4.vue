<template>
  <div class="page map4">
    <button class="nameBtn" @click="nameBtn">문</button>
    <div v-if="typingName" class="nameBox">
      <p>내이름은</p>
      <div class="inputBox"><input type="text" v-model="nameInput" /></div>
      <button class="check" @click="textSubmit" :disabled="!nameInput"><span></span>확인</button>
    </div>
    <div class="narration">
      <div class="narration-border">
        <p class="narration-text" :class="{ visible: displayedText }">
          {{ displayedText || defaultText }}
        </p>
      </div>
    </div>
    <div v-if="poteto === true" class="modal poteto">
      <div class="poteto-box">
        <span
          class="closePoteto"
          @click="
            (event) => {
              closeModal()
            }
          "
          >×</span
        >
      </div>
    </div>
  </div>

  <audio
    ref="nextSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav"
  ></audio>
  <audio
    ref="closeSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_4/문닫힘.mp3"
  ></audio>
  <audio
    ref="openSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_4/문열림.mp3"
  ></audio>
  <audio
    ref="potetoSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_4/빵파레.mp3"
  ></audio>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router' // Vue Router 사용

export default {
  setup() {
    const nextSound = ref(null)
    const closeSound = ref(null)
    const openSound = ref(null)
    const potetoSound = ref(null)
    const poteto = ref(null)
    const router = useRouter() // Router instance 가져오기
    const typingName = ref(false)
    const nameInput = ref('') // 입력값을 저장할 변수
    const showError = ref(false) // 틀렸습니다 메시지 표시 여부
    const defaultText = '여기서 나가야 해. 그게 맞겠지.' // 기본 텍스트
    const errorMessage = '아니, 아니야…' // 에러 메시지
    const displayedText = ref(defaultText) // 현재 표시되는 텍스트
    const fullText = ref('') // 전체 텍스트
    const isTyping = ref(false) // 타이핑 중 여부
    let typingInterval = null // 타이핑 인터벌 변수

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
    const nameBtn = () => {
      typingName.value = true
      displayText('내 이름은...', false) // 버튼 클릭 시 '내 이름은...' 표시
    }

    const textSubmit = () => {
      if (
        nameInput.value === '알리스터' ||
        nameInput.value === 'Alistair' ||
        nameInput.value === 'alistair'
      ) {
        playSound(openSound)
        showError.value = false // 올바른 경우, 에러 메시지 숨김
        displayedText.value = '그래, 이제 다 끝났어.' // 올바른 이름 입력 시 메시지 변경
        // 이후 로직 추가 가능 (예: 페이지 이동)
        setTimeout(() => {
          router.push('/outro') // 1초 후 페이지 이동
        }, 1000)
      } else if (nameInput.value === '감자') {
        poteto.value = true
        playSound(potetoSound)
        showError.value = true // 틀린 경우, 에러 메시지 표시
        displayText(errorMessage, false) // 틀린 이름 입력 시 에러 메시지 변경
      } else {
        playSound(closeSound)
        showError.value = true // 틀린 경우, 에러 메시지 표시
        displayText(errorMessage, false) // 틀린 이름 입력 시 에러 메시지 변경
      }
    }
    const closeModal = () => {
      poteto.value = false
    }
    onMounted(() => {
      displayText(defaultText, false) // 한 글자씩 타이핑 애니메이션 시작
    })

    // 타이핑 애니메이션 함수
    const typeText = () => {
      isTyping.value = true // 타이핑 중임을 표시
      let index = 0
      typingInterval = setInterval(() => {
        if (index < fullText.value.length) {
          displayedText.value += fullText.value[index]
          index++
        } else {
          clearInterval(typingInterval)
          isTyping.value = false // 타이핑이 끝나면 버튼을 다시 활성화
        }
      }, 100)
    }

    // 텍스트 디스플레이 함수
    const displayText = (text, isInstant = false) => {
      // 이전 타이머 클리어
      if (typingInterval) {
        clearInterval(typingInterval)
      }

      // 타이핑 중에는 새로운 클릭 무시
      if (isTyping.value) {
        clearInterval(typingInterval) // 이전 타이핑 애니메이션 종료
        displayedText.value = '' // 기존 텍스트 초기화
        isTyping.value = false // 타이핑이 종료됨을 표시
      }

      // 텍스트 디스플레이를 위해 오퍼시티를 0으로 설정
      const narrationElement = document.querySelector('.narration-text')
      if (narrationElement) {
        narrationElement.classList.remove('visible') // 오퍼시티를 0으로 설정
      }

      displayedText.value = '' // 기존 텍스트 초기화
      fullText.value = text // 새로운 텍스트 설정

      // 타이핑 없이 즉시 텍스트를 표시해야 할 경우
      if (isInstant) {
        displayedText.value = text
        isTyping.value = false // 즉시 완료 처리
      } else {
        typeText() // 타이핑 애니메이션 시작
      }

      // 텍스트가 바뀌면 오퍼시티를 1로 설정
      setTimeout(() => {
        if (narrationElement) {
          narrationElement.classList.add('visible') // 오퍼시티를 1로 설정
        }
      }, 1) // 잠시 후에 오퍼시티를 1로 증가시키도록 설정
      //--------------------------------------------
    }

    return {
      nameBtn,
      typingName,
      nameInput,
      textSubmit,
      showError,
      displayedText,
      errorMessage,
      displayText,
      nextSound,
      closeSound,
      openSound,
      playSound,
      potetoSound,
      poteto,
      closeModal
    }
  },
  mounted() {
    // 페이지에 진입하면 오디오 재생
    this.$audio.play().catch((error) => {
      console.error('오디오 재생 오류:', error)
    })
  }
}
</script>

<style scoped>
.narration-text {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.narration-text.visible {
  opacity: 1;
}
</style>
