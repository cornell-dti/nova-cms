import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
// import Bootstrap from "bootstrap";
import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Sidebar from "./components/Sidebar.vue";

Vue.use(BootstrapVue);

Vue.component("Sidebar", Sidebar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
