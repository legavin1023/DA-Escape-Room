<template>
  <div>
    <div class="page map1">
      <!-- <button class="page-1-1" @click="openModal(1)" :disabled="buttonsClicked[0]"> -->
      <button class="page-1-1" @click="openModal(1)"></button>
      <button class="page-1-2" @click="openModal(2)"></button>
      <button class="page-1-3" @click="openModal(3)"></button>
      <div class="narration">
        <div class="narration-border">
          <p v-if="activeModal === null">모닥불이 실내의 찬 공기를 데우고 있다.</p>
          <p v-if="activeModal === 1">
            평화로운 때가 되면 사람들은 죽일 동물을 찾아 헤맨다. 그 시기에 사냥당한 사슴의 머리는…
            왠지 기묘하다.
          </p>
          <p v-if="activeModal === 2 && !activeNestedModal2">모닥불에서 열기가 전해진다.</p>
          <p v-if="activeNestedModal2">
            "대재앙, 다크스폰… 누군가 쓴 일지 같다. 많이 연구한 듯 빼곡하게 적혀있었던 듯 하지만
            대부분 타버려 알아볼 수 없다. 열심히 써놓고 왜 태워버린걸까. 더이상 쓸모가 없어서?
            아니면 누군가에게 들키지 않기 위해?"
          </p>
          <p v-if="activeModal === 3 && !activeNestedModal3">차곡차곡 정리된 템플러 갑옷이다.</p>
          <p v-if="activeNestedModal3">
            "그리고 이건… 무언가 수놓아진 손수건이다. 회색감시자의 상징인가? 훼손되서 알아보기
            어렵다"
          </p>
        </div>
      </div>
      <div class="collect">
        <img class="collect-1" :src="collectImages[0]" alt="Image 1" />
        <img class="collect-2" :src="collectImages[1]" alt="Image 2" />
        <img class="collect-3" :src="collectImages[2]" alt="Image 3" />
      </div>
      <button class="collect-nextBtn" v-if="showBtn" @click="goNext">-></button>
    </div>

    <!-- 첫 번째 모달 -->
    <div v-if="activeModal === 1" class="modal">
      <div class="modal-content modal_1_1"><span class="close" @click="closeModal">×</span></div>
    </div>

    <!-- 두 번째 모달 -->
    <div v-if="activeModal === 2" class="modal">
      <div class="modal-content modal_1_2_1">
        <span class="close" @click="closeModal">×</span>

        <button @click="openNestedModal(2)"></button>
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
        <span class="close" @click="closeModal">×</span>
        <button @click="openNestedModal(3)"></button>
      </div>
    </div>

    <!-- 세 번째 모달 안의 모달 -->
    <div v-if="activeNestedModal3" class="modal">
      <div class="modal-content modal_1_3_2">
        <span class="close" @click="closeNestedModal3">×</span>
      </div>
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

    const image1 = offImage
    const image2 = offImage
    const image3 = offImage
    const newImage1 = onImage
    const newImage2 = onImage
    const newImage3 = onImage

    // State for the collect-box images
    const collectImages = ref([image1, image2, image3])

    const openModal = (modalNumber) => {
      if (buttonsClicked.value[modalNumber - 1]) return
      // buttonsClicked.value[modalNumber - 1] = true
      activeModal.value = modalNumber
      // count.value++

      // 첫 번째 모달은 한 번만 열림
      if (modalNumber === 1) {
        changeImage(0) // 첫 번째 이미지 변경
      } else if (modalNumber === 2) {
        // 두 번째 모달 열 때 이미지를 변경하지 않음
      } else if (modalNumber === 3) {
        // 세 번째 모달 열 때 이미지를 변경하지 않음
      }

      if (count.value === 3) {
        showBtn.value = true
      }
    }

    const closeModal = () => {
      activeModal.value = null
    }

    const openNestedModal = (modalNumber) => {
      if (modalNumber === 2) {
        activeNestedModal2.value = true
        changeImage(1) // 두 번째 모달 클릭 시 이미지 변경
      } else if (modalNumber === 3) {
        activeNestedModal3.value = true
        changeImage(2) // 세 번째 모달 클릭 시 이미지 변경
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
      activeNestedModal3
    }
  }
}
</script>

<style scoped>
/* 모달 스타일링은 여기에 추가하세요 */
</style>
