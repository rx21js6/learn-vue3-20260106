<script setup lang="ts">
import { ref } from 'vue'
import TutorialStep12ChildComp from './TutorialStep12ChildComp.vue'

const greeting = ref('Hello from parent')
</script>

<template>
  <TutorialStep12ChildComp />
  <TutorialStep12ChildComp :msg="greeting" />
  <TutorialStep12ChildComp msg="メッセージを文字列で渡す" />
</template>
