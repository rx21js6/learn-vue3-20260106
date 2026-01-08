<script setup lang="ts">
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function showConfetti() {
  // jsConfetti.addConfetti()
  jsConfetti.addConfetti({
    emojis: ['🎉', '✨', '💫', '🌟', '🥳', '🚀'],
    emojiSize: 20,
    confettiNumber: 50,
  })
}
</script>

<template>
  <h1 @click="showConfetti">🎉おしまい</h1>
</template>
