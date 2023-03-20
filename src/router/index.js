import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from "../views/MainLayout";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'MainLayout',
    component: MainLayout
  },



]

const router = new VueRouter({
  routes
})

export default router
