import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router) //啟用Router

export default new Router({
  routes: [{  //設定路徑
    path: '/', //自訂路徑
    name: 'home', //設定名稱
    component: home //選擇要對應的元件：每個路徑 path，需對應一個 component
  }]
})