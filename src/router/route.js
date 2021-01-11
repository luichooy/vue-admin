/** @format */

import Layout from '../pages/layout/layout'
const Login = () => import('../pages/login/login')
const Error = () => import('../pages/error/index')
const Home = () => import('../pages/home/home')

// 不作为main组件子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: Login
}

// 错误页面
export const errorRouter = {
  path: '/error/:code',
  name: 'error',
  meta: {
    title: 'error'
  },
  component: Error
}

// 作为main组件子页面展示  但不在左侧菜单显示的路由卸载otherRoter里
export const otherRouter = {
  path: '',
  name: 'otherRouter',
  redirect: '/home',
  meta: {
    requireAuth: true
  },
  component: Layout,
  children: [
    {
      path: 'home',
      name: 'home',
      title: '首页',
      component: Home
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/tables',
    name: 'tables',
    title: '表格管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'basic',
        name: 'basic',
        title: '基本表格',
        component: () => import('../pages/tables/basic')
      },
      {
        path: 'sort',
        name: 'sort',
        title: '排序表格',
        component: () => import('../pages/tables/sort')
      },
      {
        path: 'filter',
        name: 'filter',
        title: '筛选表格',
        component: () => import('../pages/tables/filter')
      }
    ]
  },
  {
    path: '/charts',
    name: 'charts',
    title: 'echarts图表',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'bar',
        name: 'bar',
        title: '柱状图',
        component: () => import('../pages/charts/bar')
      },
      {
        path: 'line',
        name: 'line',
        title: '折线图',
        component: () => import('../pages/charts/line')
      },
      {
        path: 'pie',
        name: 'pie',
        title: '饼图',
        component: () => import('../pages/charts/pie')
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    title: '表单管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'render',
        name: 'render',
        title: '渲染表单',
        component: () => import('../pages/form/render/render')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    title: '系统管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'system_index',
        title: '系统管理',
        component: () => import('../pages/system/index/index')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    title: '用户管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'user_index',
        title: '用户管理',
        component: () => import('../pages/user/index')
      }
    ]
  },
  {
    path: '/access',
    name: 'access',
    title: '权限管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'access_index',
        title: '权限管理',
        component: () => import('../pages/access/index')
      }
    ]
  },
  {
    path: '/log',
    name: 'log',
    title: '日志管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'log_index',
        title: '操作日志',
        component: () => import('../pages/log/index')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    title: '测试',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'test_index',
        title: '测试',
        component: () => import('../pages/test/test')
      }
    ]
  }
]

export const routers = [loginRouter, errorRouter, otherRouter, ...appRouter]
