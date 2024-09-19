<template>
  <div>
    <button @click="nameBtn">문</button>
    <div v-if="typingName" class="nameBox">
      내 이름은....
      <input type="text" v-model="nameInput" />
      <button @click="textSubmit">제출</button>
      <p v-if="showError" style="color: red">아니, 아니야…</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router' // Vue Router 사용
export default {
  setup() {
    const router = useRouter() // Router instance 가져오기
    const typingName = ref(false)
    const nameInput = ref('') // 입력값을 저장할 변수
    const showError = ref(false) // 틀렸습니다 메시지 표시 여부

    const nameBtn = () => {
      typingName.value = true
    }

    const textSubmit = () => {
      if (nameInput.value === '알리스터') {
        showError.value = false // 올바른 경우, 에러 메시지 숨김
        // 이후 로직 추가 가능 (예: 페이지 이동)
        alert('그래, 이제 다 끝났어.')
        setTimeout(() => {
          router.push('/ending')
        }, 1000)
      } else {
        showError.value = true // 틀린 경우, 에러 메시지 표시
      }
    }

    const isNameCorrect = computed(() => nameInput.value === '알리스터') // 이름이 맞는지 확인하는 반응형 변수

    return {
      nameBtn,
      typingName,
      nameInput,
      textSubmit,
      showError,
      isNameCorrect
    }
  }
}
</script>

<style scoped></style>
