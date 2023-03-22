import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login/Login"
import navTest from "../views/navTest";
import Home from "../views/Home/Home";
import GoodsList from '../views/Shop/Goods/GoodsList'
import none from "../views/none"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect: '/home'
  },
  {
    path: '/home',
    meta:{
      navTitle:"首页"
    },
    name:'None',
    component: none,
    redirect: '/home/',
    children:[
      {
        path:'/',
        name:'HomeIndex',
        meta:{
          navTitle:'后台首页'
        },
        component:Home,
      },
      {
        path:'shop/goods/list',
        name:'GoodsList',
        component:GoodsList,
        meta:{
          navTitle:'商品列表'
        },

      },
      {
        path:'goods',
        name:"navTest",
        component: navTest
      },
    ]
  },
  {
    path:"/goods",
    meta:{
      navTitle: "商品"
      },

  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/test',
    name:"navTest",
    component: navTest
  }


]

const router = new VueRouter({
  routes
})

export default router
