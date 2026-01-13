<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { z } from 'zod'

import CustomNumberField from '../parts/CustomNumberField.vue'
import CustomTextField from '../parts/CustomTextField.vue'

type InputRecParam = {
  itemName: string
  unitPrice: number
  quantity: number
}

// 初期設定値
const initialValues = {
  familyName: '',
  firstName: '',
  // email: '',
  age: undefined,
  // password: '',
  // passwordConfirm: '',
  lines: [
    { itemName: '', unitPrice: 0, quantity: 0 } as InputRecParam,
    { itemName: '', unitPrice: 0, quantity: 0 } as InputRecParam,
  ],
}

const lineSchema = z.object({
  itemName: z.string().min(1, '品目名は必須です'),
  unitPrice: z.coerce.number().min(1, '単価は1以上を入力してください'),
  quantity: z.coerce.number().min(1, '数量は1以上を入力してください'),
})

const { values, errors, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z
      .object({
        firstName: z.string().nonempty({ message: '名は必須です' }),
        familyName: z.string().nonempty({ message: '姓は必須です' }),
        // email: z.string().nonempty().email(),
        age: z.coerce
          .number({ message: '年齢を入力してください' })
          .min(18, { message: '18歳未満は使用できません' }),
        // password: z.string().nonempty().min(8),
        // passwordConfirm: z.string().nonempty().min(8),
        lines: z.array(lineSchema),
      })
      .refine(
        () => {
          // // Zodでの相関チェックはrefine（あるいはsuperRefine）を使用する
          // // returnを忘れないこと（trueで「正常判定」）
          // return data.password === data.passwordConfirm
        },
        {
          // message: 'Passwords do not match',
          // path: ['passwordConfirm'],
        },
      ),
  ),
  initialValues,
})

const calcLineAmount = (line: InputRecParam): number => {
  return Number(line.unitPrice ?? 0) * Number(line.quantity ?? 0)
}

const totalAmount = computed(() => {
  return (values.lines ?? []).reduce(
    (sum, line) => sum + calcLineAmount(line),
    0,
  )
})

const onSubmit = handleSubmit((values) => {
  console.log('onSubmit')
  alert(JSON.stringify(values, null, 2))
  // result.value = JSON.stringify(values, null, 2)
})
</script>
<template>
  <div><h1>サンプルページ</h1></div>
  <div>
    <div>values</div>
    <span>{{ values }}</span>
  </div>
  <div>
    <div>errors</div>
    <span>{{ errors }}</span>
  </div>
  <form @submit.prevent="onSubmit">
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
      <template v-for="(line, index) in values.lines" :key="index">
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
          :min="0"
          :max="99999"
        />
        <CustomNumberField
          :id="`application-sample-page1-lines${index}-quantity`"
          label="数量"
          :name="`lines[${index}].quantity`"
          :min="0"
          :max="99"
        />
        <div class="amount">
          金額：{{ calcLineAmount(line).toLocaleString() }} 円
        </div>
      </template>
    </div>
    <div class="total">合計金額：{{ totalAmount.toLocaleString() }} 円</div>
    <div>
      <button>実行</button>
    </div>
  </form>
</template>
