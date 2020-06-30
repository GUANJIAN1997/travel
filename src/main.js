// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 统一在不同浏览器上css的样式
import './assets/styles/reset.css'
// 移动端有1像素边框的问题 高清手机一像素边框会在高清手机上显示两个像素
import './assets/styles/border.css'
// 移动端中有300毫秒点击延迟的问题，用fastclick来解决
import fastClick from 'fastclick'

Vue.config.productionTip = false
// 这样就正确使用了fastclick解决了移动端点击事件300毫秒延迟的问题
fastClick.attach(document.body)
/* eslint-disable no-new */
/* 定义了一个vue的根实例，挂载在id=app的元素上 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/* 整个项目的入口文件 */
