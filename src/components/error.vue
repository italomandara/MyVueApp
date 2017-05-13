<template>
  <div :class="error.class">
    <h4>{{ error.title }}</h4>
    <p class="large margin bottom">{{ error.description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'error',
    props: ['error']
  }
</script>
