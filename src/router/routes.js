// 引入组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'

export default [
  // trade交易页面
  {
    path: '/trade',
    name:'Trade',
    component: Trade,
    meta: {
      show: true,
    }
  },
  // 我的购物车页面
  {
    path: '/shopcart',
    name:'ShopCart',
    component: ShopCart,
    meta: {
      show: true
    }
  },
  // 成功加入购物车页面
  {
    path: '/addcartsuccess',
    name:'addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true
    }
  },
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
    // 问号非必填
    path: '/search/:keyword?',
    component: Search,
    meta: {
      show: true
    }
  },
  {
    name: 'detail',
    path: '/detail/:skuId',
    component: Detail,
    meta: {
      show: true
    }
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]