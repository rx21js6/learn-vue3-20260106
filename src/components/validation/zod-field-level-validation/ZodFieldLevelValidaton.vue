<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { ErrorMessage, Field, Form, useField } from 'vee-validate'
import { z } from 'zod'

const fieldSchema1 = toTypedSchema(
  z.string().nonempty('Field is required').email('Must be a valid email'),
)

// for Composition API
const fieldSchema2 = toTypedSchema(
  // z.string().nonempty('Field is required').email('Must be a valid email'),
  z
    .string()
    .min(1, { message: 'Field is required' })
    .email({ message: 'Must be a valid email' }),
)
const { value, errorMessage } = useField('email2', fieldSchema2)
</script>
<template>
  <div>
    <h3>Zodでフィールドレベルバリデーション</h3>
  </div>
  <div>
    <h4>Field/ErrorMessageコンポーネントを使用</h4>
    <p>blurで判定されている</p>
    <Form>
      <Field name="email1" type="email" :rules="fieldSchema1" />
      <ErrorMessage name="email1" />
    </Form>
  </div>
  <div>
    <h4>useFieldを使用</h4>
    <p>入力時に判定されている</p>
    <input name="email2" v-model="value" type="email" />
    <span>{{ errorMessage }}</span>
  </div>
</template>
