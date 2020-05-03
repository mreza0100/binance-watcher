import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./styles.scss";

import App from "./App.vue";

Vue.prototype.$http = axios;
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
      render: (h) => h(App),
}).$mount("#app");
