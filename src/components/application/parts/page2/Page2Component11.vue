<script setup lang="ts">
import { ref } from 'vue'

import Page2Component21 from './Page2Component21.vue'

defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
})

const text = ref('')
const onInput = (value: string) => {
  text.value = value
}
</script>
<template>
  <div>
    <h2>Page2Component11</h2>
    <Page2Component21 @input="onInput" />
  </div>
  <div>Page2Component21.text: {{ text }}</div>
</template>
<style scoped></style>
