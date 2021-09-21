// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.mixin({
  data() {
    return {};
  },
  methods: {}
});

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// 透過 $mount 掛載至指定的網頁節點
app.$mount("#app");
