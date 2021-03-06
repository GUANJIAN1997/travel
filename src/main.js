// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 统一在不同浏览器上css的样式
import 'styles/reset.css'
// 移动端有1像素边框的问题 高清手机一像素边框会在高清手机上显示两个像素
import 'styles/border.css'
// 移动端中有300毫秒点击延迟的问题，本来用fastclick来解决,现在在chrome 火狐上只要在reset.css第一行的html设置了touch-action: manipulation就可以了

// 这是轮播图的插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 因为iconfont几乎在每个目录下都要引用，所以放在这里
import store from './store'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'babel-polyfill'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
/* 定义了一个vue的根实例，挂载在id=app的元素上 */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
/* 整个项目的入口文件 */
