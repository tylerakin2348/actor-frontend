import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
require("@/assets/css/bootstrap-override.css");
import VueAxios from "vue-axios";
import { securedAxiosInstance, plainAxiosInstance } from "./backend/axios";
import store from "./AppStore";
import determinedDatabaseURL from "./helpers/determinedDatabaseURL";
import availableEndpoints from "../src/backend/axios/availableEndpoints";
import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);

Vue.prototype.$properApiURL = determinedDatabaseURL();
Vue.prototype.$availableEndpoints = availableEndpoints;

Vue.prototype.$authenticationServiceStatus = process.env.VUE_APP_AUTHENTICATION_SERVICE_STATUS;
Vue.prototype.$userSignedIn = localStorage.signedIn;

Vue.config.productionTip = false;

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
});

const theApp = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
