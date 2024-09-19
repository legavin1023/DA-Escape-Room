<template>
  <div>
    <p v-if="visibleParagraphs[0]">“이제 나가봐.”</p>
    <p v-if="visibleParagraphs[1]">“모리건…”</p>
    <p v-if="visibleParagraphs[2]">“너는 네 할 일을 해. 난 내 할 일을 할테니."</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NextPage',

  setup() {
    const router = useRouter() // Router instance 가져오기
    const visibleParagraphs = ref([false, false, false, false]) // 각 문단 표시 여부

    // 문단을 순차적으로 표시하는 함수
    const revealParagraphs = () => {
      visibleParagraphs.value.forEach((_, index) => {
        setTimeout(() => {
          visibleParagraphs.value[index] = true
        }, index * 1500) // 1초 간격으로 문단 표시
      })

      // 모든 문단이 나온 후 5초 후에 Next Page 버튼 활성화
      setTimeout(() => {
        router.push('/outro')
      }, 4000 + 5000) // 4초 후 문단 표시 완료 + 5초 후 버튼 활성화
    }

    // 컴포넌트가 마운트되면 문단을 순차적으로 표시
    onMounted(() => {
      revealParagraphs()
    })

    return {
      visibleParagraphs
    }
  }
}
</script>

<style scoped></style>
