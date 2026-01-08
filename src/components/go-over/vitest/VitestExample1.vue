<script setup lang="ts">
import { ref } from 'vue'

type Example1Field = {
  value1: number
  value2: number
}
const inputData = ref<Example1Field>({
  value1: 0,
  value2: 0,
})
const result = ref<number | null>(null)
const calcSum = () => {
  result.value = inputData.value.value1 + inputData.value.value2
}
</script>
<template>
  <div>
    <h3>Vitestの例コンポーネント1</h3>
    <p>"VitestExample1.test.ts" 参照</p>
    <h4>シンプルな計算</h4>
    <div>
      <label>
        Value 1:
        <input
          type="number"
          v-model.number="inputData.value1"
          placeholder="Enter first number"
          min="0"
          max="999"
        />
      </label>
      <label>
        Value 2:
        <input
          type="number"
          v-model.number="inputData.value2"
          placeholder="Enter second number"
          min="0"
          max="999"
        />
      </label>
    </div>
    <div>
      <button @click="calcSum">Calculate Sum</button>
      <div v-if="result !== null">Result: {{ result }}</div>
    </div>
  </div>
</template>
