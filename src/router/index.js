import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from "../views/MainLayout"
import Login from "../views/login/Login"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'MainLayout',
    component: MainLayout
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }


]

const router = new VueRouter({
  routes
})

export default router
