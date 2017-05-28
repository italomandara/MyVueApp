<template>
  <form id="mailform" class="row" data-abide novalidate @submit.prevent="submit">
      <p>
          To send me a contact request please fill in all fields and submit the form. Fields marked with a
          <span class="hilight">*</span>
          must be filled in to submit the form.
      </p>
      <div class="small margin bottom">
        <p data-abide-error class="alert callout" v-show="form.errors.length">
            <i class="icon i-attention"></i>There are some errors in your form.
        </p>
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
      <modal :modal="thankYou">
        <h6>Thank you for contacting me,</h6>
        <p>I'll read the notification along with your contact data and get back to you, see you soon!</p>
        <a class="button" data-close aria-label="Close modal">Cool</a>
      </modal>
  </form>
</template>

<script>
  import field from './field.vue'
  import modal from './modal.vue'
  export default {
    name: 'contactForm',
    components: {
      field,
      modal
    },
    data () {
      return {
        form: {
          errors: [],
          isvalid: false,
          submitted: false
        },
        thankYou: {
          hideButton: true,
          id: 'contact-form-thank-you',
          title: 'Thank you!'
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
        // eslint-disable-next-line
        this.form.phone.pattern = '\+[0-9]{15-20}'
        this.form.errors = []
      })
    },
    methods: {
      submit (event) {
        // eslint-disable-next-line
        var formValidator = new Foundation.Abide($(event.target))
        this.form.isValid = formValidator.validateForm()
        if (this.form.isValid) {
          this.$http.post(window.DJANGO_URL + '/api/contact/?format=json', this.model).then(function (response) {
            // eslint-disable-next-line
            var modal = new Foundation.Reveal($('#'+ this.thankYou.id), {'multiple-opened' : false})
            modal.open()
          })
        }
      }
    }
  }
</script>
