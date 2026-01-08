<script setup lang="ts">
import { reactive, ref } from 'vue'

const myCounter = { count: -1 }
const counter = reactive(myCounter)
const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>
</template>
