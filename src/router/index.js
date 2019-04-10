import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Commodity from '@/components/Commodity'
import FreshMilk from '@/components/milk/freshMilk/FreshMilk'
import FreshYogurt from '@/components/milk/freshMilk/FreshYogurt'
import menus from '@/config/menu-config'

Vue.use(Router)

export const constantRouterMap = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/commodity',
      name: 'Commodity',
      component: Commodity,
      children: [
        {
          path: '/FreshMilk',
          name: 'FreshMilk',
          component: FreshMilk
        },
        {
          path: '/FreshYogurt',
          component: FreshYogurt
        }
      ]
    },

  ]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// export default router
