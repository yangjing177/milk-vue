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
              <span class="huan-login">订单详情</span>
            </div>
          </div>
        </el-header>
        <!--<hr style="width:100%;border: 1px solid black;margin-top: 30px"/>-->
        <div style="width:100%;border-top: 1px solid  #CCCCCC;transform: scaleY(1);margin-top: 50px"></div>
        <el-main style="background-color: #F5F5F5;padding: 0">
          <div class="order-main-top">
            <div class="order-adress">
              <h3 style="color: #535252;font-size: 16px;">收货信息</h3>
              <div style="color: #535252;font-size: 13px;">默认地址：</div>
              <div class="adress-default" v-if="true">
                {{defaultAddress.userName}}&nbsp;&nbsp;&nbsp;{{defaultAddress.census}}&nbsp;&nbsp;{{defaultAddress.address}}&nbsp;&nbsp;{{defaultAddress.mobile}}
              </div>
              <div class="adress-default">
                <el-button type="text" @click="updateSeeMore" style="color: #3f5aa7">点击查看更多</el-button>
                <el-button type="text" @click="updateAddAddress" style="margin-left: 30px;color: #535252;">添加新地址
                </el-button>
              </div>
              <div class="adress-default" v-if="seeMore" v-for="adr in address">
                {{adr.userName}}&nbsp;&nbsp;&nbsp;{{adr.census}}&nbsp;&nbsp;{{adr.address}}&nbsp;&nbsp;{{adr.mobile}}&nbsp;&nbsp;
                <el-button type="text" @click="updateEdit(adr)" style="color: #3f5aa7">编辑</el-button>&nbsp;&nbsp;
                <el-button type="text" @click="" style="color: #3f5aa7">删除</el-button>
              </div>

            </div>
          </div>

          <div class="order-main-middle">
            <div class="order-middle-style">
              <h3 style="color: #535252;font-size: 16px;">付款方式</h3>
              <div class="order-beixuan">
                <el-checkbox v-model="payMethod"
                             style="color: #535252;font-size: 14px;font-weight: bold;margin-right: 10px">在线支付
                </el-checkbox>
                <span style="color: #535252;font-size: 13px;">支持使用支付宝支付、大多数银行借记卡及信用卡支付。</span>
              </div>
            </div>
          </div>

          <div class="order-main-middle">
            <div class="order-middle-style">
              <h3 style="color: #535252;font-size: 16px;">是否安装奶箱</h3>
              <div class="order-beixuan">
                <el-radio v-model="orderInfo.box" label="0" style="color: #535252;font-size: 14px;">是的，我需要安装奶箱</el-radio>
                <el-radio v-model="orderInfo.box" label="1" style="color: #535252;font-size: 14px;">不，我不需要安装奶箱</el-radio>
              </div>
            </div>
          </div>

          <div class="order-main-middle">
            <div class="order-middle-style">
              <h3 style="color: #535252;font-size: 16px;">商品清单</h3>
              <div style="width: 1100px;margin: auto;">
                <el-table
                  :data="car"
                  style="width: 100%">
                  <el-table-column
                    prop="goodsName"
                    label="商品名称"
                    width="310"
                    align='center'>
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价/元"
                    width="113"
                    align='center'>
                  </el-table-column>
                  <el-table-column
                    label="订奶时间"
                    width="260"
                    align='center'>
                    <template slot-scope="scope">
                      <p>从{{scope.row.firstDate}}到{{scope.row.lastDate}}</p>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="每次配送"
                    width="170"
                    align='center'>
                  </el-table-column>
                  <el-table-column
                    prop="total"
                    label="总数量"
                    width="83"
                    align='center'>
                  </el-table-column>
                  <el-table-column
                    label="总计"
                    width="164"
                    align='center'>
                    <template slot-scope="scope">
                      <span>￥{{scope.row.totalPrice}}</span>
                    </template>
                  </el-table-column>
                </el-table>
                <div style="width: 1100px;margin-top: 20px">
                  <el-button type="text" @click="jumpCar" style="color: #e50014">返回购物车修改</el-button>
                  <div style="float: right;font-size: 14px;color: #535252;">共计<span  class="order-pay">{{length}}</span>份商品&nbsp;合计金额：<span  class="order-pay">￥{{totalMoney}}</span></div>
                </div>
              </div>
            </div>
          </div>

        </el-main>
        <el-main style="margin: 0;padding-top: 15px;padding-bottom: 10px;background-color: #e6e6e6;">
          <div class="order-pay-btn">
            <div class="order-pay-into">
              <span class="order-pay-shop">商品金额：<span class="order-pay">￥{{totalMoney}}</span>,运费：<span class="order-pay">￥0.0</span>,红包抵扣金额：<span  class="order-pay">￥0.0</span></span>
              <p class="order-pay-shop">地址：{{defaultAddress.census}}{{defaultAddress.address}}</p>
            </div>
            <div class="order-pay-price">
              <div class="order-price-left">
                实付金额：<span style="color: red">￥</span><span style="color: #e50014;font-size: 24px">{{totalMoney}}</span>
              </div>
              <el-button  type="danger" style="float: right;width: 165px;height: 42px" @click="saveOrder">确认支付</el-button>
              <!--<div class="order-price-right"></div>-->
            </div>
          </div>
        </el-main>

      </el-container>

      <el-dialog
        title="修改地址"
        :visible.sync="editVisible"
        :modal-append-to-body="false"
        width="500px" center>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="true"
                 label-position="left">

          <el-form-item label="收件人姓名:" prop="userName">
            <el-input v-model="ruleForm.userName"></el-input>
          </el-form-item>

          <el-form-item label="所在地区:" prop="census">
            <el-input v-model="ruleForm.census"></el-input>
          </el-form-item>

          <el-form-item label="详细地址:" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>

          <el-form-item label="手机号码:" prop="mobile">
            <el-input v-model="ruleForm.mobile"></el-input>
          </el-form-item>

          <el-form-item label="邮编:" prop="postCode">
            <el-input v-model="ruleForm.postCode"></el-input>
          </el-form-item>

          <el-checkbox-group v-model="ruleForm.defaultAddress">
            <el-checkbox label="设置为默认收货地址" name="defaultAddress"></el-checkbox>
          </el-checkbox-group>

        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateAddress">确 定</el-button>
        </span>

      </el-dialog>
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
      this.car = this.getCar()
      this.findAdressData()
      this.getTotalMoney()
    },
    data() {
      return {
        car: [],
        length:0,
        totalMoney:0,
        more: false,
        order: [],
        address: [],
        insertAddress: false,
        defaultAddress: {},
        seeMore: false,
        addAddress: false,
        // edit:false,
        seeForm: false,
        editVisible: false,
        tempAddress: {},
        payMethod: true,
        milkBox: '2',
        ruleForm: {
          userName: '',
          census: '',
          address: '',
          mobile: '',
          postCode: '',
          defaultAddress: false
        },
        rules: {
          userName: [
            {required: true, message: '请输入收件人姓名', trigger: 'blur'},
          ],
          census: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          address: [
            {required: true, message: '请选择日期', trigger: 'change'}
          ],
          mobile: [
            {required: true, message: '请选择时间', trigger: 'change'}
          ],
          postCode: [
            {required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
        },
        orderInfo:{
          id:'',
          orderNumber:'',
          itemCount:'',
          userName:'',
          box:'1',
          totalPrice:'',
          orderStatus:'配送中',
          createDate:'',
          updateDate:'',
          isDeleted:'0'
        },

      }
    },
    methods: {
      findAdressData() {
        const user = this.user()
        this.$axios.post('/address/list',
          user,
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.address = response.data
          this.getDefaultAdr()
        }).catch((error) => {
          console.log("error")
        })
      },
      getCar() {
        return this.$store.state.tempCar
      },
      //锁定用户
      user() {
        return this.$store.state.user
      },
      //获取默认地址
      getDefaultAdr() {
        var adr = this.address
        for (let i = 0; i < adr.length; i++) {
          if (adr[i].defaultAddress == 0) {
            this.defaultAddress = adr[i]
          }
        }
      },
      updateSeeMore() {
        this.seeMore = !this.seeMore
      },
      updateAddAddress() {
        this.addAddress = !this.addAddress
      },
      updateEdit(adr) {
        // this.edit=!this.edit
        this.ruleForm = Object.assign({}, adr)
        this.editVisible = true
      },
      updateAddress() {
        this.editVisible = false
        if (this.ruleForm.defaultAddress == false) {
          this.ruleForm.defaultAddress = 1
        }
        else {
          this.ruleForm.defaultAddress = 0
        }
        console.log(this.ruleForm)
        console.log(this.ruleForm)
        this.$axios.post('/address/update',
          JSON.stringify(this.ruleForm),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.findAdressData();
        }).catch((error) => {
          console.log("error")
        })
      },
      //计算总价
      getTotalMoney() {
        // 商品总价首先置0，判断选中后，再计入总价
        const length = this.car.length;
        this.length=length
        var n=0
        var total=0
        for (let i = 0; i < length; i++) {
          n=this.car[i].totalPrice
          total += n
        }
        this.totalMoney = total.toFixed(2);
      },
      jumpCar(){
        this.$store.dispatch('saveCar', this.car).then(() => {
          this.$router.replace("/Car")
        })
      },
      saveOrder(){
        this.orderInfo.itemCount=this.car.length
        this.orderInfo.userName=this.user()
        this.orderInfo.totalPrice=this.totalMoney
        this.$axios.post('/order/insert',
          this.orderInfo,this.car,
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {

        }).catch((error) => {
          console.log("error")
        })
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

  .order-main-top {
    width: 1200px;
    /*height: 105px;*/
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #FFF;
    border: 1px solid #e8e8e8;
    margin: auto;
    margin-bottom: 30px;
  }

  .order-main-middle {
    width: 1200px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #FFF;
    border: 1px solid #e8e8e8;
    margin: auto;
    margin-bottom: 30px;
  }

  .order-middle-style {
    width: 1100px;
    margin: auto;
  }

  .order-adress {
    width: 1100px;
    /*height: 105px;*/
    margin: auto;
  }

  .adress-default {
    margin-left: 25px;
    margin-top: 5px;
    font-size: 13px;
    color: #979997;
  }

  .order-beixuan {
    width: 1100px;
    height: 30px;
    margin-top: 5px;
  }
  .order-pay-btn{
    width: 1200px;
    height: 54px;
    margin: auto;
  }
  .order-pay-into{
    margin-left: 10px;
    width: 400px;
    height: 54px;
    float: left;
  }
  .order-pay-price{
    margin-right: 10px;
    float: right;
    width: 355px;
    height: 46px;
  }
  .order-price-left{
    height: 48px;
    float: left;
    line-height: 42px;
    font-size: 14px;
    color: #737272;
  }
  .order-pay-shop{
    font-size: 14px;
    color: #737272;
  }
  .order-pay{
    color: #e50014;
  }
</style>
