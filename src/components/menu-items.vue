<template>
  <ul :class="customClass" data-dropdown-menu>
    <li class="menu-text">{{ nav.title }}</li>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/more">More</router-link>
    </li>
    <li style="position:relative" role="menuitem" class="is-dropdown-submenu-parent opens-right" aria-haspopup="true" aria-expanded="false" aria-label="Thoughts">
      <router-link to="/thoughts">Thoughts</router-link>
      <ul class="menu vertical submenu nested first-sub">
        <li class="hide-for-medium"><router-link to="/thoughts">All</router-link></li>
        <li v-for="item in categories" :key="item.slug"><router-link :to="{ name: 'Category', params: { category: item.slug }}">{{ item.name }}</router-link></li>
      </ul>
    </li>
    <li>
      <a v-if="!nav.person.available" href="javascript:void(0)" @click="open()">Contact</a>
      <tooltip v-else :tooltip="contactTooltip"></tooltip>
    </li>
  </ul>
</template>

<script>
import tooltip from './tooltip.vue'
export default {
  mixins: [
    // eslint-disable-next-line
    require ('@/mixins/foundation')
  ],
  name: 'menuItems',
  props: ['customClass'],
  components: {
    tooltip
  },
  data () {
    return {
      nav: this.$store.state.nav
    }
  },
  methods: {

  },
  computed: {
    categories () {
      return this.$store.getters.getPostCategories
    },
    open () {
      return function () {
        return ''
      }
    },
    contactTooltip () {
      return {
        href: 'javascript:void(0)',
        placement: 'top',
        text: 'Contact',
        title: this.$store.state.nav.person.unavailable_msg
      }
    }
  }
}
</script>
