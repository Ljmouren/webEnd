import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/yu/Login'
import Register from '@/pages/yu/Register'
import Index from '@/pages/LJ/index'
import HelloWorld from '@/components/HelloWorld'
import company_home from '../pages/tang/company_home'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
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
    path: '/Register',
    name: 'Register',
    component: Register
   },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
	]
})