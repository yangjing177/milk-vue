<template>
  <div class="HelloWorld">
    <div class="child">
      <el-container style="height: 100%">
        <el-header class="header" style="padding: 0">
          <vheader/>
        </el-header>

        <el-header>
          <div class="header-into">
            <div class="header-left">
              <router-link to="/"><a href=""><img src='../image/logo.jpg'></a></router-link>
            </div>
            <div class="header-right">
              <span class="huan-login">产品详情</span>
            </div>
          </div>
        </el-header>
        <!--<hr style="width:100%;border: 1px solid black;margin-top: 30px"/>-->
        <div style="width:100%;border-top: 1px solid  #CCCCCC;transform: scaleY(1);margin-top: 50px"></div>
        <el-main>
          <div class="order-main-top">
            <div class="order-adress">
              <h3 style="color: #535252;font-size: 16px;">收货信息</h3>
              <div style="color: #535252;font-size: 13px;">默认地址：</div>
              <div class="adress-default" v-if="true">
                <!--{{}}&nbsp;&nbsp;&nbsp;{{}}&nbsp;&nbsp;{{}}&nbsp;&nbsp;{{}}-->
              </div>

            </div>
          </div>
        </el-main>

      </el-container>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
    export default {
        name: "order",
      components: {
        'vheader': Header
      },
      created() {
        this.Car = this.getCar()
        this.findAdressData()
      },
      data(){
          return{
            Car:[],
            more:false,
            order:[],
            adress:[],
            insertAdress:false,
            defaultAdress:{}
        }
      },
      methods:{
        findAdressData() {
          const user=this.user()
          this.$axios.post('/adress/list',
            user,
            {headers: {'Content-Type': 'application/json'}}
          ).then((response) => {
            this.adress = response.data
            this.getDefaultAdr()
            console.log(this.defaultAdress)
          }).catch((error) => {
            console.log("error")
          })
        },
        getCar() {
          return this.$store.state.tempCar
        },
        //锁定用户
        user(){
          return this.$store.state.user
        },
        //获取默认地址
        getDefaultAdr(){
          var adr=this.adress
          for(let i=0;i<adr.length;i++){
            if(adr[i].defaultAdress==0){
              this.defaultAdress=adr[i]
            }
          }
        }

      }
    }
</script>

<style scoped>
  .HelloWorld {
    /*position: relative;*/
    /*height: 100%;*/
    height: 1500px;
    /*//高度根据需求自行设定*/
  }

  .header-into {
    width: 1250px;
    height: 89px;
    margin: auto;
  }

  .header-left {
    /*margin-left: 350px;*/
    float: left;
  }

  .header-right {
    width: 200px;
    height: 35px;
    border-left: 1px solid #cecdcd;
    margin-left: 50px;
    margin-top: 24px;
    float: left;
  }

  .huan-login {
    margin-left: 20px;
    line-height: 35px;
    font-size: 25px;
    font-family: '黑体';
    color: #979997;
  }

  .order-main-top{
    width: 1200px;
    /*height: 105px;*/
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
    margin: auto;
  }
  .order-adress{
    width: 1100px;
    height: 105px;
    margin: auto;
  }
  .adress-default{
    margin-left: 25px;
    margin-top: 10px;
    font-size: 13px;
    color: #979997;;
  }
</style>
