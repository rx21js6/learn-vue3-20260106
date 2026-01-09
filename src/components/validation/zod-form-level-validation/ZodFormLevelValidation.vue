<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import z from 'zod'

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .min(1, { message: 'This is required' })
      .email({ message: 'Must be a valid email' }),
    password: z
      .string()
      .min(1, { message: 'This is required' })
      .min(8, { message: 'Too short' }),
  }),
)

const { handleSubmit, errors } = useForm({ validationSchema })

const { value: email } = useField('email')
const { value: password } = useField('password')

const result = ref('')

const onSubmit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2))
  result.value = JSON.stringify(values, null, 2)
})

const onClearClick = () => {
  result.value = ''
}
</script>

<template>
  <div>
    <h3>Zodでフォームレベルバリデーション</h3>
  </div>
  <div>
    <form @submit="onSubmit">
      <div>
        <label for="form-level-validation-email">email</label>
        <input
          id="form-level-validation-email"
          name="email"
          v-model="email"
          type="email"
        />
        <span class="error-message">{{ errors.email }}</span>
      </div>

      <div>
        <label for="form-level-validation-password">password</label>
        <input
          id="form-level-validation-password"
          name="password"
          v-model="password"
          type="password"
        />
        <span class="error-message">{{ errors.password }}</span>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    <div>
      <label for="form-level-validation-result"></label>
      <p id="form-level-validation-result">{{ result }}</p>
    </div>

    <div>
      <button @click="onClearClick">クリア</button>
    </div>
  </div>
</template>

<style scoped>
label {
  font-weight: bold;
  color: green;
}
.error-message {
  color: red;
}
</style>
