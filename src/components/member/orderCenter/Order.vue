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
            @click="handleEdit(scope.$index, scope.row)">明细
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">退订
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--退订弹窗-->
    <el-dialog
      title="提示"
      :visible.sync="delVisible"
      :modal-append-to-body="false"
      width="300px" center>
      <div class="del-dialog-cnt">退订需进行审核，是否确定退订？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateOrderStatus">确 定</el-button>
        </span>
    </el-dialog>

    <!-- 订单明细 -->
    <el-dialog title="明细"
               :visible.sync="isShowEditVisible"
               :modal-append-to-body="false"
               width="60%">
      <el-table
        :data="orderProducts"
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowEditVisible = false">取消</el-button>
        <el-button type="primary"  @click="isShowEditVisible = false" class="title1">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "Order",
      data() {
        return {
          isShowEditVisible:false,
          delVisible:false,
          orderInfo:[],
          orderProducts:[],
          info:{},
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
          this.orderInfoDto.user=this.user()
          this.orderInfoDto.orderStatus='10'
          this.$axios.post('/order/queryOrderInfo',
            JSON.stringify(this.orderInfoDto),
            {headers: {'Content-Type': 'application/json'}}
          ).then((response) => {
            this.orderInfo = response.data
          }).catch((error) => {
            console.log("error")
          })
        },
        queryOrderProduct(row) {
          var orderNumber=row.orderNumber
          this.$axios.post('/order/queryOrderProduct',
            orderNumber,
            {headers: {'Content-Type': 'application/json'}}
          ).then((response) => {
            this.orderProducts = response.data
          }).catch((error) => {
            console.log("error")
          })
        },
        user(){
          return this.$store.state.user
        },
        handleDelete(index, row) {
          this.delVisible = true;//显示删除弹框
          this.info=row
          this.info.orderStatus='30'
        },
        handleEdit(index, row) {
          debugger
          this.queryOrderProduct(row)
          this.isShowEditVisible = true;//显示明细弹框
        },
        updateOrderStatus(){
          this.delVisible=false
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
