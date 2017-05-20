<template>
  <label v-if="field">
    <span>{{ field.label }}<span v-if="field.required">&nbsp;*</span></span>
    <input v-if="isInput(field)" :name="field.name" :type="field.type" :value="field.value" :required="field.required" @input="updateValue($event.target.value)"/>
    <textarea v-else-if="isTextarea(field)" :name="field.name" :value="field.value" :required="field.required" @input="updateValue($event.target.value)"/>
    <select v-else-if="isSelect(field)" :required="field.required" @change="updateValue($event.target.value)">
      <option v-for="option in field.options" value="option.value">{{ option.name }}</option>
    </select>
    <span v-if="abideError" class="form-error">
      {{ abideError }}
    </span>
    <span v-else class="form-error">
      {{ field.required ? 'This field is required' : '' }}
    </span>
  </label>
</template>

<script>
  export default {
    name: 'field',
    props: ['field', 'abideError'],
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
      },
      updateValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>
