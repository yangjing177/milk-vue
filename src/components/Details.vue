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

        <div class="commodity-biaoqian">
          <div class="commodity-biaoqian-top">
            <span class="commodity-all-name">全部商品</span>
            <span class="details-gname">>{{goods.goodsName}}</span>
          </div>
        </div>

        <el-main style="padding-bottom: 20px;border-bottom: 1px solid #d9d9d9;">
          <div class="details-main">
            <div class="details-main-left">
              <div class="details-pictures">
                <img :src=goods.pic class="image"/>
              </div>
              <div class="details-into">
                <div class="details-into-top">
                  <a href="#" class="timtle">小口瓶鲜牛奶220ml</a>
                  <span class="timtle-jj" style="color:#ff0404; ">温馨提示：该产品玻璃瓶包装需要回收。请饮用完后及时放回奶箱中，谢谢。</span>
                </div>
                <div class="role-price">
                  <span class="role-lvos">随心订价：<span style="color: red">￥</span><span
                    id="data-price">{{goods.price}}</span></span>
                  <span class="role-ml">产品规格：{{goods.number}}ml</span>
                </div>
                <div class="role-sum">
                  <div class="details-choice">配送区域：
                    <el-cascader
                      :options="options"
                      expand-trigger="hover"
                      :show-all-levels="true"
                      v-model="selectedOptions"
                      class="jishu"
                      style="width: 200px;height: 32px"
                    ></el-cascader>
                  </div>
                  <div class="details-choice">购买数量：
                    <el-input-number v-model="tempCar.number" size="small" @change="handleChange" :min="1"
                                     :max="10" class="jishu"></el-input-number>
                    份 （每次送奶份数）
                  </div>
                  <div class="details-choice-date">
                    <span style="float: left;line-height: 42px">选择时间：</span>
                    <div class="block1">
                      <el-date-picker
                        :picker-options="pickerOptions"
                        v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="yyyy-MM-dd" format="yyyy-MM-dd">
                      </el-date-picker>
                    </div>
                  </div>
                  <div class="details-choice">
                    *现在下单，光明随心订最早将于{{afterTime}}开始为您配送。
                  </div>
                </div>
              </div>
            </div>
          </div>

        </el-main>

        <el-main style="padding: 0">
          <div class="car-details">
            <span class="car-details-font">产品详情</span>
          </div>
          <div class="car-main-pay">
            <div class="car-pay">
              <span class="car-pay-text">{{goods.goodsName}},容量<span style="color: red">{{goods.size}}ml</span>,每次<span style="color: red">{{tempCar.number}}</span>份,每日送,从{{value1[0]}}到{{value1[1]}}</span>
              <div style="float: right">
                <el-button type="danger" style="float: left;width: 165px;height: 42px" @click="buyCar">立即购买</el-button>
                <el-button type="danger" style="float: left;width: 165px;height: 42px" @click="addCar">加入购物车</el-button>
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
    name: "Details",
    components: {
      'vheader': Header
    },
    data() {
      return {
        goods: {},
        selectedOptions: [],
        value1: [this.GetDateStr(2),this.GetDateStr(32)],
        afterTime: '',
        pickerOptions: {
          disabledDate: (time) => {
            // 设置可选择的日期为第二天之后
            const curDate = (new Date()).getTime()
            // 这里算出一天的毫秒数
            const day = 24 * 3600 * 1000
            const dateRegion = curDate + day
            return time.getTime() < dateRegion
          }
        },
        options: [{
          value: '背景',
          label: '北京',
        }, {
          value: '上海',
          label: '上海',
        }, {
          value: '江苏',
          label: '江苏',
          children: [{
            value: '南京',
            label: '南京',
          }, {
            value: '无锡',
            label: '无锡',
          }, {
            value: '常州',
            label: '常州',
          }, {
            value: '苏州',
            label: '苏州',
          }, {
            value: '南通',
            label: '南通',
          }, {
            value: '扬州',
            label: '扬州',
          }, {
            value: '镇江',
            label: '镇江',
          },
          ]
        }, {
          value: '浙江',
          label: '浙江',
          children: [{
            value: '杭州',
            label: '杭州',
          }, {
            value: '宁波',
            label: '宁波',
          }, {
            value: '嘉兴',
            label: '嘉兴',
          }, {
            value: '金华',
            label: '金华',
          },
          ]
        }, {
          value: '安徽',
          label: '安徽',
          children: [{
            value: '合肥',
            label: '合肥',
          }, {
            value: '芜湖',
            label: '芜湖',
          }]
        },
        ],
        tempCar: {
          id: '',
          userName: '',
          goodsId: '',
          goodsName: '',
          price: '',
          firstDate: '',
          lastDate: '',
          adress: '',
          number: '1',
          total: '',
          totalPrice: '',
          createDate: '',
          updateDate: '',
          isDeleted: ''
        }
      }
    },
    created() {
      this.goods = this.getGoods()
      this.afterTime = this.GetDateStr(2)
    },
    methods: {
      user() {
        return this.$store.state.user
      },
      getGoods() {
        return this.$store.state.tempGoods
      },
      handleChange(value) {
        console.log(value)
      },
      addCar() {
        var adr = ''
        for (let i = 0; i < this.selectedOptions.length; i++) {
          adr += this.selectedOptions[i]
        }
        this.tempCar.adress = adr
        this.tempCar.firstDate = this.value1[0]
        this.tempCar.lastDate = this.value1[1]
        this.tempCar.goodsId = this.goods.id
        this.tempCar.goodsName = this.goods.goodsName
        this.tempCar.price = this.goods.price


        this.tempCar.userName = this.user()
        var car = this.tempCar
        this.$axios.post('/car/insert',
          JSON.stringify(car),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.tempCar=response.data
          alert("已加入购物车")
        }).catch((error) => {
          console.log("error")
        })
      },
      GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth() + 1;//获取当前月份的日期
        var d = dd.getDate();
        return y + "-" + m + "-" + d;
      },
      buyCar(){
        this.addCar()
        this.$store.dispatch('saveCar', this.tempCar).then(() => {
        this.$router.replace("/Order")
      })
      }

    }
  }
