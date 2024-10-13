<template>
  <div class="page nugbug">
    <div class="box">
      <div class="title">THE RITUAL</div>
      <a class="logo" href="https://legavin1023.github.io/nugbug/#/">너그버그</a>
      <div class="licenses">
        Anguish Kevin MacLeod (incompetech.com) <br />
        Licensed under Creative Commons: By Attribution 3.0 License
        <br /><a href="http://creativecommons.org/licenses/by/3.0/"
          >http://creativecommons.org/licenses/by/3.0/</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 페이지에 진입하면 오디오 재생
    this.$poteto.play().catch((error) => {
      console.error('오디오 재생 오류:', error)
    })
  }
}
</script>

<style></style>
