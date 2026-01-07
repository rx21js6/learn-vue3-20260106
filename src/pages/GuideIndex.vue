<script setup lang="ts">
import EventHandlingExample from '@/guide/event-handling/EventHandlingExample.vue'
import FormBindingExample from '@/guide/form-binding/FormBindingExample.vue'
import ReactivityExample from '@/guide/reactivity/ReactivityExample.vue'
import TemplateSyntaxExample from '@/guide/template-syntax/TemplateSyntaxExample.vue'
</script>

<template>
  <div>
    <RouterLink to="/">メニュー</RouterLink>
  </div>
  <div>
    <h1>ガイド関連</h1>
  </div>
  <hr />
  <div>
    <h2>リアクティビティ</h2>
    <ReactivityExample />
  </div>
  <hr />
  <div>
    <h2>テンプレート構文</h2>
    <TemplateSyntaxExample />
  </div>
  <hr />
  <div>
    <h2>イベントハンドリング</h2>
    <EventHandlingExample />
  </div>

  <hr />
  <div>
    <h2>フォーム入力バインディング</h2>
    <FormBindingExample />
  </div>
</template>
