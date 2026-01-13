<script setup lang="ts">
import { ref } from 'vue'

import TutorialStep13ChildComp from './TutorialStep13ChildComp.vue'

const childMsg = ref('not received')
const recvData = ref<{ id: number; name: string } | null>(null)
const recvMessage = ref('')
</script>

<template>
  <div>emit</div>
  <TutorialStep13ChildComp
    @response="(msg) => (childMsg = msg)"
    @response2="(data) => (recvData = data)"
    @response:input="(message) => (recvMessage = message)"
  />
  <p>(@response) Message from child: {{ childMsg }}</p>
  <p>(@response2) Data from child: {{ recvData }}</p>
  <p>(@response:input) Data from child input: {{ recvMessage }}</p>
</template>
