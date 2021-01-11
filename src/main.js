import Vue from 'vue'
import './plugins'
import http from './common/utils/http'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
Vue.prototype.axios = http

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
