import Vue from "vue";
import Router from "vue-router";
import index from "@/components/pages/index";

Vue.use(Router); //啟用 Router

/* eslint-disable */
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    }
  ]
});
