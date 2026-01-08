<script setup lang="ts">
import { ref } from 'vue'
import TutorialStep13ChildComp from './TutorialStep13ChildComp.vue'

const childMsg = ref('not received')
const recvData = ref<{ id: number; name: string } | null>(null)
</script>

<template>
  <TutorialStep13ChildComp
    @response="(msg) => (childMsg = msg)"
    @response2="(data) => (recvData = data)"
  />
  <p>Message from child: {{ childMsg }}</p>
  <p>Data from child: {{ recvData }}</p>
</template>
