<script setup>
import { ref } from 'vue'

const count = ref(0)

const onClick = () => {
  count.value++
}
</script>

<template>
  <!-- make this button work -->
  <button @click="onClick">Count is: {{ count }}</button>
</template>
