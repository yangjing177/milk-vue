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
            type="primary"
            @click="handleUpdate(scope.$index, scope.row)">恢复配送
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">退订
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--恢复配送弹窗-->
    <el-dialog
      title="提示"
      :visible.sync="updateVisible"
      :modal-append-to-body="false"
      width="300px" center>
      <div class="del-dialog-cnt">是否确定恢复配送？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="updateVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateOrderStatus">确 定</el-button>
        </span>
    </el-dialog>

    <!--退订弹窗-->
    <el-dialog
      title="提示"
      :visible.sync="delVisible"
      :modal-append-to-body="false"
      width="300px" center>
      <div class="del-dialog-cnt">退订需再次进入审核，是否确定退订？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateOrderStatus">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Order",
    data() {
      return {
        updateVisible:false,
        delVisible:false,
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
      handleDelete(index, row) {
        this.delVisible = true;//显示退订弹框
        this.info=row
        this.info.orderStatus='30'
      },
      handleUpdate(index, row) {
        this.updateVisible = true;//显示恢复配送弹框
        this.info=row
        this.info.orderStatus='10'
      },
      updateOrderStatus(){
        this.delVisible=false
        this.updateVisible=false
        this.$axios.post('/order/updateOrderStatus',
          JSON.stringify(this.info),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.queryOrderInfo();
        }).catch((error) => {
          console.log("error")
        })
      },
    }
  }
</script>

<style scoped>
  .all-order{
    width: 960px;
    /*height: 800px;*/
    font-size: 16px;
    color: #535252;
  }
</style>
