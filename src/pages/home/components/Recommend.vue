<template>
  <div>
    <div class="title">热销</div>
    <ul>
      <li class="item border-bottom" v-for= 'item of recommendList' :key= 'item.id' >
        <img class="item-img" :src='item.imgUrl' />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/29/29d9b9078000774fa3.img.jpg_200x200_3621a35a.jpg',
          title: '北京欢乐谷',
          desc: '亚洲唯一飞行式过山车等你来挑战'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/29/29d9b9078000774fa3.img.jpg_200x200_3621a35a.jpg',
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1 //能自动撑开屏幕的宽度
      padding: .1rem
      min-width: 0 
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        background: #ff9300
        padding: 0 .16rem
        border-radius: .06rem
        margrin-top: .2rem
        color: #fff
</style>