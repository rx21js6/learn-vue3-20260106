<script setup lang="ts">
const emit = defineEmits(['response', 'response2'])

const sendData = {
  id: 1,
  name: 'Vue3',
}

emit('response', 'Hello from child')
emit('response2', sendData)
</script>

<template>
  <h2>step-13 Child component</h2>
</template>
