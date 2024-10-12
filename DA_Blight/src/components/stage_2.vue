<template>
  <div class="page map2">
    <div class="modal_box_1">
      <!-- 첫 번째 모달 -->
      <div v-if="activeModal === 1" class="modal">
        <div class="modal-content modal_2_1">
          <span
            class="close"
            @click="
              (event) => {
                closeModal()
                displayText('편안해보이는 침대다. 오랜만, 이던가?')
              }
            "
            >×</span
          >
          <p class="modal-content-get"><span>체크</span></p>
        </div>
      </div>
    </div>
    <!-- 두 번째 모달 -->
    <div v-if="activeModal === 2" class="modal">
      <div class="modal-content modal_2_2_1">
        <button
          @click="openNestedModal(2), displayText('잘 보관된 인형이다. 왠지 섬뜩하다.')"
        ></button>
        <span
          class="close"
          @click="
            (event) => {
              closeModal()
              displayText('편안해보이는 침대다. 오랜만, 이던가?')
            }
          "
          >×</span
        >
      </div>
    </div>
    <div class="modal_box_2">
      <!-- 두 번째 모달 안의 모달 -->
      <div v-if="activeNestedModal2" class="modal">
        <div class="modal-content modal_2_2_2">
          <span
            class="close"
            @click="
              (event) => {
                closeNestedModal2()
                displayText('침대 아래는 잘 관리되어 의외로 깨끗하다.')
              }
            "
            >×</span
          >
          <p class="modal-content-get"><span>체크</span></p>
        </div>
      </div>
    </div>

    <div class="modal_box_3">
      <!-- 세 번째 모달 -->
      <div v-if="activeModal === 3" class="modal">
        <div class="modal-content modal_2_3">
          <span
            class="close"
            @click="
              (event) => {
                closeModal()
                displayText('편안해보이는 침대다. 오랜만, 이던가?')
              }
            "
            >×</span
          >
          <p class="modal-content-get"><span>체크</span></p>
        </div>
      </div>
    </div>
    <div class="modal_box_4">
      <!-- 네 번째 모달 -->
      <div v-if="activeModal === 4" class="modal">
        <div class="modal-content modal_2_4">
          <span
            class="close"
            @click="
              (event) => {
                closeModal()
                displayText('편안해보이는 침대다. 오랜만, 이던가?')
              }
            "
            >×</span
          >
          <p class="modal-content-get"><span>체크</span></p>
        </div>
      </div>
    </div>

    <button
      class="page-2-1"
      @click="
        openModal(1),
          displayText(
            '두 사람이 누울 수 있는 침대. 잘 정리되어 있다. 마치 아무 일도 없었던 것처럼.'
          )
      "
    ></button>
    <button
      class="page-2-2"
      @click="openModal(2), displayText('침대 아래는 잘 관리되어 의외로 깨끗하다.')"
    ></button>
    <button
      class="page-2-3"
      @click="
        openModal(3),
          displayText(
            '독특한 문양이 그려진 목걸이가 걸려 있다. 누군가 늘 지니고 다녔던 듯 조금 흠집이 나 있다.'
          )
      "
    ></button>
    <button
      class="page-2-4 candle"
      @click="openModal(4), displayText('거의 다 닳아 있는 초. 금방 꺼질 것만 같다.')"
    ></button>
    <div class="narration">
      <div class="narration-border">
        <p class="narration-text" :class="{ visible: displayedText }">
          {{ displayedText || defaultText }}
        </p>
      </div>
    </div>
    <div class="collect">
      <img class="collect-1" :src="collectImages[0]" alt="Image 1" />
      <img class="collect-2" :src="collectImages[1]" alt="Image 2" />
      <img class="collect-3" :src="collectImages[2]" alt="Image 3" />
      <img class="collect-4" :src="collectImages[3]" alt="Image 4" />
    </div>
    <button
      class="collect-nextBtn"
      :class="{ disabled: activeModal !== null }"
      v-if="showBtn"
      @click="goNext"
    ></button>
    <div class="effect">
      <!-- 로고 버튼 -->
      <div
        class="logo_btn"
        @click="displayText('얼룩... 그을린 건가? 용 같은 모양이네.'), click_logo_btn()"
        :class="{ disabled: isTyping }"
      ></div>
      <!-- 까마귀 버튼 -->
      <div
        class="crow_btn"
        @click="
          displayText('까마귀. 누군가는 이 동물을 친구라고 칭했던 것 같은데.'), click_crow_btn()
        "
        :class="{ disabled: isTyping }"
      ></div>
      <!-- 지도 -->
      <div
        class="map_btn"
        @click="
          displayText('내일은... 어디로 가기로 했더라...? 그전에 우리가 어디서 왔었지?'),
            click_map_btn()
        "
        :class="{ disabled: isTyping }"
      ></div>
    </div>
  </div>

  <audio
    ref="nextSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav"
  ></audio>
  <audio
    ref="crowSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/까마귀소리.mp3"
  ></audio>
  <audio
    ref="necklaceSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/목걸이.wav"
  ></audio>
  <audio
    ref="mapSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/부스럭소리.mp3"
  ></audio>
  <audio
    ref="bed1Sound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/시트소리.wav"
  ></audio>
  <audio
    ref="logoSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/daOrigin.mp3"
  ></audio>
  <audio
    ref="candleSound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/초켜는소리.wav"
  ></audio>
  <audio
    ref="bed2_1_Sound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/침대삐걱.wav"
  ></audio>
  <audio
    ref="bed2_2_Sound"
    src="https://legavin1023.github.io/DA-Escape-Room/sound/map_2/놀라는남자소리.wav"
  ></audio>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import offImage from '/image/off.png'
