<template>
  <ul class="dropdown menu" data-dropdown-menu>
    <li class="menu-text">{{ nav.title }}</li>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/more">More</router-link>
    </li>
    <li style="position:relative" role="menuitem" class="is-dropdown-submenu-parent opens-right" aria-haspopup="true" aria-expanded="false" aria-label="Thoughts">
      <router-link to="/">Thoughts</router-link>
      <ul class="menu vertical submenu nested first-sub">
        <li class="hide-for-medium"><router-link to="/">All</router-link></li>
        <li v-for="item in categories"><router-link to="/">{{ item.name }}</router-link></li>
      </ul>
    </li>
    <li>
      <a v-if="nav.person.available" href="javascript:void(0)" @click="open()">Contact</a>
      <a v-show="!nav.person.available" href="javascript:void(0)" class="has-tip" tooltip-placement="top" :tooltip="nav.person.unavailable_msg">Contact</a>
    </li>
  </ul>
</template>

<script>
export default {
  mixins: [
    // eslint-disable-next-line
    require ('@/mixins/foundation')
  ],
  name: 'menuItems',
  data () {
    return {}
  },
  computed: {
    categories () {
      return this.$store.getters.getPostCategories
    },
    nav () {
      return this.$store.state.nav
    }
  }
}
</script>
