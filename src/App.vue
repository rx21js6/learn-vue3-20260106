<script setup lang="ts">
import Step1 from './tutorial/step-1/Step1.vue'
import Step2 from './tutorial/step-2/Step2.vue'
</script>

<template>
  <div>
    <h2>step-1</h2>
    <label>はじめに</label>
    <Step1 />
  </div>

  <hr />

  <div>
    <h2>step-2</h2>
    <label>宣言的レンダリング</label>
    <Step2 />
  </div>
</template>

<style scoped></style>
