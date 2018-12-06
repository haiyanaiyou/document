import Vue from 'vue'
import Router from 'vue-router'
import Computed from '@/pages/computed'
import TodoList from '@/pages/todoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