import onImage from '/image/on.png'

export default {
  mounted() {
    // 페이지에 진입하면 오디오 재생
    this.$audio.play().catch((error) => {
      console.error('오디오 재생 오류:', error)
    })
  },
  setup() {
    const count = ref(0)
    const buttonsClicked = ref([false, false, false])
    const router = useRouter()
    const showBtn = ref(false)
    const activeModal = ref(null)
    const activeNestedModal2 = ref(false)

    const image1 = offImage
    const image2 = offImage
    const image3 = offImage
    const image4 = offImage
    const newImage1 = onImage
    const newImage2 = onImage
    const newImage3 = onImage
    const newImage4 = onImage

    const collectImages = ref([image1, image2, image3, image4])

    const nextSound = ref(null)
    const bed1Sound = ref(null)
    const bed2_1_Sound = ref(null)
    const bed2_2_Sound = ref(null)
    const crowSound = ref(null)
    const necklaceSound = ref(null)
    const mapSound = ref(null)
    const logoSound = ref(null)
    const candleSound = ref(null)

    const defaultText = ref('편안해보이는 침대다. 오랜만, 이던가?')
    const fullText = ref('')
    const displayedText = ref('')
    let typingInterval = null
    let resetTimeout = null
    const isTyping = ref(false)

    onMounted(() => {
      displayText(defaultText.value, false) // 한 글자씩 타이핑 애니메이션 시작
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
      if (resetTimeout) {
        clearTimeout(resetTimeout)
      }

      // 타이핑 중에는 새로운 클릭 무시
      if (isTyping.value) {
        clearInterval(typingInterval) // 이전 타이핑 애니메이션 종료
        displayedText.value = '' // 기존 텍스트 초기화
        isTyping.value = false // 타이핑이 종료됨을 표시
      }

      // 텍스트 디스플레이를 위해 오퍼시티를 0으로 설정
      const narrationElement = document.querySelector('.narration_text')
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
    }

    //--------------------------------------------
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
    // 클릭 시 클래스 활성화

    const handleAnimation = (selector, animationClass, delay) => {
      const element = document.querySelector(selector)
      if (element) {
        setTimeout(() => {
          // 지연을 두어 애니메이션을 시작
          element.classList.add(animationClass)
          setTimeout(() => {
            element.classList.remove(animationClass)
          }, delay)
        }, 10) // 10ms의 지연
      }
    }

    const click_map_btn = () => {
      playSound(mapSound)
      handleAnimation('.map_btn', 'map_flap', 1500)
    }

    const click_logo_btn = () => {
      playSound(logoSound)
      handleAnimation('.logo_btn', 'logo_hidden', 600)
    }

    const click_crow_btn = () => {
      playSound(crowSound)
      handleAnimation('.crow_btn', 'crwow_move', 1500)
    }

    //-------------------------------------------------------------

    // 모든 이미지가 변경되었는지 확인
    const checkImagesChanged = () => {
      const allImagesChanged = collectImages.value.every((img) => img === onImage)
      if (allImagesChanged) {
        showBtn.value = true // 모든 이미지가 변경되면 버튼 활성화
      }
    }
    const modalOpenedOnce1 = ref(false) // 모달이 한번 열렸는지 여부
    const modalOpenedOnce2 = ref(false) // 모달이 한번 열렸는지 여부
    const modalOpenedOnce3 = ref(false) // 모달이 한번 열렸는지 여부
    const modalOpenedOnce4 = ref(false) // 모달이 한번 열렸는지 여부
    const openModal = (modalNumber) => {
      activeModal.value = modalNumber

      // 첫 번째 모달은 한 번만 열림
      if (modalNumber === 1) {
        playSound(bed1Sound)
        count.value++ // 첫 번째 모달을 열 때 count 증가
        changeImage(0) // 첫 번째 이미지 변경
        // 모달이 이미 열렸다면 done 클래스 추가
        if (modalOpenedOnce1.value) {
          const modalBox = document.querySelector('.modal_box_1')
          modalBox.classList.add('done')
        } else {
          // 처음 열었을 경우 modalOpenedOnce를 true로 설정
          modalOpenedOnce1.value = true
        }
      } else if (modalNumber === 2) {
        // 두 번째 모달 열 때는 count 증가하지 않음
        playSound(bed2_1_Sound)
      } else if (modalNumber === 3) {
        playSound(necklaceSound)
        count.value++ // 첫 번째 모달을 열 때 count 증가
        changeImage(2) // 첫 번째 이미지 변경
        // 모달이 이미 열렸다면 done 클래스 추가
        if (modalOpenedOnce3.value) {
          const modalBox = document.querySelector('.modal_box_3')
          modalBox.classList.add('done')
        } else {
          // 처음 열었을 경우 modalOpenedOnce를 true로 설정
          modalOpenedOnce3.value = true
        }
      } else if (modalNumber === 4) {
        playSound(candleSound)
        count.value++ // 첫 번째 모달을 열 때 count 증가
        changeImage(3) // 첫 번째 이미지 변경
        // 모달이 이미 열렸다면 done 클래스 추가
        if (modalOpenedOnce4.value) {
          const modalBox = document.querySelector('.modal_box_4')
          modalBox.classList.add('done')
        } else {
          // 처음 열었을 경우 modalOpenedOnce를 true로 설정
          modalOpenedOnce4.value = true
        }
      }
    }

    const closeModal = () => {
      activeModal.value = null
      activeNestedModal2.value = false
    }

    const openNestedModal = (modalNumber) => {
      if (modalNumber === 2 && !activeNestedModal2.value) {
        activeNestedModal2.value = true
        count.value++ // 두 번째 모달의 중첩 모달을 열 때 count 증가
        changeImage(1) // 두 번째 이미지 변경
        playSound(bed2_2_Sound)

        // 모달이 이미 열렸다면 done 클래스 추가
        if (modalOpenedOnce2.value) {
          const modalBox = document.querySelector('.modal_box_2')
          modalBox.classList.add('done')
        } else {
          // 처음 열었을 경우 modalOpenedOnce를 true로 설정
          modalOpenedOnce2.value = true
        }
      }
    }

    const closeNestedModal2 = () => {
      activeNestedModal2.value = false
    }

    const changeImage = (index) => {
      const newImages = [newImage1, newImage2, newImage3, newImage4]

      collectImages.value[index] = newImages[index]
      checkImagesChanged() // 이미지 변경 후 체크
    }

    const goNext = () => {
      router.push('stage_3')
    }

    return {
      count,
      buttonsClicked,
      openModal,
      closeModal,
      openNestedModal,
      closeNestedModal2,
      showBtn,
      goNext,
      collectImages,
      changeImage,
      activeModal,
      activeNestedModal2,
      handleAnimation,
      click_map_btn,
      click_logo_btn,
      click_crow_btn,
      playSound,
      nextSound,
      bed1Sound,
      bed2_1_Sound,
      crowSound,
      necklaceSound,
      mapSound,
      logoSound,
      candleSound,
      defaultText,
      displayedText,
      displayText,
      isTyping,
      modalOpenedOnce1,
      modalOpenedOnce2,
      modalOpenedOnce3,
      modalOpenedOnce4,
      bed2_2_Sound
    }
  }
}
</script>
