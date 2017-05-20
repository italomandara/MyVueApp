<template>
  <form id="mailform" data-abide novalidate @submit.prevent="submit">
      <p class="margin bottom">
          To send me a contact request please fill in all fields and submit the form. Fields marked with a
          <span class="hilight">*</span>
          must be filled in to submit the form.
      </p>
      <div data-abide-error class="alert callout" v-show="form.errors.length">
          <p><i class="icon i-attention"></i>There are some errors in your form.</p>
      </div>
      <div class="row">
          <div class="medium-6 column">
              <field :field="form.name" v-model="model.name"/>
          </div>
          <div class="medium-6 column">
              <field :field="form.phone" v-model="model.phone"/>
          </div>
      </div>
      <div class="row margin bottom">
          <div class="medium-6 column">
              <field :field="form.company" v-model="model.company"/>
          </div>
          <div class="medium-6 column">
              <field :field="form.email" v-model="model.email" />
          </div>
      </div>
      <div class="row">
          <div class="small-12 column">
              <field :field="form.message" v-model="model.message" />
          </div>
          <div class="small-12 medium-2 column">
              <button class="button expand" type="submit" name="submit">Send</button>
          </div>
      </div>
      <div class="row small-up-4 text-center set-text-color to-gray margin top" >
          <div class="column text-left"><i class="icon i-linkedin"></i> <span class="hide-for-small-only">linkedin</span></div>
          <div class="column"><i class="icon i-codeopen"></i> <span class="hide-for-small-only">codepen</span></div>
          <div class="column"><i class="icon i-skype"></i> <span class="hide-for-small-only">skype</span></div>
          <div class="column text-right"><i class="icon i-github-circled-alt2"></i> <span class="hide-for-small-only">github</span></div>
      </div>
  </form>
</template>

<script>
  import field from './field.vue'
  export default {
    name: 'contactForm',
    components: {
      field
    },
    data () {
      return {
        form: {
          errors: [],
          isvalid: false,
          submitted: false
        },
        model: {
          name: '',
          phone: '',
          company: '',
          email: '',
          message: ''
        }
      }
    },
    beforeMount () {
      this.$http({url: window.DJANGO_URL + '/api/contact/?format=json', method: 'options'}).then(function (response) {
        this.form = response.data.actions.POST
        this.form.message.type = 'textarea'
        this.form.email.type = 'email'
        this.form.email.error = 'Must be a valid email'
        this.form.phone.error = 'Must be a valid phone number'
        this.form.phone.pattern = '[0-9]+'
        this.form.errors = []
      })
    },
    methods: {
      submit (event) {
        // eslint-disable-next-line
        var formValidator = new Foundation.Abide($(event.target))
        this.form.isValid = formValidator.validateForm()
        if (this.form.isValid) {

        }
      }
      // postJSON (model) {
      //   this.form.submitted = true
      //   if (this.form.isValid) {
      //     console.log('submit')
      //   }
      // }
    }
  }
</script>
