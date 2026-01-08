<script setup lang="ts">
import { reactive, ref } from 'vue'

type RefExampleProps = {
  count: number
  message?: string
}

const primitiveRef = ref(0)
const objectRef = ref<RefExampleProps>({ count: 0 })
const objectReactive = reactive<RefExampleProps>({ count: 0 })

const incrementRef = () => {
  // Note: .value is needed for ref objects
  objectRef.value.count++
  objectRef.value.message = `Updated!: ${objectRef.value.count}`
}

const incrementReactive = () => {
  // Note: No .value needed for reactive objects
  objectReactive.count++
  objectReactive.message = `Updated!: ${objectReactive.count}`
}
</script>
<template>
  <div>
    <h3>プリミティブref</h3>
    <div>値: {{ primitiveRef }}</div>
    <button @click="primitiveRef++">インクリメント</button>
  </div>

  <div>
    <h3>オブジェクトref</h3>
    <div>値: {{ objectRef.count }}</div>
    <button @click="incrementRef">インクリメント</button>
  </div>

  <div>
    <h3>オブジェクトreactive</h3>
    <div>値: {{ objectReactive.count }}</div>
    <button @click="incrementReactive">インクリメント</button>
  </div>

  <div>
    <h3>メッセージ</h3>
    <div>objectRef: {{ objectRef.message }}</div>
    <div>objectReactive: {{ objectReactive.message }}</div>
  </div>
</template>
