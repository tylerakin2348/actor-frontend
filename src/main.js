import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
require("@/assets/css/bootstrap-override.css");
import VueAxios from "vue-axios";
import { securedAxiosInstance, plainAxiosInstance } from "./backend/axios";

Vue.config.productionTip = false;

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
