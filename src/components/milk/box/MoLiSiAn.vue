<template>
  <div class="all-goods">
    <div class="goods-hops">
      <div class="hot-title"><span style="float: left">热销商品</span></div>
      <div class="hot-list">

        <el-row >
          <el-col :span="4" v-for="(project, index) in hotgoods" :key="index" :offset="index > 0 ? 2:0">
            <el-card :body-style="{ padding: '0px' }" style="width: 222px;height: 292px" shadow="hover">
              <img :src=project.pic class="image">
              <div class="goods-introduce">{{project.goodsName}}</div>
              <div class="goods-price">随心订价：￥{{project.price}}</div>
              <div class="bottom">
                <el-button type="danger" size="small" style="" @click="jumpDetails(project)"><svg-icon icon-class="shoppingCard"/> 立即购买</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>

      </div>
    </div>

    <!--商品筛选-->
    <div class="goods-screen">
      <div class="hot-title"><span style="float: left">商品筛选</span></div>
      <div class="ul-screen clearfix">
        <div class="clearfix"><span><label class="f2">类型</label> <div class="screen-list"><a v-for="(types,index) in typeList"  href="#" :class="(selected.type===types)?'active':'not-active'"  @click="typechange(types)">{{types}}</a> </div></span></div>
        <div class="clearfix"><span><label class="f2">包装</label> <div class="screen-list"><a v-for="(packager,index) in packagerList" href="#" :class="(selected.packager===packager)?'active':'not-active'"  @click="packagerchange(packager)" >{{packager}}</a></div> </span></div>
        <div class="clearfix"><span><label class="f2">种类</label> <a v-for="(size,index) in sizeList" href="#" :class="(selected.size===size)?'active':'not-active'"  @click="sizechange(size)" >{{size}}</a> </span></div>
      </div>
    </div>

    <!--商品列表-->
    <div class="sort-goodslist">
      <!--<div class="sort-header">-->
      <!--<span>排序</span>-->
      <!--<span>销量</span>-->
      <!--<span>价格</span>-->
      <!--<span>容量</span>-->
      <!--</div>-->

      <div>

        <el-row >
          <el-col :span="4" v-for="(project, index) in goods" :key="index" :offset="index%4 > 0 ? 2:0" style="margin-bottom: 10px">
            <el-card :body-style="{ padding: '0px' }" style="width: 222px;height: 292px" shadow="hover">
              <img :src="project.pic" class="image">
              <div class="goods-introduce">{{project.goodsName}}</div>
              <div class="goods-price">随心订价：￥{{project.price}}</div>
              <div class="bottom">
                <el-button type="danger" size="small" style="" @click="jumpDetails(project)"><svg-icon icon-class="shoppingCard"/> 立即购买</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-pagination layout="total, prev, pager, next"
                       background
                       :page-size="8"
                       @size-change="handleSizeChange"
                       :total="total"
                       @current-change="handleCurrentChange"
                       style="text-align:center;">
        </el-pagination>

      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "FreshMilk",
    data(){
      return{
        total: 0,
        page: 1,
        pageSize: 8,
        hotgoods:[
          {
            pic: require("../../../image/hotshop1.png"),
            goodsName: '优倍高品质鲜牛奶新鲜杯200ml',
            price: '5.6'
          },
          {
            pic: require("../../../image/hotshop2.png"),
            goodsName: '畅优原味风味发酵乳200g',
            price: '4.8'
          }
        ],
        goods:[],
        typeList:['不限','牛奶','酸奶','配方奶粉'],
        packagerList:['不限','组','袋','盒','杯','瓶','罐'],
        sizeList:['不限','小于299','300至499','大于500'],
        selected:{
          parentType:'经典礼盒',
          brand:'莫斯利安',
          type:'不限',
          packager:'不限',
          size:'不限'
        }
      }
    },
    created() {
      this.fetchData()
    },
    methods:{
      fetchData() {
        debugger
        console.log(this.selected);
        // console.log(JSON.stringify(this.selected))
        this.$axios.post('/goods/list',JSON.stringify(this.selected),
          {headers: {'Content-Type': 'application/json'}}
        ).then((response) => {
          const limit = 8
          const pageList = response.data.filter((item, index) => index < limit * this.page && index >= limit * (this.page - 1))
          console.log(pageList)
          this.total = response.data.length
          this.goods = pageList
          // this.listLoading = false
        }).catch((error) =>{
          console.log("error")
        })
      },
      handleSizeChange(val) {
        debugger
        this.page = val
        console.log(this.page)
        this.fetchData()
      },
      handleCurrentChange(val) {
        debugger
        this.page = val
        console.log(this.page)
        this.fetchData()
      },

      typechange(input){
        if(!input) return false;
        if(input !== this.selected.type)
        {
          this.selected.type = input;
        }
        this.fetchData()
      },
      packagerchange(input){
        if(!input) return false;
        if(input !== this.selected.packger)
        {
          this.selected.packger = input;
        }
        this.fetchData()
      },
      sizechange(input){
        if(!input) return false;
        if(input !== this.selected.size)
        {
          this.selected.size = input;
        }
        this.fetchData()
      },
      //跳转到商品详情页
      jumpDetails(project){
        this.$store.dispatch('saveGoods', project).then(() => {
          this.$router.replace("/Details")
        })
      }
    }
  }
