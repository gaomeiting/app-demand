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
  /* 登录逻辑start */
    {
      path: "/login",
      name: "login",
      meta: {breadcrumbName: '登录', icon: 'login'},
      component: () => import("@/views/login/login")
    },
   /* 登录逻辑end */
  /* 工作台模块start */
  {
    path: "/index",
    meta: {breadcrumbName: '工作台', icon: 'dashboard'},
    component: () => import("@/views/dashboard/dashboard"),
    children: [{
      path: '',
      name: 'task',
      meta: {breadcrumbName: '需求列表', icon: 'task'},
      component: () => import("@/views/task/task"),
    }, {
      path: ':id',
      name: 'taskDetails',
      meta: {breadcrumbName: '需求详情', icon: 'taskDetails'},
      component: () => import("@/views/taskDetails/taskDetails"),
    }]
  },
  /* 工作台模块end */
    {
      path: "/",
      name: "home",
      meta: {breadcrumbName: '首页', icon: 'home', requireAuth: true},
      redirect: "/index",
      component: MenuView,
      children: [
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
          meta: {breadcrumbName: '我的钱包', requireAuth: true},
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
