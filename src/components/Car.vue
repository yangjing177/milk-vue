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
              <span class="huan-login">购物车</span>
            </div>
          </div>
        </el-header>
        <!--<hr style="width:100%;border: 1px solid black;margin-top: 30px"/>-->
        <div style="width:100%;border-top: 1px solid  #CCCCCC;transform: scaleY(1);margin-top: 50px"></div>

        <el-main style="background-color: #F5F5F5;">
          <div class="table-list">
            <el-button @click="delAll()" size="mini" style="margin-bottom: 20px">批量删除</el-button>
            <el-table
              ref="multipleTable"
              :data="carList"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="56">
              </el-table-column>
              <el-table-column
                prop="goodsName"
                label="商品名称"
                width="266"
                align='center'>
              </el-table-column>
              <el-table-column
                prop="price"
                label="单价/元"
                width="87">
              </el-table-column>
              <el-table-column
                label="订奶时间"
                width="269">
                <template slot-scope="scope">
                  <p>从{{scope.row.firstDate}}到{{scope.row.lastDate}}</p>
                  <el-button type="text" @click="updateVisible(scope.row)" class="updateCarDate">修改</el-button>
                </template>
              </el-table-column>
              <!--<el-table-column-->
              <!--prop="goodsName"-->
              <!--label="配送方"-->
              <!--width="150">-->
              <!--</el-table-column>-->
              <el-table-column
                label="每次配送"
                width="172">
                <template slot-scope="scope">
                  <el-input-number v-model="scope.row.number" size="small" @change="handleChange(scope.row)" :min="1"
                                   :max="10" class="jishu"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column
                prop="total"
                label="总数量"
                width="83">
              </el-table-column>
              <el-table-column
                label="总计"
                width="87">
                <template slot-scope="scope">
                  <span>￥{{scope.row.totalPrice}}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width="180">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>

            <div class="car-pay" v-if="carList!=null&&carList!=''">
              <div style="float: right">
                <span style="font-size: 14px;float: left;line-height: 42px">
                  合计金额：
                </span>
                <span style="font-size: 30px;float: left;color: red">￥{{totalMoney}}&nbsp;&nbsp;&nbsp;</span>
                <el-button  type="danger" style="float: left;width: 165px;height: 42px" @click="jumpOrder">去结算</el-button>
              </div>
            </div>
          </div>
        </el-main>

      </el-container>

      //日期修改弹框
      <el-dialog title="修改配送日期" :visible.sync="dialogTableVisible " :modal-append-to-body="false">
        <el-form :model="temp">
          <el-form-item label="选择日期">
            <div class="block">
              <el-date-picker
                v-model="temp.firstDate"
                type="date"
                placeholder="起送时间"
                value-format="yyyy-MM-dd" format="yyyy-MM-dd">
              </el-date-picker>
            </div>
            <div class="block">&nbsp;&nbsp;-&nbsp;&nbsp;</div>
            <div class="block">
              <el-date-picker
                v-model="temp.lastDate"
                type="date"
                placeholder="终止时间"
                value-format="yyyy-MM-dd" format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible  = false">取 消</el-button>
          <el-button type="primary" @click="updateCarDate()">确 定</el-button>
        </div>
      </el-dialog>

      //删除弹框
      <el-dialog
        title="提示"
        :visible.sync="delVisible"
        :modal-append-to-body="false"
        width="300px" center>
        <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
        <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteCar">确 定</el-button>
        </span>
      </el-dialog>


    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "car",
    components: {
      'vheader': Header
    },
    data() {
      return {
        carList: [],
        dialogTableVisible: false,
        delVisible:false,
        multipleSelection: [],
        ids: [],
        totalMoney:0,
        temp: {
          id: '',
          userName: '',
          goodsId: '',
          goodsName: '',
          price: '',
          firstDate: '',
          lastDate: '',
          address: '',
          number: '',
          total: '',
          totalPrice: '',
          createDate: '',
          updateDate: '',
          isDeleted: ''
        }
      }
    },
    created() {
      this.fetchCarData()
      // this.multipleSelection=this.getCar()
    },
    methods: {
      fetchCarData() {
        const user=this.user()
        this.$axios.post('/car/list',
          user,
          {headers: {'Content-Type': 'application/json'}}
          ).then((response) => {
          this.carList = response.data
          // this.datafomat()
        }).catch((error) => {
          console.log("error")
        })
      },
      // datafomat(){
      //   const length = this.carList.length;
      //   var totalPrice=0
      //   for (let i = 0; i < length; i++) {
      //     totalPrice=this.carList[i].totalPrice.toFixed(2)
      //     this.carList.totalPrice=totalPrice
      //   }
      // },
      //修改购物车
      updateData(row) {
        this.$axios.post('/car/update',
          JSON.stringify(row),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.fetchCarData()
          this.getTotalMoney()
        }).catch((error) => {
          console.log("error")
        })
      },
      //修改配送日期
      updateCarDate() {
        const tempData = Object.assign({}, this.temp)
        this.dialogTableVisible = false
        this.$axios.post('/car/update',
          JSON.stringify(tempData),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.fetchCarData();
        }).catch((error) => {
          console.log("error")
        })
      },
      //购物车删除
      deleteCar(){
        this.delVisible=false
        this.$axios.post('/car/delAll',
          JSON.stringify(this.ids),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.fetchCarData();
        }).catch((error) => {
          console.log("error")
        })
      },

      updateVisible(row) {
        this.temp = Object.assign({}, row)
        this.dialogTableVisible = true
      },
      //批量删除
      delAll() {
        this.delVisible = true;//显示删除弹框
        const length = this.multipleSelection.length;
        for (let i = 0; i < length; i++) {
          this.ids.push(this.multipleSelection[i].id)
        }
      },
      //根据购物车id删除
      handleDelete(index, row) {
        this.delVisible = true;//显示删除弹框
          this.ids.push(row.id)
      },
      // 计数器
      handleChange(row) {
        this.updateData(row);
      },
      //全选
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //操作多选
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.getTotalMoney()
      },
      //锁定用户
      user(){
        return this.$store.state.user
      },
      //获取购物车
      getCar() {
        return this.$store.state.tempCar
      },
      //结算
      getTotalMoney() {
        // 商品总价首先置0，判断选中后，再计入总价
        const length = this.multipleSelection.length;
        var n=0
        var total=0
        for (let i = 0; i < length; i++) {
          n=this.multipleSelection[i].totalPrice
          total += n
        }
        this.totalMoney = total.toFixed(2);
      },
      jumpOrder(){
        this.$store.dispatch('saveCar', this.multipleSelection).then(() => {
          this.$router.replace("/OrderDetails")
        })
      }
    },


    // computed:{
    //   totalPrices: function () {
    //     var length = this.carList.length;
    //     var prices=0;
    //     for (let i = 0; i < length; i++) {
    //       prices +=this.carList[i].totalPrices()
    //       this.ids.push(this.multipleSelection[i].id)
    //     }
    //     return this.calList + ' ' + this.lastName
    //   }
    // }
  }
</script>

<style scoped>
  .HelloWorld {
    position: relative;
    height: 100%;
    /*//高度根据需求自行设定*/
  }

  .child {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /*//left,top,right,*/
    /*bottom都为0，充满真个页面*/
    overflow-y: auto;
    overflow-x: hidden;
    /*//设置Y轴出现滚动条，X轴隐藏*/
  }
  .header-into{
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

  .table-list {
    width: 1200px;
    margin: auto;
    padding: 0
  }

  .jishu .el-input__inner {
    width: 100%;
  }

  .block .el-input__inner {
    width: 100%;
    height: 40px;
  }

  .block {
    float: left;
  }

  .updateCarDate {
    padding: 0px;
  }
  .car-pay{
    width: 1200px;
    height: 46px;
    margin: auto;
    background-color: #e6e6e6;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-top: 20px;
  }

</style>
