<script setup lang="ts">
defineOptions({ name: 'LifecycleExample' })

import {
  ref,
  getCurrentInstance,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onActivated,
} from 'vue'

import type { ComponentInternalInstance } from 'vue' // 追加

const messages = ref<string[]>([])
let skipNextUpdate = false // 非リアクティブなガード

// 追加: 同一更新サイクルでの再入を防ぐユーティリティ
let isLogging = false
const pushMessage = (msg: string) => {
  if (isLogging) return
  isLogging = true
  messages.value.push(msg)
  // microtask でフラグをクリア -> 次の更新サイクルでは再び記録可能
  Promise.resolve().then(() => {
    isLogging = false
  })
}

const compName = (inst: ComponentInternalInstance | null | undefined): string =>
  inst?.type?.name ??
  inst?.type?.__name ??
  inst?.proxy?.$options?.name ??
  `uid:${inst?.uid}`

onMounted(() => {
  const inst = getCurrentInstance()
  const name = compName(inst)
  console.log(`Component ${name} has been mounted.`)
  pushMessage(`Mounted hook called. (${name})`)
  skipNextUpdate = true
})

// onBeforeUpdate / onUpdated 内の messages.value.push を pushMessage に置換
onBeforeUpdate(() => {
  if (skipNextUpdate) {
    skipNextUpdate = false
    return
  }
  const inst = getCurrentInstance()
  const name = compName(inst)
  console.log('Component is about to be updated.')
  pushMessage(`BeforeUpdate hook called. (${name})`)
  skipNextUpdate = true
})

onUpdated(() => {
  if (skipNextUpdate) {
    skipNextUpdate = false
    return
  }
  const inst = getCurrentInstance()
  const name = compName(inst)
  console.log(`Component ${name} has been updated.`)
  pushMessage(`Updated hook called. (${name})`)
  skipNextUpdate = true
})

onUnmounted(() => {
  const inst = getCurrentInstance()
  const name = compName(inst)
  console.log(`Component ${name} has been unmounted.`)
  messages.value.push(`Unmounted hook called. (${name})`)
})

onBeforeMount(() => {
  const inst = getCurrentInstance()
  const name = compName(inst)
  console.log('Component is about to be mounted.')
  messages.value.push(`BeforeMount hook called. (${name})`)
})

onBeforeUnmount(() => {
  const inst = getCurrentInstance()
  const name = compName(inst)
  console.log('Component is about to be unmounted.')
  messages.value.push(`BeforeUnmount hook called. (${name})`)
})

onActivated(() => {
  const inst = getCurrentInstance()
  const name = compName(inst)
  console.log('Component has been activated.')
  messages.value.push(`Activated hook called. (${name})`)
})
</script>

<template>
  <div class="lifecycle-example">
    <h3>Lifecycle Example Component</h3>
    <p>This component demonstrates the lifecycle hooks in Vue.js.</p>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
  </div>
</template>
