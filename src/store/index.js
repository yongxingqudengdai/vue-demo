import Vue from 'vue';
import Vuex from 'vuex';

// 使用插件
Vue.use(Vuex);

// 引入小仓库,这里import的名字就是命名空间的名字
import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';
import user from './user';


export default new Vuex.Store({
  // 实现vuex模块式开发
  modules:{
    home,
    search,
    detail,
    shopcart,
    user
  }
});