import Vue from 'vue'
import Router from 'vue-router'
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
})