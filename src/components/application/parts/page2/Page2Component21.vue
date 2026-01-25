<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
})

const emit = defineEmits(['input'])
const text = ref('')

const onInput = () => {
  emit('input', text.value)
}
</script>
<template>
  <div>
    <h3>Page2Component21</h3>
    <div>
      <label :for="id">ラベル: {{ label }}</label>
      <input :id="id" v-model="text" type="text" @input="onInput" />
    </div>
  </div>
</template>
<style scoped></style>
