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

=======
import $ from 'jquery'



import 'font-awesome/css/font-awesome.css';
>>>>>>> 2d5deab3f3cbe41fe5dd1314282d7693e858e0a6
Vue.use(ElementUI)
Vue.prototype.$axios=Axios
Vue.component('star-rating', StarRating);
Vue.config.productionTip = false

Vue.use(BaiDuMap,{
	ak:'YOUR_APP_KEY'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
