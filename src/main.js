//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';

// 引入全局组件Typenav
import TypeNav from './components/TypeNav';
// 全局组件注册的语法:Vue.component('组件标签名',构造器对象)
Vue.component(TypeNav.name, TypeNav)

// 引入MockServe.js 的Mock资源
import '@/mock/mockServe'
// 引入swiper的css样式
import 'swiper/css/swiper.css'

// 引入vueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 引入vuex仓库
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//apply the plugin
Vue.use(VueRouter)


//创建vm
new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
})
