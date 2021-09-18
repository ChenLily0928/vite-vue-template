import Vue from 'vue'
import App from './App'
import router from './router'  //引入 router
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { home }
  })

app.mount(el);
