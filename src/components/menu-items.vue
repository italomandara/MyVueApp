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
    <li style="position:relative" role="menuitem" aria-expanded="false" aria-label="Apps">
      <router-link to="/apps/">Apps</router-link>
    </li>
    <li>
      <modal v-if="nav.person.available" :modal="contact" class="topbar-menu-item"><contact-form/></modal>
      <modal v-else :modal="nocontactModal" class="topbar-menu-item">
        <p class="margin">{{ nocontact.title }}</p>
        <p>
          <a class="button margin none" data-close aria-label="Close modal" href="javascript:void(0)">OK</a>
          <a class="button secondary" data-close aria-label="Close modal" href="javascript:void(0)">Not OK</a>
        </p>
      </modal>
    </li>
  </ul>
</template>

<script>
import modal from './modal.vue'
import contactForm from './contact-form.vue'
export default {
  mixins: [
    // eslint-disable-next-line
    require ('@/mixins/foundation')
  ],
  name: 'menuItems',
  props: ['customClass', 'showTitle', 'contactModalId'],
  components: {
    modal,
    contactForm
  },
  data () {
    return {
      nav: this.$store.state.nav,
      contact: {
        id: 'contact-form' + this.contactModalId,
        button: 'Contact',
        title: 'Please Fill in the contact form'
      },
      nocontactModal: {
        id: 'no-contact-form' + this.contactModalId,
        button: 'Contact',
        title: 'Not available'
      }
    }
  },
  computed: {
    categories () {
      return this.$store.getters.getPostCategories
    },
    nocontact () {
      return {
        title: this.$store.state.nav.person.unavailable_msg
      }
    }
  }
}
</script>
