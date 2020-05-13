import Vue from "vue";
import App from "./App.vue";
import BV from "bootstrap-vue";
import axios from "axios";
// !/--\
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./styles.scss";
// !/--\
Vue.use(BV);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
