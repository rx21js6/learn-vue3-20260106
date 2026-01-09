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
  type: String,
})

const { value, errorMessage } = useField(() => props.name)
</script>
<template>
  <div class="frame">
    <div class="label">
      <label :for="props.id"> {{ props.name }}</label>
    </div>
    <div class="field">
      <input :id="props.id" v-model="value" :type="type || 'text'" />
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
