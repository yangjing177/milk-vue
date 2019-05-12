<template>
  <div id="HelloWorld">
    <div class="child">
    <el-container>
      <el-header class="header" style="padding: 0px">
        <vheader />
      </el-header>

      <el-header>
        <div class="header-left">
          <router-link to="/"><a href=""><img src='../image/logo.jpg'></a></router-link>
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
                    <span style="float: left">关于随心订</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="Contact" style="min-width: 0px">联系我们</el-menu-item>
                    <el-menu-item index="Brief" style="min-width: 0px">随心订简介</el-menu-item>
                    <el-menu-item index="Recruit" style="min-width: 0px">招贤纳士</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="FriendlyLinks">
                  <span slot="title">友情连接</span>
                </el-menu-item>

                <el-menu-item index="Problem">
                  <span slot="title">常见问题</span>
                </el-menu-item>

                <el-menu-item index="Law">
                  <span slot="title">法律条款</span>
                </el-menu-item>

                <el-menu-item index="CopyrightNotice">
                  <span slot="title">版权申明</span>
                </el-menu-item>

                <el-menu-item index="Map">
                  <span slot="title">网站地图</span>
                </el-menu-item>

                <el-submenu index="2">
                  <template slot="title">
                    <span style="float: left">随心订功能</span>
                  </template>

                  <el-menu-item-group>
                    <el-menu-item index="Cancel" style="min-width: 0px">退订</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <span style="float: left">随心订支付</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="Pay" style="min-width: 0px">支付宝支付</el-menu-item>
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

      <el-header class="header" style="padding: 0px">
        <bottom />
      </el-header>
    </el-container>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Bottom from '@/components/Bottom'
  export default {
    name: "commodity",
    components: {
      'vheader': Header,
      'bottom': Bottom,
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
  .HelloWorld {
    position:relative;
    height:100%;
    /*//高度根据需求自行设定*/
  }
  .child{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    /*//left,top,right,*/
    /*bottom都为0，充满真个页面*/
    overflow-y:auto;
    overflow-x:hidden;
    /*//设置Y轴出现滚动条，X轴隐藏*/
  }
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
    /*height: 1308px;*/
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