</script>

<style>
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

  .commodity-biaoqian {
    width: 100%;
    height: 94px;
  }

  .commodity-biaoqian-top {
    width: 1200px;
    height: 49px;
    margin: auto;
    border-bottom: 1px solid #b9b9b9;
  }

  .commodity-all-name {
    line-height: 49px;
    color: #405aa8;
    font-size: 14px;
    font-weight: 600;
    float: left;
  }

  .details-gname {
    color: #b9b9b9;
    line-height: 49px;
    font-size: 14px;
  }

  .details-main {
    width: 1200px;
    height: 600px;
    margin: auto;
    padding: 0
  }

  .details-main-left {
    width: 930px;
    /*height: 563px;*/
    float: left;
    padding-top: 53px;
  }

  .details-pictures {
    width: 500px;
    /*height: 548px;*/
    margin-top: 25px;
    float: left;
  }

  .image {
    width: 450px;
    height: 450px;
    margin: auto;
    display: block;
  }

  .details-into {
    width: 408px;
    height: 500px;
    float: left;
    margin-left: 15px;
  }

  .details-into-top {
    width: 408px;
    height: 93px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e2e2e2;
  }

  .timtle {
    color: #0067b4;
    font-size: 30px;
    display: block;
    margin-bottom: 2px;
  }

  .timtle-jj {
    color: #616161;
    height: 50px;
    overflow: hidden;
    display: block;
    line-height: 23px;
    font-size: 13px;
  }

  .role-price {
    border-bottom: 2px solid #b9b9b9;
    height: 48px;
    line-height: 48px;
    font-size: 13px;
    color: #616161;
  }

  #data-price {
    font-style: normal;
    font-size: 22px;
    color: #e6001f;
  }

  .role-ml {
    margin-left: 32px;
  }

  .role-sum {
    width: 408px;
    /*height: 400px;*/
  }

  .details-choice {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 13px;
    color: #616161;
  }

  .details-choice-date {
    width: 408px;
    height: 48px;
    margin-top: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e2e2e2;
    font-size: 13px;
    color: #616161;
  }

  .el-cascader {
    width: 200px;
    height: 32px;
    /*font-size: 14px;*/
  }

  .jishu .el-input__inner {
    width: 100%;
    height: 32px;
  }

  .block1 .el-input__inner {
    width: 340px;
    height: 40px;
  }

  .block1 {
    float: left;
  }

  .car-main-pay {
    width: 100%;
    height: 50px;
    padding-top: 15px;
    padding-bottom: 10px;
    /*margin-top: 20px;*/
    background-color: #e6e6e6;
  }

  .car-pay {
    width: 1200px;
    height: 50px;
    margin: auto;
    background-color: #e6e6e6;
    /*padding-top: 15px;*/
    /*padding-bottom: 10px;*/
    /*margin-top: 20px;*/
  }
  .car-pay-text{
    float: left;
    line-height: 50px;
    font-size: 14px;
  }
  .car-details{
    width: 1200px;
    height: 40px;
    margin: auto;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .car-details-font{
    color: #405aa8;
    font-size: 20px;
    padding-left: 18px;
    padding-right: 18px;
    border-right: 1px solid #e2e2e2;
  }

</style>
