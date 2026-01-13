<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps({
  id: String,
  name: { type: String, required: true },
  label: String,
  type: String,
  minlength: Number,
  maxlength: Number,
})

// props.name をリアクティブ参照として渡す（推奨）
const nameRef = toRef(props, 'name')

// validateOnValueUpdate: false にして、入力時はバリデートしない
const { value, errorMessage, handleBlur, handleChange, validate } = useField(
  nameRef,
  undefined,
  {
    validateOnValueUpdate: false, // 値変更で自動バリデートしない
    // syncVModel: true, // v-model 同期が欲しい時は試す（注意: 一部バージョンで挙動要確認）
  },
)
</script>

<template>
  <div class="frame">
    <div class="label">
      <label :for="id"> {{ label }}</label>
    </div>
    <div class="field">
      <!-- input は value を渡し、イベントを自前で呼ぶ -->
      <input
        :id="id"
        :value="value"
        :type="type || 'text'"
        :minlength="minlength"
        :maxlength="maxlength"
        @input="
          (e) => handleChange((e.target as HTMLInputElement).value, false)
        "
        @blur="
          () => {
            handleBlur()
            void validate()
          }
        "
      />
    </div>
    <div class="error-message">
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>
<style scoped>
.frame {
  padding: 4px;
}
.label {
  display: inline-block;

  min-width: 150px;
}
.field {
  display: inline-block;
}
.error-message {
  padding-left: 10px;
  display: inline-block;
  color: red;
}
</style>
