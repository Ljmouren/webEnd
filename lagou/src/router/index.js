import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from '@/pages/LJ/index'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	]
=======
import HelloWorld from '@/components/HelloWorld'
import company_home from '../pages/tang/company_home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/company_home',
      name: 'company_home',
      component: company_home
    }
  ]
>>>>>>> 0e2844c48dae0cfc17cf855049e9317e7c69c211
})