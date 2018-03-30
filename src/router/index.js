import Vue from 'vue';
import VueRouter from 'vue-router';
import {routers} from './route';
import store from 'src/store/index';
import {Loading} from 'element-ui';
import Util from 'src/assets/js/util';

Vue.use(VueRouter);

const routerConfig = {
  mode: 'history',
  linkActiveClass: 'active',
  routes: routers
};

export const router = new VueRouter(routerConfig);

let loading;
router.beforeEach((to, form, next) => {
  loading = Loading.service({
    // fullscreen: true,
    target: '.content-wrapper',
    text: '跳转中...'
  });
  
  // 设置window.document.title 的名称
  Util.title(to.meta.title);
  
  // 判断该路由是否需要登陆权限
  if (to.meta.requireAuth) {
    if (store.state.Token) { // 通过vuex state 获取当前User对象中的token
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登陆成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // 解决某些情况下loading无法关闭的情况
  setTimeout(() => {
    loading.close();
  }, 0)
});
