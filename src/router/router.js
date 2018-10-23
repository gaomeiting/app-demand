import axios from "axios";
import Vue from "vue";
import Router from "vue-router";
import store from '../store'
import MenuView from '@/layout/MenuView.vue'
import RouteView from '@/layout/RouteView.vue'
import PageView from '@/layout/PageView.vue'
import { handlerError } from 'api/catch';
Vue.use(Router);

const routes = [
    {
      path: "/login",
      name: "login",
      meta: {breadcrumbName: '登录', icon: 'login'},
      component: () => import("@/views/login/login")
    },
    {
      path: "/ongoing",
      name: "ongoing",
      meta: {breadcrumbName: '审核中', icon: 'ongoing'},
      component: () => import("@/views/ongoing/ongoing")
    },
    {
      path: "/code",
      name: "code",
      meta: {breadcrumbName: '公众号', icon: 'code'},
      component: () => import("@/views/code/code")
    },
    {
      path: "/",
      name: "home",
      meta: {breadcrumbName: '首页', icon: 'home', requireAuth: true},
      redirect: "/index",
      component: MenuView,
      children: [
        {
          path: 'index',
          name: 'dashboard',
          meta: {breadcrumbName: '我的工作台', requireAuth: true},
          component: () => import("@/views/dashboard/Index.vue")
        },
        {
          path: '/order',
          name: 'order',
          meta: {breadcrumbName: '我的订单', requireAuth: true},
          component: () => import("@/views/order/index.vue"),
        },
        {
          path: '/order/detail',
          name: 'order_detail',
          meta: {breadcrumbName: '订单详情', requireAuth: true},
          component: () => import("@/views/order/detail.vue"),
        },
        {
          path: '/demands',
          name: 'demands',
          meta: {breadcrumbName: '需求广场', requireAuth: true},
          redirect: '/demands/fast',
          component: RouteView,
          children: [
            {
              path: '/demands/fast',
              name: 'demands_fast',
              meta: {breadcrumbName: '快捷需求', requireAuth: true},
              component: () => import('@/views/demands/fast.vue')
            },
            {
              path: '/demands/project',
              name: 'demands_project',
              meta: {breadcrumbName: '项目需求', requireAuth: true},
              component: () => import('@/views/demands/project.vue')
            },
          ]
        },
        {
          path: '/wallet',
          name: 'wallet',
          meta: {breadcrumbName: '资金管理', requireAuth: true},
          component:() => import('@/views/wallet/index.vue')
        },
      ]
    },
    {
      path: "/news",
      name: "news",
      meta: {breadcrumbName: '消息中心', icon: 'news', requireAuth: true},
      component: () => import('@/views/news/news.vue')
    }
]


const router= new Router({
routes : routes
})


export default router
