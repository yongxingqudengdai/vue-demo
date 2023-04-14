// 配置路由的地方
import VueRouter from 'vue-router';

import routes from './routes';

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

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {  y: 0 }
  }
})

export default router

