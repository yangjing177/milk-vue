<template>
  <div id="HelloWorld" style="height: 2500px">
    <el-container>
      <el-header class="header" style="padding: 0px">
        <vheader />
      </el-header>

      <el-header>
        <div class="header-left">
          <img src='../image/logo.jpg'>
        </div>
        <div class="header-right">
          <span class="huan-login">列表</span>
        </div>
      </el-header>
      <div style="width:100%;border-top: 1px solid  #CCCCCC;transform: scaleY(1);margin-top: 50px"></div>

      <div class="commodity-biaoqian">
        <div class="commodity-biaoqian-top">
           <span class="commodity-all-name">全部商品></span>
        </div>
      </div>

      <div class="list-boxs">
        <div class="list-left">
          <el-row class="tac" style="margin-top: 0px">
            <el-col :span="12" style="width: 100%">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="list-main"></div>
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
</style>
