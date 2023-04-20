// 引入组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
  // 查看订单界面-用户中心
  {
    path:'/center',
    component: Center,
    // 二级路由
    children:[
      {
        path:'myorder',
        component:MyOrder,
      },
      {
        path:'grouporder',
        component:GroupOrder,
      },
      {
        path:'',
        redirect:'myorder'
      }
    ],
    meta:{
      show:true,
    },
  },
  // 支付成功页面
  {
    path: '/paysuccess',
    name: 'PaySuccess',
    component: PaySuccess,
    meta: {
      show: true,
    },
    // 路由守卫：只能从支付页面跳转
    // beforeEnter(to ,from ,next){
    //   if(from.path === '/pay'){
    //     next();
    //   }else{
    //     next('/pay');
    //   }
    // },
  },
  // pay支付页面
  {
    path: '/pay',
    name: 'Pay',
    component: Pay,
    props: route =>({orderId: route.query.orderId}),
    meta: {
      show: true,
    },
    /* 只能从交易界面, 才能跳转到支付界面 */
    beforeEnter(to,from,next){
      if(from.path==='/trade'){
        next()
      }else{
        next('/trade')
      }
    },
  },
  // trade交易页面
  {
    path: '/trade',
    name: 'Trade',
    component: Trade,
    meta: {
      show: true,
    }
  },
  // 我的购物车页面
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      show: true
    }
  },
  // 成功加入购物车页面
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
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