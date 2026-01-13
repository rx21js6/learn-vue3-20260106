<script setup lang="ts">
import { onMounted, ref } from 'vue'

const pElementRef = ref<HTMLParagraphElement | null>(null)

onMounted(() => {
  console.log(pElementRef.value?.textContent)
  if (pElementRef.value) {
    pElementRef.value.textContent = 'Hello, Vue 3!'
  }
})
</script>

<template>
  <p ref="pElementRef">Not Mounted</p>
</template>
