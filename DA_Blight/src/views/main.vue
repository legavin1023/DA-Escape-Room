<template>
  <div>
    <buttonc @click="startGame">start</buttonc>
  </div>
</template>

<script>
import router from '@/router'
export default {
  setup() {
    const startGame = () => {
      router.push('/intro')
    }

    return {
      startGame
    }
  }
}
</script>

<style></style>
