<script setup lang="ts">
import { computed, ref } from 'vue'

const myObject = ref({
  id: 1,
  name: 'リンゴ',
  quantity: 10,
  note: '新鮮な果物',
})

const nonFilteredList = ref([
  { id: 1, name: 'リンゴ', price: 100 },
  { id: 2, name: 'バナナ', price: 50 },
  { id: 3, name: 'オレンジ', price: 80 },
])

const minPrice = ref(80)
const filteredList = computed(() =>
  nonFilteredList.value.filter((item) => item.price >= minPrice.value),
)

const vifCheckList = ref([
  { id: 1, name: 'リンゴ', available: true },
  { id: 2, name: 'バナナ', available: false },
  { id: 3, name: 'オレンジ', available: true },
])
</script>
<template>
  <div>
    <h3>Objectのvalue, keyを表示</h3>
    <ul>
      <li v-for="(value, key) in myObject" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>

  <div>
    <h3>Objectのvalue, key, iindexを表示</h3>
    <p>v-for記載時のの順番に注意</p>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ index }}: {{ key }}: {{ value }}
      </li>
    </ul>
  </div>

  <div>
    <h3>フィルタリング</h3>
    <p>computedでフィルタリングしたリストを表示</p>
    <ul>
      <li v-for="item in filteredList" :key="item.id">
        {{ item.name }} - {{ item.price }}円
      </li>
    </ul>
    <label for="minPrice">最低価格（フィルタ用）:</label>
    <input id="minPrice" type="number" v-model.number="minPrice" />
  </div>

  <div>
    <h3>v-for/v-if</h3>
    <p>item.availableで判定</p>
    <ul>
      <template v-for="item in vifCheckList" :key="item.id">
        <li v-if="item.available">{{ item.name }} は在庫あり</li>
      </template>
    </ul>
  </div>
</template>
