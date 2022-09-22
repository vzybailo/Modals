<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- login modal -->
          <button class="btn btnPrimary" @click="showLogin">Log in</button>
          <modallogin @showAuth="showAuth" v-show="auth.login" @close="closeModal"/>
          <!-- auth modal -->
          <button class="btn btnPrimary" @click="showAuth">Register</button>
          <modalauth @showLogin="showLogin" v-show="auth.registration" @close="closeModal"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modallogin from '@/components/ModalLogin.vue'
import modalauth from '@/components/ModalAuth.vue'

export default {
  components: { 
    modallogin, modalauth 
    },
  data () {
    return {
      auth: {
        login: false,
        registration: false
      }
    }
  },
  methods: {
    showLogin() {
            this.auth.registration = false
            this.auth.login = true
    },
    showAuth() {
            this.auth.login = false
            this.auth.registration = true
    },
    closeModal() {
            this.auth.login = false
            this.auth.registration = false
    },
    resetForm() {
            this.email = '',
            this.password = '',
            this.$v.$reset()
            this.$emit('close')
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