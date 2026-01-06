<script setup lang="ts">
import Step1 from './tutorial/step-1/Step1.vue'
import Step2 from './tutorial/step-2/Step2.vue'
import Step3 from './tutorial/step-3/Step3.vue'
import Step4 from './tutorial/step-4/Step4.vue'
import Step5 from './tutorial/step-5/Step5.vue'
import Step6 from './tutorial/step-6/Step6.vue'
import Step7 from './tutorial/step-7/Step7.vue'
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

  <hr />

  <div>
    <h2>step-3</h2>
    <label>属性バインディング</label>
    <Step3 />
  </div>

  <hr />

  <div>
    <h2>step-4</h2>
    <label>イベントリスナー</label>
    <Step4 />
  </div>

  <hr />

  <div>
    <h2>step-5</h2>
    <label>フォームバインディング</label>
    <Step5 />
  </div>

  <hr />

  <div>
    <h2>step-6</h2>
    <label>条件付きレンダリング</label>
    <Step6 />
  </div>

  <hr />

  <div>
    <h2>step-7</h2>
    <label>リストレンダリング </label>
    <Step7 />
  </div>
</template>

<style scoped></style>
