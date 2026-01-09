<script setup lang="ts">
import GetStarted from '@/components/validation/get-started/GetStarted.vue'
import ZodFieldLevelValidaton from '@/components/validation/zod-field-level-validation/ZodFieldLevelValidaton.vue';
</script>

<template>
  <div>
    <RouterLink to="/">メニュー</RouterLink>
  </div>
  <div>
    <h1>バリデーション</h1>
  </div>
  <hr />
  <div>
    <h2>リアクティビティ</h2>
    <GetStarted />
  </div>
  <hr />
  <div>
    <h2>Field Level Validation</h2>
    <ZodFieldLevelValidaton />
  </div>
</template>
