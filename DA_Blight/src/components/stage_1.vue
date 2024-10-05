<template>
  <div class="page map1">
    <!-- <button class="page-1-1" @click="openModal(1)" :disabled="buttonsClicked[0]"> -->
    <button class="page-1-1" @click="openModal(1)"></button>
    <button class="page-1-2" @click="openModal(2)"></button>
    <button class="page-1-3" @click="openModal(3)"></button>
    <div class="narration">
      <div class="narration-border">
        <p v-if="activeModal === null">모닥불이 실내의 찬 공기를 데우고 있다.</p>
        <p v-else-if="activeModal === 1">
          평화로운 때가 되면 사람들은 죽일 동물을 찾아 헤맨다. 그 시기에 사냥당한 사슴의 머리는…
          왠지 기묘하다.
        </p>
        <p v-else-if="activeModal === 2 && !activeNestedModal2">모닥불에서 열기가 전해진다.</p>
        <p v-else-if="activeNestedModal2">
          "대재앙, 다크스폰… 누군가 쓴 일지 같다. 많이 연구한 듯 빼곡하게 적혀있었던 듯 하지만
          대부분 타버려 알아볼 수 없다. 열심히 써놓고 왜 태워버린걸까. 더이상 쓸모가 없어서? 아니면
          누군가에게 들키지 않기 위해?"
        </p>
        <p v-else-if="activeModal === 3 && !activeNestedModal3">차곡차곡 정리된 템플러 갑옷이다.</p>
        <p v-else-if="activeNestedModal3">
          "그리고 이건… 무언가 수놓아진 손수건이다. 회색감시자의 상징인가? 훼손되서 알아보기 어렵다"
        </p>
        <p v-else-if="narrationText === 'candleText'">
          모닥불에 비하면 차가울 정도로 약한 촛불이다.
        </p>
        <p v-else-if="narrationText === 'boneText'">
          뼈다귀. 마바리 친구는 이걸 두고 어디로 간거지?
        </p>
        <p v-else-if="narrationText === 'lockText'">자물쇠를 따는 재주는 없어.</p>
        <p v-else-if="narrationText === 'arrowText'">실내에서 활 연습이라도 했던가?</p>
        <p v-else-if="narrationText === 'frameText'">어딘가 낯이 익은 그림들이다.</p>
      </div>
    </div>
    <div class="collect">
      <img class="collect-1" :src="collectImages[0]" alt="Image 1" />
      <img class="collect-2" :src="collectImages[1]" alt="Image 2" />
      <img class="collect-3" :src="collectImages[2]" alt="Image 3" />
    </div>
    <button class="collect-nextBtn" v-if="showBtn" @click="goNext">-></button>
    <div class="effect">
      <div class="bonfire"></div>
      <div :class="{ light_1: true }"></div>
      <div :class="{ light_2: true }"></div>
      <div class="light_btn_1" @click="click_light_btn_1()"></div>
      <div class="light_btn_2" @click="click_light_btn_2()"></div>

      <div class="bone" @click="click_bone_btn()"></div>

      <div class="frame_light" @click="click_frame_light_btn()"></div>

      <div class="lock_btn" @click="click_lock_btn()"></div>
      <div class="lock"></div>

      <div class="arrow" @click="click_arrow_btn()"></div>
    </div>
  </div>

  <!-- 첫 번째 모달 -->
  <div v-if="activeModal === 1" class="modal">
    <div class="modal-content modal_1_1">
      <span class="close" @click="closeModal">×</span>
    </div>
  </div>

  <!-- 두 번째 모달 -->
  <div v-if="activeModal === 2" class="modal">
    <div class="modal-content modal_1_2_1">
      <button @click="openNestedModal(2)"></button>
      <span class="close" @click="closeModal">×</span>
    </div>
  </div>

  <!-- 두 번째 모달 안의 모달 -->
  <div v-if="activeNestedModal2" class="modal">
    <div class="modal-content modal_1_2_2">
      <span class="close" @click="closeNestedModal2">×</span>
    </div>
  </div>

  <!-- 세 번째 모달 -->
  <div v-if="activeModal === 3" class="modal">
    <div class="modal-content modal_1_3_1">
      <button @click="openNestedModal(3)"></button>
      <span class="close" @click="closeModal">×</span>
    </div>
  </div>

  <!-- 세 번째 모달 안의 모달 -->
  <div v-if="activeNestedModal3" class="modal">
    <div class="modal-content modal_1_3_2">
      <span class="close" @click="closeNestedModal3">×</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import offImage from '@/assets/image/off.png'
