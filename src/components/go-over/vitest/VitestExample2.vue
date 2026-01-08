<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const todoId = ref(1)
const responseData = ref<string | null>(null)
const onSendClick = () => {
  console.log('Button clicked!')
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  axios
    .get(url)
    .then((response) => {
      console.log('Response from mocked API:', response.data)
      responseData.value = JSON.stringify(response.data, null, 2)
    })
    .catch((error) => {
      console.error('Error fetching from mocked API:', error)
      responseData.value = 'Error fetching data'
    })
}

const onResetClick = () => {
  todoId.value = 1
  responseData.value = null
}
</script>
<template>
  <div>
    <h3>Vitestの例コンポーネント2</h3>
    <p>"VitestExample2.test.ts" 参照</p>
    <h4>通信の例</h4>
    <div>
      ID:
      <input id="id-field" v-model="todoId" type="number" min="1" max="200" />
    </div>
    <div>
      <button id="send" @click="onSendClick">Fetch Data</button>
      <button id="reset" @click="onResetClick">Reset</button>
      <div v-if="responseData">
        <h4>Response:</h4>
        <p>{{ responseData }}</p>
      </div>
    </div>
  </div>
</template>
