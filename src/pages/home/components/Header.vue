<template>
<div class="header">
  <div class="header-left">
<!-- 想要在这里显示iconfont图标 -->
    <div class="iconfont back-icon">&#xe624;</div>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市/景点/游玩主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe6e0;</span>
    </div>
  </router-link>
<!-- <div class="home">home</div> -->
<!-- 做页面跳转在vue中一般不使用a标签，一般用router-link标签 -->
<!-- <router-link to="/list" class="home">列表页</router-link> -->
</div>
</template>

<script>
import { mapState } from 'vuex'
/* 导出一个对象 */
export default {
/* 组件的名字 */
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) //把city这个名字的公用数据映射到conputed这个计算属性里
  }
}
</script>

<style lang="stylus" scoped>
/* 移动端的布局一般采用rem的布局模式 1rem = html font-size = 50px rem是相对于reset的字体大小50px */
/* 样式里面引用样式不能直接import，要用@import*/
  //@import '../../../assets/styles/varibles.styl'
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
