<template>
  <div>
    <a v-if="!modal.hideButton" :class="[modal.buttonClass]" href="javascript:void(0)" @click="openModal">{{ modal.button }}</a>
    <div class="text-center reveal vertical-center-container" :class="[modal.classes]" text-center :id="modal.id" data-reveal data-animation-in="fade-in" data-animation-out="fade-out">
      <div class="vertical-center modal-wrapper">
        <div class="modal-title">   
          <button class="close-button set-text-color to-white" data-close aria-label="Close modal" type="button">
            <i class="icon i-cancel"></i>
          </button>
          <h5>{{ modal.title }}</h5>
        </div>
        <div class="modal-content"><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: ['modal'],
    methods: {
      openModal () {
        // eslint-disable-next-line
        var $modal = $('#' + this.modal.id)
        if ($modal.length) {
          var options = this.modal.options || {}
          // eslint-disable-next-line
          var modal = new Foundation.Reveal($modal, options)
          modal.open()
        }
      }
    }
  }
</script>
