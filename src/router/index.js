import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from './route';
import store from 'src/store/index';
import { Loading } from 'element-ui';
import { setTitle } from 'src/assets/js/util';

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
  setTitle(to.meta.title);
  
  // 判断该路由是否需要登陆权限
  if (to.name === '' || to.name === '/home') {
    store.commit('SET_TOKEN', sessionStorage.getItem('token'));
    let token = store.state.token;
    if (!token) {
      next({
        path: '/login'
      });
    } else {
      next();
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
