<script setup lang="ts">
import TutorialStep1 from '@/components/tutorial/step-1/TutorialStep1.vue'
import TutorialStep10 from '@/components/tutorial/step-10/TutorialStep10.vue'
import TutorialStep11 from '@/components/tutorial/step-11/TutorialStep11.vue'
import TutorialStep12 from '@/components/tutorial/step-12/TutorialStep12.vue'
import TutorialStep13 from '@/components/tutorial/step-13/TutorialStep13.vue'
import TutorialStep14 from '@/components/tutorial/step-14/TutorialStep14.vue'
import TutorialStep15 from '@/components/tutorial/step-15/TutorialStep15.vue'
import TutorialStep2 from '@/components/tutorial/step-2/TutorialStep2.vue'
import TutorialStep3 from '@/components/tutorial/step-3/TutorialStep3.vue'
import TutorialStep4 from '@/components/tutorial/step-4/TutorialStep4.vue'
import TutorialStep5 from '@/components/tutorial/step-5/TutorialStep5.vue'
import TutorialStep6 from '@/components/tutorial/step-6/TutorialStep6.vue'
import TutorialStep7 from '@/components/tutorial/step-7/TutorialStep7.vue'
import TutorialStep8 from '@/components/tutorial/step-8/TutorialStep8.vue'
import TutorialStep9 from '@/components/tutorial/step-9/TutorialStep9.vue'
</script>

<template>
  <div>
    <RouterLink to="/">Menu</RouterLink>
  </div>
  <div>
    <h2>step-1</h2>
    <label>はじめに</label>
    <TutorialStep1 />
  </div>

  <hr />

  <div>
    <h2>step-2</h2>
    <label>宣言的レンダリング</label>
    <TutorialStep2 />
  </div>

  <hr />

  <div>
    <h2>step-3</h2>
    <label>属性バインディング</label>
    <TutorialStep3 />
  </div>

  <hr />

  <div>
    <h2>step-4</h2>
    <label>イベントリスナー</label>
    <TutorialStep4 />
  </div>

  <hr />

  <div>
    <h2>step-5</h2>
    <label>フォームバインディング</label>
    <TutorialStep5 />
  </div>

  <hr />

  <div>
    <h2>step-6</h2>
    <label>条件付きレンダリング</label>
    <TutorialStep6 />
  </div>

  <hr />

  <div>
    <h2>step-7</h2>
    <label>リストレンダリング</label>
    <TutorialStep7 />
  </div>

  <hr />

  <div>
    <h2>step-8</h2>
    <label>算出プロパティ</label>
    <TutorialStep8 />
  </div>

  <hr />

  <div>
    <h2>step-9</h2>
    <label>ライフサイクルとテンプレート参照</label>
    <TutorialStep9 />
  </div>

  <hr />

  <div>
    <h2>step-10</h2>
    <label>ウォッチャー</label>
    <TutorialStep10 />
  </div>

  <hr />

  <div>
    <h2>step-11</h2>
    <label>コンポーネント</label>
    <TutorialStep11 />
  </div>

  <hr />

  <div>
    <h2>step-12</h2>
    <label>props</label>
    <TutorialStep12 />
  </div>

  <hr />

  <div>
    <h2>step-13</h2>
    <label>イベントの発行</label>
    <TutorialStep13 />
  </div>

  <hr />

  <div>
    <h2>step-14</h2>
    <label>スロット</label>
    <TutorialStep14 />
  </div>

  <hr />

  <div>
    <h2>step-15</h2>
    <label>スロット</label>
    <TutorialStep15 />
  </div>
</template>

<style scoped></style>
