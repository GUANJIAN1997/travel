<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
<!-- <div class="home">home</div> -->
<!-- 做页面跳转在vue中一般不使用a标签，一般用router-link标签 -->
<!-- <router-link to="/list" class="home">列表页</router-link> -->
</div>
</template>

<script>
// 引入进来HomeHeader了（这是一个局部组件）下面要使用这个组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
/* 导出一个对象 */
export default {
/* 组件的名字 */
  name: 'Home',
// 声明这个局部组件，注册到home组件
  components: {
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
