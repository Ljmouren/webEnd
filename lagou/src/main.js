// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Axios from 'axios'
import BaiDuMap from 'vue-baidu-map'
import StarRating from 'vue-star-rating'
<<<<<<< HEAD



import 'font-awesome/css/font-awesome.css';
=======
import $ from 'jquery'
import 'font-awesome/css/font-awesome.css'

>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
Vue.use(ElementUI)
Vue.prototype.$axios=Axios
Vue.component('star-rating', StarRating);
Vue.config.productionTip = false

Vue.use(BaiDuMap,{
<<<<<<< HEAD
	ak:'YOUR_APP_KEY'
=======
	ak:'6RDBj0v48E14XCWlM4mIzortREPzkuT5'
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
