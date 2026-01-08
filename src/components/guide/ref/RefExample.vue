<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

const inputRef = useTemplateRef('input')

onMounted(() => {
  inputRef.value?.focus()
})
</script>
<template>
  <div>
    <h3>TemplateRef</h3>
    <input ref="input" />
  </div>
</template>
