<script setup>
import { onMounted, ref } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  console.log(pElementRef.value.textContent)
  pElementRef.value.textContent = 'Hello, Vue 3!'
})
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template>
