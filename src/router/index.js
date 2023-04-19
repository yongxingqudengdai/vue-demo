// 配置路由的地方
import VueRouter from 'vue-router';

// 引入routes.js路由配置  
import routes from './routes';

// 引入store
import store from '@/store';

// 重写push和replace方法
// 1.进行原方法备份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 2.开始重写
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { }); //忽略异常
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { }); //忽略异常
  }
}

// 对外暴露VueRouter类的实例
const router = new VueRouter({
  mode: 'hash',
  routes,
  // 页面跳转时回到最上方
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {  y: 0 }
  }
});

// 添加路由守卫
router.beforeEach(async (to,from,next)=>{
  // to:跳转目标
  // from:跳转前地址
  // next: next()放行 next(path)跳转path next(false)中断跳转
  // 得到令牌
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;

  //用户登录了
  if(token){
    // ***to和from都是$route对象
    // 不让注册和登录
    if(to.path == '/login' || to.path == '/register'){
      next('/');
    }
    
  }
})

export default router

