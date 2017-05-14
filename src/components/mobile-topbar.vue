<template>
  <div class="title-bar show-for-small-only">
    <a class="menu-icon" data-toggle="offCanvasMenu"><span></span></a>
    <div class="title-bar-title">{{ nav.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'mobileTopbar',
  computed: {
    nav () {
      return this.$store.state.nav
    }
  }
}
</script>
