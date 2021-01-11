import Vue from "vue";
import App from "./App.vue";
import http from "./common/utils/http";
import "./plugins";
import router from "./router/index";
import store from "./store/index";


Vue.prototype.axios = http;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
