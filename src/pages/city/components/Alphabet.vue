<template>
  <ul class="list">
    <li 
    class="item" 
    v-for="item of letters" 
    :key="item" 
    :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart" 
    @touchmove="handleTouchMove" 
    @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () { //初次渲染alphabet.vue时候是用cities空对象渲染的（页面刚加载的时候什么东西都不会显示出来），当ajax获取到数据之后cities的值才发生变化 alphabet才被渲染出来，当往alphabet这个组件里传的值发生变化的时候alphabet就会重新渲染，当alphabet重新渲染之后updated这个声明周期钩子就被执行
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change',e.target.innerText)   //向外触发事件名字是change，事件的内容是e.target.innerText
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus == true) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {// 函数节流，减少handleTouchMove执行的次数
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY -this.startY) / 20) //向下取整
        if (index >=0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
          }
        }, 8)
        
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>