<template>
  <div id="HelloWorld" style="height: 2500px;width: 100%">
    <el-container>
      <el-header class="header" style="padding: 0px">
        <vheader />
      </el-header>

      <el-header>
        <div class="header-left">
          <router-link to="/"><a href=""><img src='../image/logo.jpg'></a></router-link>
        </div>
        <div class="header-right">
          <span class="huan-login">个人中心</span>
        </div>
      </el-header>
      <div style="width:100%;border-top: 1px solid  #CCCCCC;transform: scaleY(1);margin-top: 50px;margin-bottom: 45px"></div>


      <div class="list-boxs">
        <!--<div class="list-left">-->
        <el-aside style="width: 200px;float: left">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                       unique-opened
                       router>
                <el-submenu index="1">
                  <template slot="title">
                    <span style="float: left">我的订单</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="Order" style="min-width: 0px">配送中</el-menu-item>
                    <el-menu-item index="OrderAudit" style="min-width: 0px">审核中</el-menu-item>
                    <!--<el-menu-item index="Order" style="min-width: 0px">已取消</el-menu-item>-->
                    <el-menu-item index="OrderAuditFailed" style="min-width: 0px">审核未通过</el-menu-item>
                    <el-menu-item index="OrderFinish" style="min-width: 0px">已完成</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <span style="float: left">账号中心</span>
                  </template>
                  <el-menu-item-group>
                    <!--<el-menu-item index="BaiXue">我的会员</el-menu-item>-->
                    <el-menu-item index="AccountInfo">账号信息</el-menu-item>
                    <el-menu-item index="AccountSafe">账号安全</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!--</div>-->
        <!--<div class="list-main">-->
        <el-main style="float: left;padding: 0">
          <router-view></router-view>
        </el-main>
        <!--</div>-->
      </div>
    </el-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "commodity",
    components: {
      'vheader': Header
    },
    data () {
      return {
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }

</script>


<style scoped>
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
  .commodity-biaoqian{
    width: 100%;
    height: 94px;
  }
  .commodity-biaoqian-top{
    width: 1200px;
    height: 49px;
    margin: auto;
    border-bottom: 1px solid #b9b9b9;
  }
  .commodity-all-name{
    line-height: 49px;
    color: #405aa8;
    font-size: 14px;
    font-weight: 600;
    float: left;
  }
  .list-boxs{
    width: 1200px;
    height: 1308px;
    margin: auto;
  }
  .list-left{
    width: 198px;
    height: 741px;
    float: left;
  }
  .list-main{
    width: 960px;
    height: 1308px;
    float: left;
    margin-left: 42px;
  }
  .over-hide{
    overflow: hidden;
  }
  .el-menu-item{
    /*float: left;*/
  }
</style>
