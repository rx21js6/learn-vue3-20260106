<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { z } from 'zod'

import CustomNumberField from '../parts/CustomNumberField.vue'
import CustomTextField from '../parts/CustomTextField.vue'

type InputRecParam = {
  itemName: string
  unitPrice: number
  quantity: number
}

const { values, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z
      .object({
        firstName: z.string().nonempty({ message: '名は必須です' }),
        familyName: z.string().nonempty({ message: '姓は必須です' }),
        email: z.string().nonempty().email(),
        age: z.coerce
          .number({ message: '数字を入力してください' })
          .min(18, { message: '18歳未満は使用できません' }),
        password: z.string().nonempty().min(8),
        passwordConfirm: z.string().nonempty().min(8),
        itemName: z.string().nonempty({ message: '品目名は必須です' }),
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

const lines = ref<InputRecParam[]>([
  {
    itemName: '',
    unitPrice: 0,
    quantity: 0,
  },
])

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
  // result.value = JSON.stringify(values, null, 2)
})
</script>
<template>
  <div><h1>サンプルページ</h1></div>
  <div>
    <span>{{ values }}</span>
  </div>
  <form @submit="onSubmit">
    <div>
      <h2>基本情報</h2>
      <CustomTextField
        id="application-sample-page1-family-name"
        label="姓"
        name="familyName"
        :minlength="1"
        :maxlength="10"
      />
      <CustomTextField
        id="application-sample-page1-first-name"
        label="名"
        name="firstName"
        :minlength="1"
        :maxlength="10"
      />
      <CustomNumberField
        id="application-sample-page1-age"
        label="年齢"
        name="age"
        :min="18"
        :max="120"
      />
      <div>以下省略</div>
    </div>
    <div>
      <h2>購入情報</h2>
      <template v-for="(_line, index) in lines" :key="index">
        <h3>品目{{ index + 1 }}</h3>
        <CustomTextField
          :id="`application-sample-page1-lines${index}-itemName`"
          label="品目名"
          :name="`lines[${index}].itemName`"
          :minlength="1"
          :maxlength="100"
        />
        <CustomNumberField
          :id="`application-sample-page1-lines${index}-unitPrice`"
          label="単価（円）"
          :name="`lines[${index}].unitPrice`"
          :min="1"
          :max="99999"
        />
        <CustomNumberField
          :id="`application-sample-page1-lines${index}-quantity`"
          label="数量"
          :name="`lines[${index}].quantity`"
          :min="1"
          :max="99"
        />
      </template>
    </div>
  </form>
</template>
