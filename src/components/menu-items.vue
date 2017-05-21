<template>
  <ul data-dropdown-menu>
    <li v-if="showTitle" class="menu-text">{{ nav.title }}</li>
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
      <modal v-if="nav.person.available" :modal="contact" class="topbar-menu-item"><contact-form/></modal>
      <tooltip v-else :tooltip="contactTooltip">Contact</tooltip>
    </li>
  </ul>
</template>

<script>
import tooltip from './tooltip.vue'
import modal from './modal.vue'
import contactForm from './contact-form.vue'
export default {
  mixins: [
    // eslint-disable-next-line
    require ('@/mixins/foundation')
  ],
  name: 'menuItems',
  props: ['customClass', 'showTitle'],
  components: {
    tooltip,
    modal,
    contactForm
  },
  data () {
    return {
      nav: this.$store.state.nav,
      contact: {
        id: 'contact-form',
        button: 'Contact',
        title: 'Please Fill in the contact form'
      }
    }
  },
  computed: {
    categories () {
      return this.$store.getters.getPostCategories
    },
    contactTooltip () {
      return {
        href: 'javascript:void(0)',
        placement: 'top',
        title: this.$store.state.nav.person.unavailable_msg
      }
    }
  }
}
</script>
