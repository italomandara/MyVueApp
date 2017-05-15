<template>
  <label>
    <span>{{ field.label }}<span v-if="field.required">&nbsp;*</span></span>
      {{ field }}
    <span class="form-error" :class="{ 'is-visible': field.error }">
      {{ abide_error }}
    </span>
  </label>
</template>

<script>
  export default {
    name: 'field',
    props: ['field', 'abide_error']
  }
</script>
