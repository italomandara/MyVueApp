<template>
  <label>
    <span>{{ field.label }}<span v-if="field.required">&nbsp;*</span></span>
      <input v-if="isInput(field)" :name="field.name" :type="field.type" :value="field.value" />
      <textarea v-else-if="isTextarea(field)" :name="field.name" :value="field.value"/>
      <select v-else-if="isSelect(field)">
        <option v-for="option in field.options" value="option.value">{{ option.name }}</option>
      </select>

    <span class="form-error" :class="{ 'is-visible': field.error }">
      {{ abide_error }}
    </span>
  </label>
</template>

<script>
  export default {
    name: 'field',
    props: ['field', 'abide_error'],
    methods: {
      isInput (field) {
        var matches = (field.type === 'string' || field.type === 'text' || field.type === 'number' || field.type === 'email')
        if (matches && field.type === 'string') {
          field.type = 'text'
        }
        return matches
      },
      isTextarea (field) {
        return (field.type === 'textarea')
      },
      isSelect (field) {
        return (field.type === 'select')
      }
    }
  }
</script>
