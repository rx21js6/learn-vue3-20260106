<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['response', 'response2', 'response:input'])

const sendData = {
  id: 1,
  name: 'Vue3',
}

const message = ref('')
const onSendClick = () => {
  emit('response:input', message.value)
}

emit('response', 'Hello from child')
emit('response2', sendData)
</script>

<template>
  <h2>step-13 Child component</h2>
  <div>
    <input v-model="message" />
    <button @click="onSendClick">送信（emit: response:input）</button>
  </div>
</template>
