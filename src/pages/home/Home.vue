<template>
<div>
  <home-header></home-header>
  <home-swiper :list='swiperList'></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="weekendList"></home-weekend>
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
import axios from 'axios'
import { mapState } from 'vuex'
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
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)//每次都请求不同的json
        .then(this.getHomeInfosucc)
    },
    getHomeInfosucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {//页面被显示的时候activated就会被执行
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
