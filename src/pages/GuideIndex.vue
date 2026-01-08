<script setup lang="ts">
import ConditionalRenderingExample from '@/components/guide/conditiona-rendering/ConditionalRenderingExample.vue'
import EventHandlingExample from '@/components/guide/event-handling/EventHandlingExample.vue'
import FormBindingExample from '@/components/guide/form-binding/FormBindingExample.vue'
import ListRenderingExample from '@/components/guide/list-rendering/ListRenderingExample.vue'
import ReactivityExample from '@/components/guide/reactivity/ReactivityExample.vue'
import TemplateSyntaxExample from '@/components/guide/template-syntax/TemplateSyntaxExample.vue'
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
  <hr />
  <div>
    <h2>条件付きレンダリング</h2>
    <ConditionalRenderingExample />
  </div>
  <hr />
  <div>
    <h2>リストレンダリング</h2>
    <ListRenderingExample />
  </div>
</template>
