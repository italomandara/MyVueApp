<template>
  <form id="mailform" data-callback="openThankYou" method="POST" class="js-ajaxform" style="width: 100%;" data-abide novalidate>
      <p>
          To send me a contact request please fill in all fields and submit the form. Fields marked with a
          <span class="hilight">*</span>
          must be filled in to submit the form.
      </p>
      <div data-abide-error class="alert callout" v-show="form.errors.length">
          <p><i class="icon i-attention"></i>There are some errors in your form.</p>
      </div>
      <div class="row">
          <div class="medium-6 column">
              <field :field="form.name" abide-error="required" />
          </div>
          <div class="medium-6 column">
              <field :field="form.phone" abide-error="phone" />
          </div>
      </div>
      <div class="row margin bottom">
          <div class="medium-6 column">
              <field :field="form.company" />
          </div>
          <div class="medium-6 column">
              <field :field="form.email" abide-error="email" />
          </div>
      </div>
      <div class="row">
          <div class="small-12 column">
              <field :field="form.message" abide-error="required" />
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
          'id': {
            'type': 'integer',
            'required': false,
            'read_only': true,
            'label': 'ID'
          },
          'name': {
            'type': 'string',
            'required': true,
            'read_only': false,
            'label': 'Name',
            'max_length': 100
          },
          'company': {
            'type': 'string',
            'required': false,
            'read_only': false,
            'label': 'Company',
            'max_length': 100
          },
          'phone': {
            'type': 'string',
            'required': false,
            'read_only': false,
            'label': 'Phone',
            'max_length': 15
          },
          'email': {
            'type': 'string',
            'required': true,
            'read_only': false,
            'label': 'Email',
            'max_length': 100
          },
          'message': {
            'type': 'string',
            'required': true,
            'read_only': false,
            'label': 'Message',
            'max_length': 1000
          },
          errors: []
        },
        required: 'This field is required',
        phone: 'Must be a valid phone number',
        email: 'Must be a valid email',
        captcha: 'Check if your captcha code is correct',
        model: {}
      }
    },
    mounted () {
      // this.$http({ url: window.DJANGO_URL + '/api/contact/?format=json', method: 'OPTIONS', withCredentials: true }).then(function (response) {
        // this.form = response.data.actions.POST
      this.form.message.type = 'textarea'
      this.form.email.type = 'email'
      // })
      // eslint-disable-next-line
      $(this.$el).foundation()
    },
    methods: {
      // postJSON (isValid, e) {
      //   this.submitted = true
      //   if (isValid) {
      //     postJSON(this.model, url, function (data) {
      //       $('#contact-thank-you').foundation('open')
      //     })
      //   }
      // }
    }
  }
</script>
