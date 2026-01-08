<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const message =
  import.meta.env.VITE_USE_MOCK !== 'true'
    ? '本物のAPIにアクセスしています。'
    : 'モックAPIにアクセスしています。'

const area = ref('130000')
const jmaResponse = ref('')
const todoId = ref(1)
const typicodeResponse = ref('')

const onJmaButtonClick = () => {
  console.log('Button clicked!')
  const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${area.value}.json`
  axios
    .get(url)
    .then((response) => {
      console.log('Response from mocked API:', response.data)
      jmaResponse.value = JSON.stringify(response.data, null, 2)
    })
    .catch((error) => {
      console.error('Error fetching from mocked API:', error)
    })
}

const onTypicodeButtonClick = () => {
  console.log('Button clicked!')
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  axios
    .get(url)
    .then((response) => {
      console.log('Response from mocked API:', response.data)
      typicodeResponse.value = JSON.stringify(response.data, null, 2)
    })
    .catch((error) => {
      console.error('Error fetching from mocked API:', error)
    })
}

const clear = () => {
  area.value = '130000'
  jmaResponse.value = ''
  todoId.value = 1
  typicodeResponse.value = ''
}

onMounted(() => {
  console.log('MSW Example component mounted.')
})
</script>
<template>
  <div>
    <h3>MSW通信モックの例コンポーネント</h3>
    <p>{{ message }}</p>
    <div>
      <button @click="clear">クリア</button>
    </div>
  </div>

  <div>
    <h4>JMA</h4>
    <select v-model="area">
      <option value="130000">東京地方</option>
      <option value="016000">石狩空知後志地方</option>
    </select>
    <button @click="onJmaButtonClick">APIへリクエストを送信</button>
    <div v-if="jmaResponse">
      <h4>レスポンス:</h4>
      <pre>{{ jmaResponse }}</pre>
    </div>
  </div>

  <hr />

  <div>
    <h4>Typicode</h4>
    ID: <input v-model="todoId" type="number" min="1" max="200" />
    <button @click="onTypicodeButtonClick">APIへリクエストを送信</button>
    <div v-if="typicodeResponse">
      <h4>レスポンス:</h4>
      <pre>{{ typicodeResponse }}</pre>
    </div>
  </div>
</template>
