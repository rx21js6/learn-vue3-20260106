<script setup lang="ts">
import { ref, watch } from 'vue'

type WatchObject = {
  x: number
  y: number
}

const value = ref(0)
const obj = ref<WatchObject>({ x: 0, y: 0 })
const obj2 = ref<WatchObject>({ x: 0, y: 0 })

watch(value, (newVal, oldVal) => {
  console.log(`value changed from ${oldVal} to ${newVal}`)
})

watch(
  obj,
  (newVal, oldVal) => {
    console.log(
      `obj changed from ${JSON.stringify(oldVal)} to ${JSON.stringify(newVal)}`,
    )
  },
  { deep: true },
)

watch(
  () => obj2.value.x + obj2.value.y,
  (newSum, oldSum) => {
    console.log(`obj2's sum changed from ${oldSum} to ${newSum}`)
  },
)
</script>

<template>
  <div>
    <h3>プリミティブ</h3>
    <label for="primitiveField">値: </label>
    <input id="primitiveField" v-model="value" type="number" />
  </div>
  <div>
    <h3>オブジェクト</h3>
    <label for="objectField">値: </label>
    X: <input id="objectFieldX" v-model="obj.x" type="number" /> Y:
    <input id="objectFieldY" v-model="obj.y" type="number" />
  </div>
  <div>
    <h3>合計？</h3>
    <label for="object2Field">値: </label>
    X: <input id="object2FieldX" v-model="obj2.x" type="number" /> Y:
    <input id="object2FieldY" v-model="obj2.y" type="number" />
  </div>
</template>
