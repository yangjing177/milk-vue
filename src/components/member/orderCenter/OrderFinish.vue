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
            @click="handleGet(scope.$index, scope.row)">明细
          </el-button>
          <!--<el-button-->
            <!--size="mini"-->
            <!--type="primary"-->
            <!--@click="saveComment()">评价-->
          <!--</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <!--评价弹窗-->
    <el-dialog title="评价"
               :visible.sync="isShowEditVisible"
               :modal-append-to-body="false">
      <span>商品评价:</span>
      <el-input type="textarea" v-model="comments.comment" placeholder="请输入商品评价"></el-input>
      <span>满意度：</span>
      <el-rate
        v-model="comments.evaluate"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowEditVisible = false">取消</el-button>
        <el-button type="primary"  @click="insertComment" class="title1">确定</el-button>
      </div>
    </el-dialog>

    <!-- 订单明细 -->
    <el-dialog title="明细"
               :visible.sync="isShowGetVisible"
               :modal-append-to-body="false"
               width="65%">
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
        <el-table-column
          label="操作"
          width="100"
          align='center'>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="saveComment(scope.$index, scope.row)">评价
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowGetVisible = false">取消</el-button>
        <el-button type="primary"  @click="isShowGetVisible = false" class="title1">确定</el-button>
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
        isShowGetVisible:false,
        orderInfo:[],
        orderProducts:[],
        orderInfoDto:{
          user:'',
          orderStatus:''
        },
        comments:{
          id:'',
          userId:'',
          userName:'',
          goodsId:'',
          comment:'',
          evaluate:'',
          commentStatus:'1',
          createDate:'',
          isDeleted:'0'
        }
      }
    },
    created() {
      this.queryOrderInfo()
    },
    methods: {
      queryOrderInfo() {
        this.orderInfoDto.user=this.user()
        this.orderInfoDto.orderStatus='20'
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
      //新增评价
      insertComment() {
        this.comments.userName=this.user()
        this.$axios.post('/comment/insert',
          JSON.stringify(this.comments),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          this.isShowEditVisible = false
          this.comments.comment=''
          this.comments.evaluate=''
          alert("评价成功！")
        }).catch((error) => {
          console.log("error")
        })
      },
      user(){
        return this.$store.state.user
      },
      handleGet(index, row) {
        debugger
        this.queryOrderProduct(row)
        this.isShowGetVisible = true;//显示明细弹框
      },
      saveComment(index, row){
        this.comments.goodsId=row.goodsId
        this.isShowEditVisible = true
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
