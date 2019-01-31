import Vue from 'vue'
import Router from 'vue-router'
import Computed from '@/pages/computed'
import TodoList from '@/pages/todoList'
import Form from '@/pages/form'
import Component from '@/pages/component.vue'

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
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
    	path: '/component',
    	name:'Component',
    	component: Component
    }
  ]
})
