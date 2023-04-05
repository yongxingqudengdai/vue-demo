// 配置路由的地方
import VueRouter from 'vue-router';

// 引入组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// 重写push和replace方法
// 1.进行原方法备份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 2.开始重写
VueRouter.prototype.push = function(location,resolve,reject){
  if (resolve && reject){
    originPush.call(this,location,resolve,reject);
  }else{
    originPush.call(this,location,() => { },() => { }); //忽略异常
  }
}

VueRouter.prototype.replace = function(location,resolve,reject){
  if (resolve && reject){
    originReplace.call(this,location,resolve,reject);
  }else{
    originReplace.call(this,location,() => { },() => { }); //忽略异常
  }
}

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        show: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        show: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        show: false
      }
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
      meta: {
        show: true
      }
    },
    // 重定向
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

export default router

