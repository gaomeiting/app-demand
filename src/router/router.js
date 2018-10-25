/*
 * @Author: Cicy
 * @Date: 2018-10-23 09:51:21
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-25 16:39:52
 */
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
  /* 注册逻辑start */
    {
      path: "/regist",
      name: "regist",
      meta: {breadcrumbName: '注册', icon: 'regist'},
      component: () => import("@/views/regist/regist")
    },
   /* 注册逻辑end */
  /* 工作台模块start */
  {
    path: "/index",
    meta: {breadcrumbName: '工作台', icon: 'dashboard', requireAuth: true},
    component: () => import("@/views/dashboard/dashboard"),
    children: [{
      path: '',
      name: 'dashboard',
      meta: {breadcrumbName: '需求列表', icon: 'task', requireAuth: true},
      component: () => import("@/views/task/task"),
    }, {
      path: ':id',
      name: 'taskDetails',
      meta: {breadcrumbName: '需求详情', icon: 'taskDetails', requireAuth: true},
      component: () => import("@/views/taskDetails/taskDetails"),
    }]
  },
  /* 工作台模块end */
  {
    path: '/wallet',
    name: 'wallet',
    meta: {breadcrumbName: '资金管理', icon: 'wallet', requireAuth: true},
    component: () => import("@/views/wallet/index"),
  },
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
          path: '/order/:id',
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
              meta: {breadcrumbName: '发布快捷需求', requireAuth: true},
              component: () => import('@/views/demands/fast.vue')
            },
            {
              path: '/demands/project',
              name: 'demands_project',
              meta: {breadcrumbName: '发布项目需求', requireAuth: true},
              component: () => import('@/views/demands/project.vue')
            },
            {
              path: '/demands/success',
              name: 'demands_success',
              meta: {breadcrumbName: '订单支付', requireAuth: true},
              component: () => import('@/views/demands/success.vue')
            },
          ]
        },

      ]
    },
    {
      path: "/news",
      name: "news",
      meta: {breadcrumbName: '消息中心', icon: 'news', requireAuth: true},
      component: () => import('@/views/news/news.vue')
    },
    {
      path: "/success",
      name: "success",
      meta: {breadcrumbName: '订单支付', icon: 'news', requireAuth: true},
      component: () => import('@/views/success/success.vue')
    }
]


if (window.localStorage.getItem('user')) {
  let user = JSON.parse(window.localStorage.getItem('user'))
store.commit('SET_LOGIN', user)
}
const router= new Router({
routes : routes
})

router.beforeEach((to, from, next) => {

if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.user) {
        next();
    }
    else {
      axios('/api/user/userinfo').then(res => {
        store.commit('SET_LOGIN', res.data);
        next();
      }).catch(err => {
        handlerError(err.response.data)
      })
    }
}
else {
    next();
}
});
export default router
