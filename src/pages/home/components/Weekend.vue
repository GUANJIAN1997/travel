<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="border-bottom" v-for= 'item of recommendList' :key= 'item.id' >
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl' />
        </div>
        
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '北京欢乐谷',
          desc: '亚洲唯一飞行式过山车等你来挑战'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '北京欢乐谷',
          desc: '亚洲唯一飞行式过山车等你来挑战'
        }]
  }
}
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #ccc
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%  //这三行代码是能设置自适应高度的撑满屏幕的墙纸，接下来就把图片填充进来就行
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>