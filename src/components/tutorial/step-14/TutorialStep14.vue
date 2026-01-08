<script setup lang="ts">
import TutorialStep14ChildComp from './TutorialStep14ChildComp.vue'
</script>

<template>
  <TutorialStep14ChildComp>
    <h2 class="title">親から</h2>
    <p>これはカスタムスロットコンテンツです。</p>
  </TutorialStep14ChildComp>
</template>

<style scoped>
.title {
  color: blue;
}
</style>
