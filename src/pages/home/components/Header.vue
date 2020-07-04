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
  <div class="header-right">
    {{city}}
    <span class="iconfont arrow-icon">&#xe6e0;</span>
  </div>
<!-- <div class="home">home</div> -->
<!-- 做页面跳转在vue中一般不使用a标签，一般用router-link标签 -->
<!-- <router-link to="/list" class="home">列表页</router-link> -->
</div>
</template>

<script>
/* 导出一个对象 */
export default {
/* 组件的名字 */
  name: 'HomeHeader',
  props: {
    city: String
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
    line-height: .86rem
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
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
