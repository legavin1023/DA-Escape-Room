<template>
  <div>
    <div class="page">
      <div :class="{ colored: count >= 1 }">1</div>
      <div :class="{ colored: count >= 2 }">2</div>
      <div :class="{ colored: count >= 3 }">3</div>

      <!-- 각 버튼을 클릭할 때마다 disabled 상태 관리 -->
      <button @click="incrementCount(0)" :disabled="buttonsClicked[0]">Click Me!</button>
      <button @click="incrementCount(1)" :disabled="buttonsClicked[1]">Click Me!</button>
      <button @click="incrementCount(2)" :disabled="buttonsClicked[2]">Click Me!</button>

      <button v-if="showBtn" @click="goNext">-></button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Vue Router 사용

export default {
  setup() {
    const count = ref(0)
    const buttonsClicked = ref([false, false, false]) // 버튼 클릭 여부를 추적
    const router = useRouter() // Router instance 가져오기
    const showBtn = ref(false)

    const incrementCount = (buttonIndex) => {
      // 배열의 길이와 인덱스를 확인하여 안전하게 접근
      if (buttonsClicked.value.length > buttonIndex && !buttonsClicked.value[buttonIndex]) {
        buttonsClicked.value[buttonIndex] = true // 해당 버튼을 비활성화
        count.value++

        if (count.value === 3) {
          triggerTransition()
        }
      }
    }

    const triggerTransition = () => {
      showBtn.value = true
    }

    const goNext = () => {
      router.push('/stage_2')
    }

    return {
      count,
      buttonsClicked,
      incrementCount,
      showBtn,
      goNext
    }
  }
}
</script>
