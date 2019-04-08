<template>
  <div class="all-goods">
    <div class="goods-hops">
    <div class="hot-title">热销商品</div>
      <div class="hot-list">

        <el-row>
          <el-col :span="4" v-for="(o, index) in 2" :key="0" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" style="width: 222px;height: 292px" shadow="hover">
              <img src="../../image/hotshop1.png" class="image">
              <div class="goods-introduce">优倍高新鲜杯200ml</div>
              <div class="goods-price">随心订价：￥5.6</div>
              <div class="bottom">
                <el-button type="danger" size="small" style=""><svg-icon icon-class="shoppingCard"/> 立即购买</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>

      </div>
    </div>

    <!--商品筛选-->
    <div class="goods-screen">
      <div class="hot-title">商品筛选</div>
      <ul class="ul-screen clearfix">
        <li class="clearfix">
          <label class="fl">种类</label>
          <div class="screen-title fl clearfix">
            <a href="javascript:serchByCondition('milktype','');">不限</a>
            <a href="javascript:serchByCondition('milktype','milk');">牛奶</a>
            <a href="javascript:serchByCondition('milktype','yoghourt');">酸奶</a>
            <a href="javascript:serchByCondition('milktype','More_MilkPowder');">配方奶粉</a>

          </div>
        </li>
        <li class="clearfix">
          <label class="fl">包装</label>
          <div class="screen-title fl clearfix">
            <a href="javascript:serchByCondition('package','');" class="currt">不限</a>


            <a href="javascript:serchByCondition('package','group');">组</a>
            <a href="javascript:serchByCondition('package','bag');">袋</a>
            <a href="javascript:serchByCondition('package','box');">盒</a>
            <a href="javascript:serchByCondition('package','cup');">杯</a>
            <a href="javascript:serchByCondition('package','bottle');">瓶</a>
            <a href="javascript:serchByCondition('package','can');">罐</a>
          </div>
        </li>
        <li class="none clearfix">
          <label class="fl">种类</label>
          <div class="screen-title fl clearfix">
            <a href="javascript:serchByCondition('weight','');" class="currt">不限</a>
            <a href="javascript:serchByCondition('weight','0to299');">小于299</a>
            <a href="javascript:serchByCondition('weight','300to499');">300至499</a>
            <a href="javascript:serchByCondition('weight','500to');">大于500</a>
          </div>
        </li>
      </ul>
    </div>

    <!--商品列表-->
    <div class="sort-goodslist">
      <div class="">

      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "FreshMilk"
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
}
.ul-screen li {
  border-bottom: 1px dashed #deddde;
  height: 44px;
  line-height: 44px;
}
.fl {
  float: left;
}
.ul-screen li label {
  width: 68px;
  display: block;
  text-align: center;
  float: left;
  color: #616161;
  background: #f5f4f4;
}
.currt {
  color: #405aa8;
  text-decoration: underline;
}
.ul-screen li .screen-title a {
  margin-left: 12px;
}

.clearfix {
  *zoom: 1;
}

  .sort-goodslist{
    width: 960px;
    height: 738px;
  }
</style>