</script>

<style scoped>
  .all-goods{
    width: 960px;
    height: 1308px;
    font-size: 16px;
    color: #535252;
  }
  .goods-hops{
    width: 960px;
    height: 333px;
  }
  .hot-title{
    width: 960px;
    height: 21px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #535252;
  }

  .bottom {
    width: 220px;
    height: 29px;
    text-align:center;
  }

  .button{
    width: 123px;
    height: 29px;
    /*padding: 0px;*/
    color: white;
    background-color: red;
  }

  .image {
    width: 200px;
    height: 200px;
    margin: auto;
    display: block;
  }

  .goods-introduce{
    width: 220px;
    height: 21px;
    text-align:center;
    color: #4e64ac;
    font-size: 16px;
    font-weight: 100;
    white-space: nowrap;  /*文本强制不换行*/
    text-overflow:ellipsis;  /*文本溢出显示省略号*/
    overflow:hidden;  /*溢出的部分隐藏*/
  }
  .goods-price{
    width: 220px;
    height: 17px;
    margin-bottom: 8px;
    text-align:center;
    font-size: 13px;
    color: #ababab;
  }

  .goods-screen{
    width: 960px;
    height: 167px;
    margin-top: 35px;
  }
  ul, ol {
    list-style-type:none;
    padding: 0px;
    font-size: 13px;
  }
  .ul-screen {
    width: 100%;
    border: 1px solid #d4d4d4;

    height: 134px;
    line-height: 44px;
    font-size: 13px;
  }
  .ul-screen li {
    border-bottom: 1px dashed #deddde;
    height: 44px;
    line-height: 44px;
  }
  .f2 {
    float: left;
    width: 68px;
    display: block;
    text-align: center;
    color: #616161;
    background: #f5f4f4;
  }
  .ul-screen li label {
    width: 68px;
    display: block;
    text-align: center;
    float: left;
    color: #616161;
    background: #f5f4f4;
  }
  /*.ul-screen li .screen-title a {*/
  /*margin-left: 12px;*/
  /*}*/

  .clearfix {
    *zoom: 1;
  }

  .sort-goodslist{
    width: 960px;
    height: 738px;
  }
  .sort-header{
    width: 960px;
    height: 43px;
  }
  .screen-list{
    /*color: #616161;*/
    border-bottom: 1px dashed #deddde;
  }
  .active{
    color: #405aa8;
    text-decoration: underline;
    margin-left: 12px;
  }
  a:hover {
    text-decoration:underline;
    color: #3f5aa7;
  }
  .not-active{
    color: #616161;
    margin-left: 12px;
  }
</style>
