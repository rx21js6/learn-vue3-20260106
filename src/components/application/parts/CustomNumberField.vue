<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
})

const { value, errorMessage, handleBlur, handleChange, validate } = useField(
  () => props.name,
  undefined,
  {
    validateOnValueUpdate: false,
  },
)
</script>
<template>
  <div class="frame">
    <div class="label">
      <label :for="props.id"> {{ props.label }}</label>
    </div>
    <div class="field">
      <input
        :id="props.id"
        v-model="value"
        type="number"
        :min="min ?? 0"
        :max="max ?? 9999999"
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
