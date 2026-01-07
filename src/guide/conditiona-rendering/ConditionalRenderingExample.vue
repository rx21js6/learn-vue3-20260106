<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref('option1')

const options = [
  { value: 'option1', label: 'オプション 1' },
  { value: 'option2', label: 'オプション 2' },
  { value: 'option3', label: 'オプション 3' },
]

const showDetails = ref(false)
</script>
<template>
  <div>
    <h3>v-if/v-else-if/v-else</h3>
    <div v-if="selectedOption === 'option1'">
      <p>option1: v-if</p>
    </div>
    <div v-else-if="selectedOption === 'option2'">
      <p>option2: v-else-if</p>
    </div>
    <div v-else><p>v-else</p></div>

    <label for="options">オプションを選択:</label>
    <select id="options" v-model="selectedOption">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>

  <div>
    <h3>v-show</h3>
    <div v-show="showDetails">
      詳細情報: これはv-showディレクティブの例です。
    </div>
    <button @click="showDetails = !showDetails">
      {{ showDetails ? '詳細を隠す' : '詳細を表示' }}
    </button>
  </div>
</template>
