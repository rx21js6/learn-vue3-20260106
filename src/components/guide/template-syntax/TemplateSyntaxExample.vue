<script setup lang="ts">
import { ref } from 'vue'

const rawHtml = `<strong style="color: red;">This is raw HTML content.</strong>`

const dynamicId = ref('dynamic-id-example')

const buttonDisabled = ref(false)

const objectOfAttrs = ref({
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green',
})

const changeClass = () => {
  if (objectOfAttrs.value.class === 'wrapper') {
    objectOfAttrs.value.class = 'wrapper2'
  } else {
    objectOfAttrs.value.class = 'wrapper'
  }
}
</script>

<template>
  <div>
    <h3>v-htmlの例</h3>
    <p>安全ではないらしい</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
  <div>
    <h3>v-bindの例</h3>
    <div :id="dynamicId">動的ID {{ dynamicId }}</div>
    <input v-model="dynamicId" placeholder="動的IDのinput" />
  </div>
  <div>
    <h3>booleanの例</h3>
    <input type="checkbox" @change="buttonDisabled = !buttonDisabled" />
    ボタンの有効/無効切り替え
    <button :disabled="buttonDisabled">ボタン</button>
  </div>
  <div>
    <h3>クラスの動的な切り替え</h3>
    <input type="checkbox" @change="changeClass" />
    クラスの切り替え
    <div v-bind="objectOfAttrs">属性が複数</div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 10px;
  color: white;
}
.wrapper2 {
  padding: 10px;
  color: red;
}
</style>
