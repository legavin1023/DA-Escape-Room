<template>
  <div class="page intro">
    <button class="collect-nextBtn" v-if="showBtn" @click="goNext">-></button>
    <div class="dim"></div>
    <div class="narration">
      <div class="narration-border">
        <!-- <p>
          <span v-if="visibleParagraphs[0]">머리가 너무 아프다.</span>
          <span v-if="visibleParagraphs[1]">어떻게, 어떻게 된 거지? 여긴 어디지?</span>
          <span v-if="visibleParagraphs[2]">나는, 누구지?</span>
        </p> -->
        <p>{{ displayedText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const texts = ['머리가 너무 아프다.', '어떻게, 어떻게 된 거지? 여긴 어디지?', '나는, 누구지?']

export default {
  name: 'NextPage',

  setup() {
    const router = useRouter() // Router instance 가져오기
    const showBtn = ref(false) // Next 버튼 표시 여부
    // const visibleParagraphs = ref([false, false, false]) // 각 문단 표시 여부

    // // 문단을 순차적으로 표시하는 함수
    // const revealParagraphs = () => {
    //   visibleParagraphs.value.forEach((_, index) => {
    //     setTimeout(() => {
    //       visibleParagraphs.value[index] = true
    //     }, index * 1500) // 1.5초 간격으로 문단 표시
    //   })

    //   // 모든 문단이 나온 후 5초 후에 Next Page 버튼 활성화
    //   setTimeout(() => {
    //     showBtn.value = true // Next 버튼 활성화
    //   }, visibleParagraphs.value.length * 2000)
    // }

    // // 컴포넌트가 마운트되면 문단을 순차적으로 표시
    // onMounted(() => {
    //   revealParagraphs()
    // })
    const displayedText = ref('') // 현재 표시되는 텍스트
    const index = ref(0) // 글자 인덱스
    const currentTextIndex = ref(0) // 현재 표시할 문장의 인덱스

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
      typeText(texts[currentTextIndex.value])
    })

    const goNext = () => {
      // 다음 문장으로 이동
      if (currentTextIndex.value < texts.length - 1) {
        currentTextIndex.value++
        displayedText.value = '' // 이전 텍스트 지우기
        index.value = 0 // 인덱스 초기화
        showBtn.value = false // 버튼 숨기기
        typeText(texts[currentTextIndex.value]) // 다음 문장 표시
      } else {
        router.push('/stage_1') // 다음 페이지로 이동
      }
    }

    return {
      // visibleParagraphs,
      showBtn,
      goNext,
      texts,
      displayedText
    }
  }
}
</script>
