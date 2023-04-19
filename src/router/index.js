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
      // 跳转到根路径
      next(false);
    }else{
      // 登录且有用户信息
      if(name){
        next();
      }else{
        try{
          // 解决登录但没有用户信息的问题
          await store.dispatch('user/getUserInfo');
          next();
        }catch(Error){
          await store.dispatch('user/userLogout');
          next('/login');
        }
      }
    }
    
  }else{
    // 用户未登录
    // 记录一下跳转地址
    let ToPath = to.path;
    // （未开发）如果存在，保存topath中的trade、pay、center参数
    if(ToPath.indexOf('/tra123') != -1){
      next('/login?redirect')
    }else{
      next()
    }
  }
})

export default router

