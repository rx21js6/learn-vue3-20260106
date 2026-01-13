<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello!\nThis is a multiline\ntext area example.')

const selectedCheckboxParams = ref<string[]>(['Check 2 value'])

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
])

const selectedOptions = ref<string[]>(['C'])

const amount = ref(0)
const trimText = ref('')
</script>
<template>
  <div>
    <h3>複数行テキスト</h3>

    <textarea
      rows="10"
      cols="100"
      v-model="message"
      placeholder="add multiple lines"
    ></textarea>
    <div>
      <span>改行なし</span>
      <p class="p1">{{ message }}</p>
    </div>
    <div>
      <span>改行あり（white-space: pre-wrap）</span>
      <p class="p2">{{ message }}</p>
    </div>
  </div>

  <div>
    <h3>複数チェックボックス</h3>
    <p>v-modelが配列、各inputのv-modelを統一</p>
    <input
      type="checkbox"
      id="check01"
      value="Check 1 value"
      v-model="selectedCheckboxParams"
    />
    <label for="check01">Check 1</label>
    <br />
    <input
      type="checkbox"
      id="check02"
      value="Check 2 value"
      v-model="selectedCheckboxParams"
    />
    <label for="check02">Check 2</label>
    <br />
    <input
      type="checkbox"
      id="check03"
      value="Check 3 value"
      v-model="selectedCheckboxParams"
    />
    <label for="check03">Check 3</label>
    <br />
    <span>Selected options: {{ selectedCheckboxParams.join(', ') }}</span>
  </div>

  <div>
    <h3>複数セレクト</h3>
    <p>v-modelが配列、各inputのv-modelを統一</p>
    <select v-model="selectedOptions" multiple>
      <option disabled value="">Please select</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <div>
      <span>Selected values: {{ selectedOptions.join(', ') }}</span>
    </div>
  </div>

  <div>
    <h3>number修飾子</h3>
    <p>css: text-align: right; で右よせ</p>
    <label for="amount">金額</label>
    <input
      id="amount"
      class="amount"
      type="number"
      inputmode="numeric"
      pattern="\d*"
      v-model.number="amount"
      miin="0"
      max="999999"
    />
    <div>
      <p>入力した値: {{ amount.toLocaleString() }}円</p>
    </div>
  </div>

  <div>
    <h3>trim修飾子</h3>
    <label for="trimText">入力</label>
    <input id="trimText" v-model.trim="trimText" />
    <div>
      <p>入力した値: [{{ trimText }}]</p>
    </div>
  </div>
</template>

<style scoped>
.p1 {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
.p2 {
  white-space: pre-wrap; /* Preserve whitespace and line breaks */
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
}
.amount {
  text-align: right;
}
</style>
