import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/yu/Login'
import Register from '@/pages/yu/Register'
import Index from '@/pages/LJ/index'
import HelloWorld from '@/components/HelloWorld'
import company_home from '../pages/tang/company_home'
<<<<<<< HEAD
=======
import company from '../pages/LH/company'
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
import jobHome from '@/pages/chu/jobHome'
import xiangqing from '@/pages/chu/xiangqing'
Vue.use(Router)

export default new Router({
	routes: [
	{
<<<<<<< HEAD
      path: '/Login',
      name: 'Login',
      component: Login
    },
	{
=======
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
		path: '/Index',
		name: 'Index',
		component: Index
	},
	{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/company_home',
      name: 'company_home',
      component: company_home
    },
    {
<<<<<<< HEAD
    path: '/Register',
    name: 'Register',
    component: Register
   },   
=======
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
      component: HelloWorld
    },
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
   {
      path: '/jobHome',
      name: 'jobHome',
      component: jobHome
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
<<<<<<< HEAD
    },
=======
    }
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
	]
})