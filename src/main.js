import Vue from 'vue'
import App from './App.vue'

import ELEMENTUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'

import axios from '@/api'

import myPlugin from '@/components/index'
Vue.use(myPlugin)

Vue.prototype.$http = axios

Vue.use(ELEMENTUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