import onImage from '@/assets/image/on.png'

export default {
  setup() {
    const count = ref(0)
    const buttonsClicked = ref([false, false, false])
    const router = useRouter()
    const showBtn = ref(false)
    const activeModal = ref(null)
    const activeNestedModal2 = ref(false)
    const activeNestedModal3 = ref(false)

    let timer = null

    const narrationText = ref('')

    const image1 = offImage
    const image2 = offImage
    const image3 = offImage
    const newImage1 = onImage
    const newImage2 = onImage
    const newImage3 = onImage

    const collectImages = ref([image1, image2, image3])

    //--------------------------------------------

    // 클릭 시 클래스 활성화
    const click_light_1 = ref(false)
    const click_light_2 = ref(false)
    const candleText = ref('candleText')

    const handleAnimation = (selector, animationClass, delay) => {
      const element = document.querySelector(selector)
      if (element) {
        element.classList.add(animationClass)
        setTimeout(() => {
          element.classList.remove(animationClass)
        }, delay)
      }
    }

    const click_light_btn_1 = () => {
      handleAnimation('.light_1', 'light_hidden', 600)
      click_light_1.value = !click_light_1.value
      narrationText.value = 'candleText'
      activeModal.value = 100
      candleText.value = true // 텍스트 보여주기
      // 이전 타이머 클리어
      if (timer) {
        clearTimeout(timer)
      }

      // 새로운 타이머 설정
      timer = setTimeout(() => {
        candleText.value = false // 텍스트 숨기기
        if (activeModal.value !== 1 && activeModal.value !== 2 && activeModal.value !== 3) {
          activeModal.value = null
        }
      }, 3000)
    }

    const click_light_btn_2 = () => {
      handleAnimation('.light_2', 'light_hidden', 600)
      click_light_2.value = !click_light_2.value
      narrationText.value = 'candleText'
      activeModal.value = 100
      candleText.value = true // 텍스트 보여주기
      // 이전 타이머 클리어
      if (timer) {
        clearTimeout(timer)
      }

      // 새로운 타이머 설정
      timer = setTimeout(() => {
        candleText.value = false // 텍스트 숨기기
        if (activeModal.value !== 1 && activeModal.value !== 2 && activeModal.value !== 3) {
          activeModal.value = null
        }
      }, 3000)
    }

    const click_lock = ref(false)
    const lockText = ref('lockText')

    const click_lock_btn = () => {
      click_lock.value = !click_lock.value
      narrationText.value = 'lockText'
      lockText.value = true // 텍스트 보여주기
      activeModal.value = 100

      // 이전 타이머 클리어
      if (timer) {
        clearTimeout(timer)
      }

      // 새로운 타이머 설정
      timer = setTimeout(() => {
        lockText.value = false // 텍스트 숨기기
        if (activeModal.value !== 1 && activeModal.value !== 2 && activeModal.value !== 3) {
          activeModal.value = null
        }
      }, 3000)

      const lock = document.querySelector('.lock')
      if (click_lock.value) {
        lock.classList.add('lock_move')
        setTimeout(() => {
          lock.classList.remove('lock_move')
        }, 800)
      } else {
        lock.classList.remove('lock_move')
      }
    }

    const boneText = ref('boneText')
    const click_bone_btn = () => {
      boneText.value = true // 텍스트 보여주기
      narrationText.value = 'boneText'
      activeModal.value = 100

      // 이전 타이머 클리어
      if (timer) {
        clearTimeout(timer)
      }

      // 새로운 타이머 설정
      timer = setTimeout(() => {
        boneText.value = false // 텍스트 숨기기
        if (activeModal.value !== 1 && activeModal.value !== 2 && activeModal.value !== 3) {
          activeModal.value = null
        }
      }, 3000)

      const bone = document.querySelector('.bone')
      if (click_lock.value) {
        bone.classList.add('bone_move')
        setTimeout(() => {
          bone.classList.remove('bone_move')
        }, 800)
      } else {
        bone.classList.remove('bone_move')
      }
    }

    const arrowText = ref('arrowText')
    const click_arrow_btn = () => {
      arrowText.value = true // 텍스트 보여주기
      narrationText.value = 'arrowText'
      activeModal.value = 100

      // 이전 타이머 클리어
      if (timer) {
        clearTimeout(timer)
      }

      // 새로운 타이머 설정
      timer = setTimeout(() => {
        arrowText.value = false // 텍스트 숨기기
        if (activeModal.value !== 1 && activeModal.value !== 2 && activeModal.value !== 3) {
          activeModal.value = null
        }
      }, 3000)
    }

    const frameText = ref('frameText')
    const click_frame_light_btn = () => {
      frameText.value = true // 텍스트 보여주기
      narrationText.value = 'frameText'
      activeModal.value = 100

      // 이전 타이머 클리어
      if (timer) {
        clearTimeout(timer)
      }

      // 새로운 타이머 설정
      timer = setTimeout(() => {
        frameText.value = false // 텍스트 숨기기
        if (activeModal.value !== 1 && activeModal.value !== 2 && activeModal.value !== 3) {
          activeModal.value = null
        }
      }, 3000)

      handleAnimation('.frame_light', 'frame_light_hidden', 600)
    }

    //-------------------------------------------------------------
    // 모든 이미지가 변경되었는지 확인
    const checkImagesChanged = () => {
      const allImagesChanged = collectImages.value.every((img) => img === onImage)
      if (allImagesChanged) {
        showBtn.value = true // 모든 이미지가 변경되면 버튼 활성화
      }
    }

    const openModal = (modalNumber) => {
      // if (buttonsClicked.value[modalNumber - 1]) return
      // buttonsClicked.value[modalNumber - 1] = true

      activeModal.value = modalNumber

      // 첫 번째 모달은 한 번만 열림
      if (modalNumber === 1) {
        count.value++ // 첫 번째 모달을 열 때 count 증가
        changeImage(0) // 첫 번째 이미지 변경
      } else if (modalNumber === 2) {
        // 두 번째 모달 열 때는 count 증가하지 않음
      } else if (modalNumber === 3) {
        // 세 번째 모달 열 때는 count 증가하지 않음
      }
    }

    const closeModal = () => {
      activeModal.value = null
    }

    const openNestedModal = (modalNumber) => {
      if (modalNumber === 2 && !activeNestedModal2.value) {
        activeNestedModal2.value = true
        count.value++ // 두 번째 모달의 중첩 모달을 열 때 count 증가
        changeImage(1) // 두 번째 이미지 변경
      } else if (modalNumber === 3 && !activeNestedModal3.value) {
        activeNestedModal3.value = true
        count.value++ // 세 번째 모달의 중첩 모달을 열 때 count 증가
        changeImage(2) // 세 번째 이미지 변경
      }
    }

    const closeNestedModal2 = () => {
      activeNestedModal2.value = false
    }

    const closeNestedModal3 = () => {
      activeNestedModal3.value = false
    }

    const changeImage = (index) => {
      const newImages = [newImage1, newImage2, newImage3]
      collectImages.value[index] = newImages[index]
      checkImagesChanged() // 이미지 변경 후 체크
    }

    const goNext = () => {
      router.push('/stage_2')
    }

    return {
      count,
      buttonsClicked,
      openModal,
      closeModal,
      openNestedModal,
      closeNestedModal2,
      closeNestedModal3,
      showBtn,
      goNext,
      collectImages,
      changeImage,
      activeModal,
      activeNestedModal2,
      activeNestedModal3,
      handleAnimation,
      click_light_btn_1,
      click_light_btn_2,
      candleText,
      click_lock_btn,
      lockText,
      click_bone_btn,
      boneText,
      click_arrow_btn,
      arrowText,
      click_frame_light_btn,
      frameText,
      narrationText
    }
  }
}
</script>
