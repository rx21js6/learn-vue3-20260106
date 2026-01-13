<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { computed } from 'vue'
import { z } from 'zod'

const schema = toTypedSchema(
  z
    .object({
      email: z.preprocess(
        // optionalを有効化するためにはundefinedを設定する必要がある
        // 空文字を入力した際に判定が行われ→エラーも消える
        (v) => (v === '' ? undefined : v),
        z.string().email().optional(),
      ),
      password: z.string().nonempty().min(8),
      passwordConfirm: z.string().nonempty().min(8),
    })
    .refine((d) => d.password === d.passwordConfirm, {
      message: 'Passwords do not match',
      path: ['passwordConfirm'],
    }),
)
const { values, errors, validateField, resetForm } = useForm({
  validationSchema: schema,
})

const { value: email } = useField('email', undefined, {
  validateOnValueUpdate: false,
})
const { value: password } = useField('password', undefined, {
  validateOnValueUpdate: false,
})
const { value: passwordConfirm } = useField('passwordConfirm', undefined, {
  validateOnValueUpdate: false,
})

const onClearClick = () => {
  resetForm()
}

// もっと良いやり方はない？
const hasError = computed(() => {
  if (!values.password || !values.passwordConfirm) {
    // 未入力
    return true
  } else if (
    errors.value.email ||
    errors.value.password ||
    errors.value.passwordConfirm
  ) {
    // 入力エラーあり
    return true
  }
  return false
})
</script>
<template>
  <div>
    <h3>バリデーションのタイミング</h3>
    <p>
      useFieldで validateOnValueUpdate: false
      と定義することで、入力時にチェックを実施せず、blurで判定する。
    </p>
  </div>
  <div>
    <label for="validation-timing-email">メールアドレス（任意）</label>
    <input
      id="validation-timing-email"
      v-model="email"
      name="email"
      type="email"
      @blur="() => validateField('email')"
    />
    <span> {{ errors.email }}</span>
  </div>
  <div>
    <label for="validation-timing-password">パスワード</label>
    <input
      id="validation-timing-password"
      v-model="password"
      name="password"
      type="password"
      @blur="() => validateField('password')"
    />
    <span> {{ errors.password }}</span>
  </div>
  <div>
    <label for="validation-timing-password-confirm">再入力</label>
    <input
      id="validation-timing-password-confirm"
      v-model="passwordConfirm"
      name="passwordConfirm"
      type="password"
      @blur="() => validateField('passwordConfirm')"
    />
    <span> {{ errors.passwordConfirm }}</span>
  </div>
  <button @click="onClearClick">クリア</button>
  <button :disabled="hasError">エラーがある場合は非活性</button>
  <div>
    <span>{{ values }}</span>
  </div>
</template>
<style scoped></style>
