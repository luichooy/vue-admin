> [ant-design-vue版](https://github.com/luichooy/vue-antd-pro)

大家感兴趣得话，可以去瞧瞧，如果觉得还行得话，给个⭐,谢谢各位喽😊

---
# Build Setup:


```plain
# 将项目克隆到本地
git clone https://github.com/luichooy/vue-admin.git

# 进入到项目目录
cd vue-admin

# 安装依赖
yarn

# 启动本地服务，服务端运行在 3000 端口
yarn server

# 项目打包
yarn build

# lint
yarn lint
```

# 目录结构：


```
├── public
│   ├── favicon.ico
│   ├── index.html
├── src
│   ├── common
│   │   └── styles
│   │   │   ├── base.less
│   │   │   ├── common.less
│   │   │   ├── iconfont.css
│   │   │   ├── mixin.less
│   │   │   ├── table.less
│   │   │   ├── variable.less
│   │   ├── util
│   │   │   ├── date
│   │   │   ├── http
│   │   │   ├── storage
│   │   │   ├── index.js
│   ├── components
│   │   ├── card
│   │   ├── filterbar
│   │   └── score
│   │   ├── selfAdd
│   │   ├── tableRadio
│   │   ├── validateCode
│   │   ├── Vmodel
│   ├── pages
│   │   ├── charts
│   │   ├── error
│   │   ├── form
│   │   └── login
│   │   ├── main
│   │   ├── setting
│   │   ├── tables
│   │   ├── test
│   ├── router
│   │   ├── index.js
│   │   ├── route.js
│   ├── store
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── mutations.js
│   │   ├── state.js
│   ├── main.js
│   ├── App.vue
├── browserlistrc
├── eslintrc.js
├── .prettierrc
├── .gitignore
├── babel.config.js
├── package.json
└── readme.md
```

# 功能实现：


* [x] 利用koa完成api开发，实现服务端接口
* [x] 登陆，登出
* [x] 验证码插件的实现
* [x] 通过vuex管理用户信息和token
* [x] 左侧菜单栏，上方顶部栏
* [x] 利用axios设置请求，响应拦截器，对http请求进行统一管理
* [x] 设置vue-router的导航守卫，实现页面访问权限控制及页面跳转loading的统一管理
* [x] 引入vue-echarts,实现多种柱状图/折线图/饼图
* [x] 表格-基本表格示例
* [x] 自由表单渲染及自定义表单元素的实现

# 效果预览：

---


![login.gif | center | 832x585](https://cdn.yuque.com/yuque/2018/gif/95048/1522651362860-40c6bf1f-45c7-429d-8dea-f90bbdb45b22.gif "")

![basic.gif | center | 832x585](https://cdn.yuque.com/yuque/2018/gif/95048/1522651400348-538008f4-4d55-45d9-933a-a72449a1bbaf.gif "")


![charts.gif | center | 832x585](https://cdn.yuque.com/yuque/2018/gif/95048/1522651417218-cef6f977-a7a8-44e9-9902-2e1b29c142fb.gif "")

![form.gif | center | 832x585](https://cdn.yuque.com/yuque/2018/gif/95048/1522651426493-b10d5605-70ff-47dd-b35b-f5959380498b.gif "")

![test.gif | center | 1316x926](https://cdn.yuque.com/yuque/2018/gif/95048/1522651433603-32edb860-2099-4783-a1ca-f28ceb560000.gif "")
