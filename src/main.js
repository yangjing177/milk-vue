import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import '@/icons' // icon
import axios from 'axios'

import App from './App'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('icon', Icon)
Vue.prototype.$axios = axios
axios.defaults.timeout = 5000; //设置超时时间
axios.defaults.baseURL = 'http://localhost:8080';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
