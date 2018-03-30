<template>
  <div class="error">
    <div class="main-logo">
      VUE-ADMIN 后台管理系统
    </div>
    <div class="error-main">
      <div class="err-reason">{{ errorMap[errorCode] && errorMap[errorCode].message || '请求失败'}}</div>
      <div class="tips">
        不要着急，你可以返回
        <a class="click-page" @click="back">上一页</a>或
        <a class="click-page" @click="toHome">首页</a>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    created () {
    },
    data () {
      return {
        errorCode: this.$route.params.code,
        errorMap: {
          403: {
            message: '抱歉，你无权访问该页面'
          },
          404: {
            message: '抱歉，你访问的页面不存在'
          },
          500: {
            message: '抱歉，服务器出错了'
          },
          503: {
            message: '503'
          }
        }
      }
    },
    methods: {
      toHome () {
        this.$router.push({path: '/home'});
      },
      back () {
        this.$router.go(-1);
      }
    },
    components: {}
  };
</script>
<style lang="scss" scoped>
  .error {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(230, 230, 230);

    .main-logo {
      margin-top: 50px;
      height: 90px;
      line-height: 90px;
      background-color: rgb(2, 131, 141);
      text-align: center;
      color: #ffffff;
      font-size: 24px;
      font-weight: 900;
    }

    .error-main {
      margin-top: 50px;
      text-align: center;

      .err-message {
        display: inline-block;
        width: 300px;
        height: 180px;
        color: #ffffff;
        font-size: 20px;
      }
      .err-reason {
        margin: 30px 0 20px 0;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        height: 60px;
        width: 360px;
        line-height: 60px;
        font-size: 26px;
        font-weight: 600;
      }
      .err-reason::before {
        content: '';
        width: 360px;
        height: 4px;
        position: absolute;
        top: 0px;
        left: 0px;
        background: linear-gradient(to bottom, #999999, #eeeeee);
        border-radius: 50% / 100% 100% 0 0;
        transform: rotateX(180deg);
      }
      .err-reason::after {
        content: '';
        width: 360px;
        height: 4px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        background: linear-gradient(to bottom, #999999, #eeeeee);
        border-radius: 50% / 100% 100% 0 0;
      }
      .tips {
        font-size: 18px;
        .click-page {
          color: rgb(2, 131, 141);
          font-weight: 600;
        }
        .click-page:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
