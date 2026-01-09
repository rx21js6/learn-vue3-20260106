<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { z } from 'zod'

// Zodの場合はtoTypedSchemaでラップする
const schema = toTypedSchema(
  z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    // inputが文字列で渡るためcoerceで型変換を行う
    age: z.coerce.number().min(18, 'You must be at least 18 years old'),
  }),
)

const { values, errors, defineField } = useForm({ validationSchema: schema })

const [email, emailAttrs] = defineField('email')
const [age, ageAttrs] = defineField('age')

const buttonDisabled = computed(() => {
  return !!errors.value.email || !!errors.value.age
})
</script>

<template>
  <div>
    <h2>公式はyupだがzodで試してみた</h2>
  </div>
  <h3>email</h3>
  <input v-model="email" v-bind="emailAttrs" type="text" />
  <h3>age</h3>
  <input v-model="age" v-bind="ageAttrs" type="number" />

  <p>values: {{ values }}</p>
  <p>errors: {{ errors }}</p>

  <button :disabled="buttonDisabled">エラーがある場合は非活性</button>
</template>
