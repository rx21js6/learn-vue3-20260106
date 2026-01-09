<script setup lang="ts">
import CustomInputParent from '@/components/validation/custom-input-01/CustomInputParent.vue'
import GetStarted from '@/components/validation/get-started/GetStarted.vue'
import ZodFieldLevelValidaton from '@/components/validation/zod-field-level-validation/ZodFieldLevelValidaton.vue'
import ZodFormLevelValidation from '@/components/validation/zod-form-level-validation/ZodFormLevelValidation.vue'
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
  <hr />
  <div>
    <h2>Form Level Validation</h2>
    <ZodFormLevelValidation />
  </div>
  <hr />
  <div>
    <h2>カスタムフィールド</h2>
    <CustomInputParent />
  </div>
</template>
