<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <keep-alive exclude="Detail">
       <!-- 路由内容被加载过一次之后我就把路由中的内容放到内存中，下次再进这个路由的时候不需要重新渲染组件（不需要重新执行钩子函数）只是在内存中把以前的内容拿出来显示就行了  用keepalive之后组件会多一个生命周期函数-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
<!-- 这是整个应用的根组件 -->
