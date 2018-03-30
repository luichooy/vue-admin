import axios from 'axios';
import {
  Loading,
  Message,
  MessageBox
} from 'element-ui';
import store from './store/index';
import {
  router
} from './router/index';
import localStorage from 'src/assets/js/localStorage';

// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = '/api';
axios.defaults.headers = {
  'content-type': 'application/json;charset=UTF-8'
};

var loadingInstance;

// 请求拦截器
axios.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    fullscreen: true,
    lock: true,
    text: '正在请求数据...'
  });

  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete'
  ) {
    config.data = JSON.stringify(config.data);
    console.log(config.data);
  }

  if (!store.state.Token) {
    store.commit('setToken', localStorage.getItem('Token'));
  }

  config.headers.token = store.state.Token ? store.state.Token.token : null;

  return config;
}, error => {
  loadingInstance.close();
  Message.error({
    message: '请求失败'
  });
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(res => {
  loadingInstance.close();
  console.log(res);
  return res.data;
}, error => {
  loadingInstance.close();
  if (error && error.response) {
    console.log(error.response);

    switch (error.response.status) {
      // 401 token失效
      case 401:
        MessageBox.alert('身份信息已过期，请重新登陆', '提示', {
          confirmButtonText: '重新登陆',
          showClose: false,
          type: 'error',
          callback: action => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }
        });
        break;

        // 403 服务器拒绝访问
      case 403:
        router.push('/error/403');
        break;

        // 404 访问的资源不存在
      case 404:
        router.push('/error/404');
        break;

        // 500 服务器错误
      case 500:
        router.push('/error/500');
        break;
    }

    return Promise.reject(error);
  }
});

export default axios;
