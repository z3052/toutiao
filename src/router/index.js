import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        // 欢迎页面  如果子路由有名字  父级路由需要删除
        { path: '/', name: 'welcome', component: Welcome }
      ]
    },
    { path: '*', name: '404', component: NotFound }
  ]
})

export default router
