<template>
  <div class="login">
    <div class="middle-wrapper">
      <div class="title-wrapper">
        <div class="title">VUE-ADMIN 后台管理系统</div>
      </div>
      <div class="login-form">
        <el-form
          ref="loginForm"
          :model="form"
          :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入账号">
              <i slot="prefix" class="el-input__icon el-icon-adm-user" style="font-size: 18px;"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :type="passwordType" v-model="form.password" placeholder="请输入密码">
              <i slot="prefix" class="el-input__icon el-icon-adm-password" style="font-size: 18px;"></i>
              <i slot="suffix" class="el-input__icon el-icon-view" style="cursor: pointer;"
                 @click="_togglePasswordType"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="yanzhengma">
            <div class="check-code-wrapper">
              <div class="yanzhengma-wrapper">
                <el-input v-model="form.yanzhengma" @keyup.enter.native="login('loginForm')" placeholder="请输入验证码">
                  <i slot="prefix" class="el-input__icon el-icon-adm-vertification" style="font-size: 18px;"></i>
                </el-input>
              </div>
              <div class="validate-code-wrapper">
                <validate-code ref="validate-code" @change="_setCheckCode"></validate-code>
              </div>
            </div>
          </el-form-item>
          <el-form-item style="margin-bottom: 0;">
            <el-col :span="10" :offset="14">
              <el-form-item>
                <el-button
                  type="primary"
                  class="login-btn"
                  style="width: 100%;"
                  @click="loginHandle('loginForm')">
                  登陆系统
                </el-button>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import validateCode from 'src/components/ValidateCode/index';

  export default {
    created () {
    },
    data () {
      var checkYanzhengma = (rule, value, callback) => {
        value = value.toUpperCase();
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value !== this.checkCode) {
          callback(new Error('验证码错误'));
          this.$refs['validate-code'].draw();
        } else {
          callback();
        }
      };
      return {
        passwordType: 'password',
        checkCode: '',
        form: {
          username: '',
          password: '',
          yanzhengma: ''
        },
        rules: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          yanzhengma: [
            { validator: checkYanzhengma, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      _setCheckCode (value) {
        this.checkCode = value;
      },
      _togglePasswordType () {
        if (this.passwordType === 'password') {
          this.passwordType = 'text';
        } else {
          this.passwordType = 'password';
        }
      },
      loginHandle (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.login();
          }
        });
      },
      login () {
        /*
         *  在这边可以进行登陆请求
         *  将请求返回的Token对象存到store中
         *  @Token  token对象
        */

        let token = 'a94756da-2962-40ae-bdea-787fd02c9d92';

        this.$store.commit('SET_TOKEN', token);
        this.$router.replace('home');
      }
    },
    components: {
      validateCode
    }
  };
</script>
<style lang="scss" scoped>
  .login {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(32, 160, 255);

    .middle-wrapper {
      position: fixed;
      width: 100%;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-60%);

      .title-wrapper {
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;
      }
      .login-form {
        position: relative;
        margin: 0 auto;
        width: 520px;
        padding: 30px 50px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #ffffff;

        .el-row {
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .login-btn {
            width: 100%;
          }
        }

        .check-code-wrapper {
          display: flex;
          justify-content: space-between;
          height: 40px;

          .yanzhengma-wrapper {
            flex: 0 1 auto;
          }

          .validate-code-wrapper {
            flex: 0 0 160px;
          }
        }
      }
    }
  }
</style>
