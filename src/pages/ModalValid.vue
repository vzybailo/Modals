<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- modal with validate -->
          <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal with validate form</button>
          <modalvalidate v-show="modalValidate" @close="modalValidate = false"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modalvalidate from '@/components/ModalValidate.vue'

export default {
  components: { 
    modalvalidate 
    },
  data () {
    return {
      modalValidate: false
    }
  }
}
</script>

<style>
    .wrapper-content {
        justify-content: center;
        align-items: center;
    }
</style>