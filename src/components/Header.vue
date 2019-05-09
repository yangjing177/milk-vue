<template>
  <div id="HelloWorld">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">

          <div class="delivery-address">
            配送
            <el-cascader
              :options="options"
              expand-trigger="hover"
              :show-all-levels="false"
              size="mini"
            ></el-cascader>
          </div>

          <div class="top-right">
            <span v-if="user">
              {{user}}! 欢迎登录鲜奶随心订
              <router-link to="/login" @click="logout"><a href="Login.vue" @click="logout">[退出]</a></router-link>
            </span>
            <span v-else>
              您好，欢迎来到<span class="xiannai">鲜奶随心订！</span>  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <router-link to="/login"><a href="Login.vue">[登录]</a></router-link>&nbsp;&nbsp;
              <router-link to="/register"><a href="Register.vue">[注册]</a></router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <router-link to="/AccountInfo"><a href=".vue">个人中心</a></router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/Order"><a href="../components/member/orderCenter/Order.vue">我的订单</a></router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/Car"><a href="Car.vue">购物车</a></router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </el-col>
    </el-row>

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
        ],
        showname:false, //判断是否已登陆
      };
    },
    methods: {
      // login () {
      //   this.$router.replace('/')
      // },
      logout () {
        this.$store.dispatch('logout').then(() => {
          this.$router.replace('/login')
        })
      }
    },
    computed:{
      user(){
        return this.$store.state.user
      }
    }
  }

</script>

<style scoped>
  .el-row {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    width: 2000px;
    background: #99a9bf;
  }
  .bg-purple-light {
    width: 2000px;
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
    margin-left: 400px;
    font-size: 14px;
    top: -3px;
    /*left: 400px;*/
    position: absolute;
  }
  .el-cascader{
    width:100px;
    height: 26px;
    /*font-size: 14px;*/
  }
  /*.el-input__inner{*/
    /*width:100px;*/
    /*height: 23px;*/
  /*}*/
  /*配送地址  结束*/

  .top-right{
    width:800px;
    height: 26px;
    font-size: 14px;
    top: 4px;
    left: 800px;
    position: absolute;
  }
  .xiannai{
    color: #405aa8;
  }



</style>
<style>
  a:link{
    color: #7a7a7a;
  }
  单击后访问
  a:visited{
    color: yellow;
  }
  鼠标悬停
  a:hover{
    color: red;
  }
  单击释放
  a:active{
    color: aquamarine;
  }
  a{
    text-decoration:none
  }
</style>
