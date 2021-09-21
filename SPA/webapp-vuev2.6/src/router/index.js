import Vue from "vue";
import Router from "vue-router";
import index from "@/components/pages/index";
import modal from "@/components/pages/modal";

Vue.use(Router); //啟用 Router

/* eslint-disable */
export default new Router({
  routes: [
    {
      path: "/",
      components: {
        default: index,
        dialog: modal
      }
    }
  ]
});
