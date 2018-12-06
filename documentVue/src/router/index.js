import Vue from 'vue'
import Router from 'vue-router'
import Computed from '@/pages/computed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Computed',
      component: Computed
    }
  ]
})
