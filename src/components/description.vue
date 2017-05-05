<template>
  <div :class="[ customclass ]">
    <h4 v-if="!notitle" class="margin top">{{ content.h1 }}</h4>
    <h5 v-if="!notitle" class="small margin bottom">{{ content.h2 }}</h5>
    <div style="display:inline">{{ content.body }}</div>
  </div>
</template>

<script>
  export default {
    name: 'description',
    props: ['content', 'customclass', 'notitle']
  }
</script>
