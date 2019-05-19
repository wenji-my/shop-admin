import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/goods/category',
      children: [
        {
          path: '/goods/category',
          name: 'goodsCategory',
          component: () => import('./views/goods/category/Index')
        },
        {
          path: '/goods/list',
          name: 'goodsList',
          component: () => import('./views/goods/list/Index')
        },
        {
          path: '/supplier/category',
          name: 'supplierCategory',
          component: () => import('./views/supplier/category/Index')
        },
        {
          path: '/supplier/list',
          name: 'supplierList',
          component: () => import('./views/supplier/list/Index')
        },
        {
          path: '/supplier/add',
          name: 'supplierAdd',
          component: () => import('./views/supplier/list/Add')
        }
      ]
    }
  ]
})
