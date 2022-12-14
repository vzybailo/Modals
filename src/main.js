import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'

// Plugins 
Vue.use(Vuelidate)

import './assets/scss/main.scss'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
