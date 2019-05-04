<template>
  <div class="all-order">
    <el-table
      :data="orderInfo"
      style="width: 100%">
      <el-table-column
        prop="orderNumber"
        label="订单号"
        width="210"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="itemCount"
        label="商品数"
        width="113"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="下单时间"
        width="260"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="订单金额"
        width="170"
        align='center'>
      </el-table-column>
      <el-table-column
        label="操作"
        width="200"
        align='center'>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">退订
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Order",
    data() {
      return {
        orderInfo:[],
        orderInfoDto:{
          user:'',
          orderStatus:''
        }
      }
    },
    created() {
      this.queryOrderInfo()
    },
    methods: {
      queryOrderInfo() {
        debugger
        this.orderInfoDto.user=this.user()
        this.orderInfoDto.orderStatus='40'
        this.$axios.post('/order/queryOrderInfo',
          JSON.stringify(this.orderInfoDto),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.orderInfo = response.data
        }).catch((error) => {
          console.log("error")
        })
      },
      user(){
        return this.$store.state.user
      },
    }
  }
</script>

<style scoped>
  .all-order{
    width: 960px;
    height: 800px;
    font-size: 16px;
    color: #535252;
  }
</style>
