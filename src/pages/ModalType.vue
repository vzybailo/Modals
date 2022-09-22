<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- first modal -->
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
          <modal
            :title="title"
            v-show="modalFirst"
            @close="modalFirst = false">
            <div slot="body">
                 <p>Текст</p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst">well done</button>
            </div>
          </modal>
          <!-- second modal -->
          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show modal with form</button>
          <modal
            title="Modal with form"
            v-show="modalSecond.show"
            @close="modalSecond.show = false">
            <div slot="body">
              <form @submit.prevent="submitSecondForm">
                <label>Name:</label>
                <input type="text" v-model="modalSecond.name">
                <label>Email:</label>
                <input type="email" v-model="modalSecond.email">
                <button class="btn btnPrimary">submit</button>
              </form>
            </div>
          </modal>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modal from '@/components/UI/Modal.vue'
import modalvalidate from '@/components/ModalValidate.vue'
export default {
  components: { 
    modal, modalvalidate 
    },
  data () {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false,
      title: 'First modal window'
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>

<style>
    .wrapper-content {
        justify-content: center;
        align-items: center;
    }
    .btn {
        margin-right: 5px;
    }
</style>