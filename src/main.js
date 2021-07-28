import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
require("@/assets/css/bootstrap-override.css");
import VueAxios from "vue-axios";
import { securedAxiosInstance, plainAxiosInstance } from "./backend/axios";
import store from './AppStore';

function determineDatabaseURL() {
  if (process.env.VUE_APP_ENVIRONMENT === "production") {
    return process.env.VUE_APP_DATABASE_URL_PROD;
  }
  return process.env.VUE_APP_DATABASE_URL_DEV;
}

Vue.prototype.$properApiURL = determineDatabaseURL();


Vue.prototype.$authenticationServiceStatus = process.env.VUE_APP_AUTHENTICATION_SERVICE_STATUS;
Vue.prototype.$userSignedIn = localStorage.signedIn;

Vue.config.productionTip = false;

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
