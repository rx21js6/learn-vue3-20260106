<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { z } from 'zod'

import CustomInputInputField from './CustomInputInputField.vue'

const result = ref('')

const { resetForm, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z
      .object({
        firstName: z.string().nonempty(),
        lastName: z.string().nonempty(),
        email: z.string().nonempty().email(),
        age: z.coerce
          .number({ message: '数字を入力してください' })
          .min(18, { message: '18歳未満は使用できません' }),
        password: z.string().nonempty().min(8),
        passwordConfirm: z.string().nonempty().min(8),
      })
      .refine(
        (data) => {
          // Zodでの相関チェックはrefine（あるいはsuperRefine）を使用する
          // returnを忘れないこと（trueで「正常判定」）
          return data.password === data.passwordConfirm
        },
        {
          message: 'Passwords do not match',
          path: ['passwordConfirm'],
        },
      ),
  ),
})

const onSubmit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2))
  result.value = JSON.stringify(values, null, 2)
})

const onClearClick = () => {
  resetForm()
}
</script>
<template>
  <p>prop.nameにフィールド名を設定</p>
  <form @submit="onSubmit">
    <CustomInputInputField id="custom-input-first-name" name="firstName" />
    <CustomInputInputField id="custom-input-last-name" name="lastName" />
    <CustomInputInputField id="custom-input-email" name="email" type="email" />
    <CustomInputInputField id="custom-input-age" name="age" type="number" />

    <p>パスワードは相関チェックを実施</p>
    <CustomInputInputField
      id="custom-input-password"
      name="password"
      type="password"
    />
    <CustomInputInputField
      id="custom-input-password-confirm"
      name="passwordConfirm"
      type="password"
    />

    <button>Submit</button>
  </form>
  <div v-if="result">
    <h4>結果</h4>
    <div>{{ result }}</div>
  </div>
  <div>
    <button @click="onClearClick">clear</button>
  </div>
</template>
<style scoped></style>
