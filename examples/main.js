import Vue from 'vue'
import App from './App.vue'
import KamiroUi from '../packages'

Vue.config.productionTip = false
Vue.use(KamiroUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
