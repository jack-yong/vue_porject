import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Actionsheet
} from 'vux'

Vue.component('actionsheet', Actionsheet)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
