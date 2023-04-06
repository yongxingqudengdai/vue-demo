import Vue from 'vue';
import Vuex from 'vuex';

// 使用插件
Vue.use(Vuex);

// 引入小仓库
import home from './home';
import search from './search';



export default new Vuex.Store({
  // 实现vuex模块式开发
  modules:{
    home,
    search
  }
});