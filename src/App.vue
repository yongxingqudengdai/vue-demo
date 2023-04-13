<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- Footer组件在home、search路由下显示，在login、register下隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 只指定目录的情况下，自动定位index.vue
import Header from './components/Header'
//只写文件名Footer，自动定位Footer.vue
import Footer from './components/Footer/Footer'


export default {
  name: 'App',
  components: {Header,Footer},
  mounted(){  
    // 只在这里请求一次（派发）
    this.$store.dispatch("home/categoryList");
  }
}
</script>

<style scoped>

</style>
