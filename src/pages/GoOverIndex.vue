<script setup lang="ts">
import MswExample from '@/components/go-over/msw/MswExample.vue'
import VitestExample1 from '@/components/go-over/vitest/VitestExample1.vue'
import VitestExample2 from '@/components/go-over/vitest/VitestExample2.vue'
</script>
<template>
  <div>
    <RouterLink to="/">メニュー</RouterLink>
  </div>
  <div>
    <h1>復習</h1>
  </div>
  <hr />
  <div>
    <h2>MSW通信モックの例</h2>
    <MswExample />
  </div>
  <hr />
  <div>
    <h2>Vitestの例</h2>
    <VitestExample1 />
    <hr />
    <VitestExample2 />
  </div>
</template>
