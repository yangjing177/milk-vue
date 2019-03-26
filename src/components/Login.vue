<template>
  <el-container>
    <el-header class="header">
      <vheader />
    </el-header>

    <el-header>
      <div class="header-left">
        <img src='../image/logo.jpg'>
      </div>
      <div class="header-right">
        <span class="huan-login">欢迎登录</span>
      </div>
    </el-header>
    <!--<hr style="width:100%;border: 1px solid black;margin-top: 30px"/>-->
    <div style="width:100%;border-top: 1px solid  #CCCCCC;transform: scaleY(1);margin-top: 50px"></div>

    <div class="main-background">
    <el-main>
      <div class="main-right">
        <div class="login-outside">
          <div class="login-right-reg">
            <span class="user-login-word">用户登录</span>
          </div>
          <hr style="color:#c5c4c4;margin-bottom: 5px;border-width: 1px 0px 0px;border-top-width: 1px;border-top-style: solid;padding-bottom: 10px;">
          <div class="login-form-style">

            <!--登陆form表单-->
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"v>
              <el-form-item prop="username">
            <span class="svg-container svg-container_login">
              <svg-icon icon-class="user" />
            </span>
                  <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
                </el-form-item>
                <el-form-item prop="password">
            <span class="svg-container">
              <!--<svg-icon icon-class="password"></svg-icon>-->
            </span>
                <!--@keyup.enter.native:按回车触发登陆 autoComplete:启用自动完成功能   placeholder:文本框注释-->
                <el-input name="password" :type="pwdType"  v-model="loginForm.password" autoComplete="on"
                          placeholder="password"></el-input>
                <!--所有的v-on都可以简写为@，比如说v-click可以简写为@click  单击触发事件-->
              </el-form-item>
              <el-form-item>
                <!--@click.native.prevent="handleLogin"：单击 键盘事件要加native，阻止冒泡-->
                <el-button type="primary" style="width:100%;">
                  登录
                </el-button>
              </el-form-item>
            </el-form>

          </div>
        </div>
      </div>

    </el-main>
    </div>
  </el-container>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      'vheader': Header
    },
    data(){
      const validateUsername = (rule, value, callback) => {
      if (value.length = 0) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
      const validatePass = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePass }]
        },
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      // handleLogin() {
      //   this.$refs.loginForm.validate(valid => {
      //     if (valid) {
      //       this.loading = true
      //       this.$store.dispatch('Login', this.loginForm).then(() => {
      //         this.loading = false
      //         this.$router.push({ path: '/' })
      //       }).catch(() => {
      //         this.loading = false
      //       })
      //     } else {
      //       console.log('error submit!!')
      //       return false
      //     }
      //   })
      // }
    }
    }

</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .header-left{
    margin-left: 350px;
    float: left;
  }
  .header-right{
    width: 200px;
    height: 35px;
    border-left: 1px solid #cecdcd;
    margin-left: 50px;
    margin-top: 24px;
    float: left;
  }
  .huan-login{
    margin-left: 20px;
    line-height: 35px;
    font-size: 25px;
    font-family: '黑体';
    color: #979997;
  }
  .main-background{
    width: 100%;
    height: 748px;
    background: url("../image/background1.jpg") no-repeat;
  }
  .aside-img{
    float: left;
  }
  .main-right{
    width: 417px;
    height: 418px;
    border: 1px solid #d7d7d7;
    border-top: 2px solid red;
    margin-top: 120px;
    margin-left: 1150px;
    float: left;
  }
  .login-outside{
    width: 335px;
    height: 330px;
    border: 1px solid black;
    margin-top: 41px;
    margin-left: 44px;
  }
  .user-login-word{
    font-size: 24px;
    color: #7a7a7a;
  }
  .login-form-style{
    width: 335px;
    height: 284px;
    border: 1px solid black;
  }


  /*form表单*/

</style>
