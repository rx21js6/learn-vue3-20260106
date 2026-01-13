<script setup lang="ts">
import { ref } from 'vue'

// give each todo a unique id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' },
])

function addTodo() {
  newTodo.value = newTodo.value.trim()
  if (newTodo.value) {
    todos.value.push({ id: id++, text: newTodo.value })
  }
  newTodo.value = ''
}

function removeTodo(todo: { id: number }) {
  todos.value = todos.value.filter((t) => t.id !== todo.id)
}
</script>

<template>
  <div><p>@submit.preventでactionイベントを抑止</p></div>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
