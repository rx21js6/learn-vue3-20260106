<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello!\nThis is a multiline\ntext area example.')

const selectedCheckboxParams = ref<string[]>([])

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
])

const selectedOptions = ref<string[]>([])

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
      <span>改行あり</span>
      <p class="p2">{{ message }}</p>
    </div>
  </div>

  <div>
    <h3>複数チェックボックス</h3>
    <input
      type="checkbox"
      id="check01"
      value="Option 1"
      v-model="selectedCheckboxParams"
    />
    <label for="check01">Option 1</label>
    <br />
    <input
      type="checkbox"
      id="check02"
      value="Option 2"
      v-model="selectedCheckboxParams"
    />
    <label for="check02">Option 2</label>
    <br />
    <input
      type="checkbox"
      id="check03"
      value="Option 3"
      v-model="selectedCheckboxParams"
    />
    <label for="check03">Option 3</label>
    <br />
    <span>Selected options: {{ selectedCheckboxParams.join(', ') }}</span>
  </div>

  <div>
    <h3>複数セレクト</h3>
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
    <label for="amount">金額</label>
    <input
      id="amount"
      inputmode="numeric"
      pattern="\d*"
      v-model.number="amount"
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
</style>
