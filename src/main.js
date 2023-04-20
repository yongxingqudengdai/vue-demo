//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';

// 引入全局组件
import TypeNav from './components/TypeNav';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination';
// 全局组件注册的语法:Vue.component('组件标签名',构造器对象)
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

// 引入MockServe.js 的Mock资源
import '@/mock/mockServe'
// 引入swiper的css样式
import 'swiper/css/swiper.css'

// 引入api所有请求函数
import * as API from '@/api';

// 引入vueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 引入vuex仓库
import store from './store'

// 引入v-lazy图片懒加载需要的插件
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload)

// 按需引入element-ui并挂载到全局
import {Button,MessageBox} from 'element-ui';
Vue.prototype.$msgbox = MessageBox ;
Vue.prototype.$alert = MessageBox.alert;

//关闭Vue的生产提示
Vue.config.productionTip = false
//apply the plugin
Vue.use(VueRouter)

// 引入v-validate表单校验插件(未开发)

//创建vm
new Vue({
	el: '#app',
	render: h => h(App),
	// 安装全局事件总线$bus（激活）
	beforeCreate() {
		Vue.prototype.$bus = this;
		// ???
		Vue.prototype.$API = API;
	},
	router,
	store
})
