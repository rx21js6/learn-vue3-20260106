<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const tagName = ref('')
const greet = (event: PointerEvent) => {
  // alert(`Hello! Event type: ${event.type}`)
  tagName.value = `${String(event)} / ${String(event.type)} / ${String((event.target as HTMLElement).tagName)}`
}

const showAlert = (message: string) => {
  window.alert(message)
}

const textKey = ref('')
const keyEnteredMessage = ref('')
const onKeyEnter = () => {
  keyEnteredMessage.value = `入力: ${textKey.value}`
}

const mouseEventMessage = ref('')
</script>

<template>
  <div>
    <h3>シンプル</h3>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
  </div>

  <div>
    <h3>メソッドハンドラー</h3>
    <button @click="greet">greet</button>
    <p>{{ tagName }}</p>
  </div>

  <div>
    <h3>イベント修飾子</h3>
    <h4>stopあり</h4>
    <div
      @click="showAlert('親がクリックされました！')"
      style="margin-top: 10px; padding: 10px; border: 1px solid black"
    >
      親要素
      <button @click.stop="showAlert('Clicked!')">
        クリックしても親に伝播しない
      </button>
    </div>
    <h4>stopなし</h4>
    <div
      @click.prevent="showAlert('親がクリックされました！')"
      style="margin-top: 10px; padding: 10px; border: 1px solid black"
    >
      親要素
      <button @click="showAlert('Clicked!')">
        クリックしたらで親にも伝播する
      </button>
    </div>
  </div>

  <div>
    <h3>キー修飾子</h3>
    <input
      v-model="textKey"
      @keyup.enter="onKeyEnter"
      placeholder="Enterキーを押してください"
    />
    <p>{{ keyEnteredMessage }}</p>
  </div>

  <div>
    <h3>マウスボタン修飾子</h3>
    <button
      @click.left="mouseEventMessage = '左クリックされました'"
      @click.right="mouseEventMessage = '右クリックされました'"
      @click.middle="mouseEventMessage = '中クリックされました'"
    >
      クリックしてみてください
    </button>
    <p>{{ mouseEventMessage }}</p>
  </div>
</template>
