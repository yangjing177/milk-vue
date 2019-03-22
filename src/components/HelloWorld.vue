<template>
  <div id="HelloWorld">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">

          <div class="delivery-address">
            配送
            <el-cascader
            :options="options"
            v-model="selectedOptions"
            expand-trigger="hover"
            :show-all-levels="false"
          ></el-cascader>
          </div>

          <div class="top-right">
            <span v-if="!showname">您好，欢迎来到<span class="xiannai">鲜奶随心订！</span></span>  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login"><a href="Login.vue">[登陆]</a></router-link>
          </div>


        </div>
      </el-col>
    </el-row>

    <el-container>
      <el-header>

      </el-header>

      <el-main>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      </el-main>

      <el-main>main</el-main>
      <el-footer>{{fullName}}</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      fullName: 'Foo Bar',
      options: [{
        value: 'beijing',
        label: '北京',
      }, {
        value: 'shanghai',
        label: '上海',
      },{
        value: 'jiangsu',
        label: '江苏',
        children:[{
          value: 'nanjing',
          label: '南京',
        },{
          value: 'wuxi',
          label: '无锡',
        },{
          value: 'changzhou',
          label: '常州',
        },{
          value: 'suzhou',
          label: '苏州',
        },{
          value: 'nantong',
          label: '南通',
        },{
          value: 'yangzhou',
          label: '扬州',
        },{
          value: 'zhenjiang',
          label: '镇江',
        },
        ]
    },{
        value: 'zhejiang',
        label: '浙江',
        children: [{
          value: 'hangzhou',
          label: '杭州',
        },{
          value: 'ningbo',
          label: '宁波',
        },{
          value: 'jiaxing',
          label: '嘉兴',
        },{
          value: 'jinhua',
          label: '金华',
        },
        ]
      },{
        value: 'anhui',
        label: '安徽',
        children:[{
          value: 'hefei',
          label: '合肥',
        },{
          value: 'wuhu',
          label: '芜湖',
        }]
      },
      ]
    };
  }
}

</script>

<style>
  .el-row {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #f5f5f5;
    border-bottom: 1px solid #c7c7c7;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 26px;
  }

  /*配送地址  开始*/
  .delivery-address{
    width:200px;
    height: 26px;
    font-size: 14px;
    top: -7px;
    /*left: 400px;*/
    position: absolute;
  }
  .el-cascader{
    width:100px;
    height: 26px;
    /*font-size: 14px;*/
  }
  .el-input__inner{
    width:100px;
    height: 23px;
  }
  /*配送地址  结束*/

  .top-right{
    width:800px;
    height: 26px;
    font-size: 14px;
    top: 4px;
    left: 400px;
    position: absolute;
  }
  .xiannai{
    color: blue;
  }

  #HelloWorld {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
