<template>
  <div class="page intro">
    <button class="collect-nextBtn" v-if="showBtn" @click="goNext">-></button>
    <div class="dim"></div>
    <div class="narration">
      <div class="narration-border">
        <p>
          <span v-if="visibleParagraphs[0]">머리가 너무 아프다.</span>
          <span v-if="visibleParagraphs[1]">어떻게, 어떻게 된 거지? 여긴 어디지?</span>
          <span v-if="visibleParagraphs[2]">나는, 누구지?</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NextPage',

  setup() {
    const router = useRouter() // Router instance 가져오기
    const visibleParagraphs = ref([false, false, false]) // 각 문단 표시 여부
    const showBtn = ref(false) // Next 버튼 표시 여부

    // 문단을 순차적으로 표시하는 함수
    const revealParagraphs = () => {
      visibleParagraphs.value.forEach((_, index) => {
        setTimeout(() => {
          visibleParagraphs.value[index] = true
        }, index * 1500) // 1.5초 간격으로 문단 표시
      })

      // 모든 문단이 나온 후 5초 후에 Next Page 버튼 활성화
      setTimeout(() => {
        showBtn.value = true // Next 버튼 활성화
      }, visibleParagraphs.value.length * 2000)
    }

    // 컴포넌트가 마운트되면 문단을 순차적으로 표시
    onMounted(() => {
      revealParagraphs()
    })

    const goNext = () => {
      router.push('/stage_1') // 다음 페이지로 이동
    }

    return {
      visibleParagraphs,
      showBtn,
      goNext
    }
  }
}
</script>
