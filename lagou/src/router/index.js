import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/yu/Login'
import Register from '@/pages/yu/Register'
import Index from '@/pages/LJ/index'
import HelloWorld from '@/components/HelloWorld'
import company_home from '../pages/tang/company_home'
import company from '../pages/LH/company'
import jobHome from '@/pages/chu/jobHome'
import xiangqing from '@/pages/chu/xiangqing'
Vue.use(Router)

export default new Router({
	routes: [
	{
      path: '/Login',
      name: 'Login',
      component: Login
    },
	{
		path: '/Index',
		path: '/',
		name: 'Index',
		component: Index
	},
	{
      path: '/HelloWorld',
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/company_home',
      name: 'company_home',
      component: company_home
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
    path: '/Register',
    name: 'Register',
    component: Register
   },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    
   {
      path: '/jobHome',
      name: 'jobHome',
      component: jobHome
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
	]
})