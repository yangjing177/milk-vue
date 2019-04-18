<template xmlns:img="http://www.w3.org/1999/html">
  <div class="HelloWorld">
    <div class="child">
    <el-container>
      <el-header class="header" style="padding: 0px">
        <vheader />
      </el-header>

      <el-header height="103px">
        <div class="header-into">
          <div class="header-left">
            <router-link to="/"><a href=""><img src='../image/logo.jpg'></a></router-link>
          </div>

          <div class="lu-nav fl clearfix">
            <div class="lu-navtit clearfix">
              <router-link to=""><a href="##"><span class="top-text">首&nbsp;&nbsp;页</span></a>&nbsp;&nbsp;&nbsp;&nbsp;|</router-link>
            </div>
            <div class="lu-navtit clearfix">
              <router-link to="/ZhiYou"><a href="ZhiYou.vue"><span class="top-text">新鲜牛奶</span></a></router-link>&nbsp;&nbsp;&nbsp;&nbsp;|
            </div>
            <div class="lu-navtit clearfix">
              <router-link to="BaiXue"><a href="BaiXue.vue"><span class="top-text">新鲜酸奶</span></a></router-link>&nbsp;&nbsp;&nbsp;&nbsp;|
            </div>
            <div class="lu-navtit clearfix">
              <router-link to="/YouBei"><a href="YouBei.vue"><span class="top-text">更多产品</span></a></router-link>&nbsp;&nbsp;&nbsp;&nbsp;|
            </div>
            <div class="lu-navtit clearfix">
              <router-link to="/NiuRu"><a href="NiuRu.vue"><span class="top-text">新品上市</span></a></router-link>&nbsp;&nbsp;&nbsp;&nbsp;|
            </div>
            <div class="lu-navtit clearfix">
              <router-link to=""><a href="##"><span class="top-text">销售排行</span></a></router-link>&nbsp;&nbsp;&nbsp;&nbsp;|
            </div>
            <!--<div class="lu-navtit clearfix">-->
              <!--<router-link to=""><a href=""><span class="top-text">众测首页</span></a></router-link>-->
            <!--</div>-->
          </div>

          <div class="seach-car fr clearfix">
            <div class="seach-box fl clearfix">
              <!--<i>&nbsp;</i>-->
              <form class="bs-docs-example form-search logo_navbar_middle_search" name="keywordsearchform" id="keywordsearchbox_keywordsearchform" method="get" action="/sxd/control/allprodsearch">
                <input type="hidden" name="milktype" value="">
                <input type="hidden" name="package" value="">
                <input type="hidden" name="weight" value="">
                <input type="hidden" name="SEARCH_CATEGORY_ID" value="">
                <input type="hidden" name="SEARCH_OPERATOR" value="OR">
                <input type="hidden" name="sortOrder" value="SortProductField%3AtotalQuantityOrdered">
                <input type="hidden" name="sortAscending" value="N">
                <input type="text" name="SEARCH_STRING" placeholder="热门搜索: 优倍 畅优">
                <a href="javascript:;" onclick="searchSubmit();">搜 索</a>
              </form>
            </div>
            <div class="add-cait fl clearfix">
              <router-link to="/Car">
                <a href="car.vue">
                  <div class="select-c">
                    <i>
                      <div class="CCNum1" style="display: block;" v-if="carCount!=0">{{carCount}}</div>
                    </i>
                    <svg-icon icon-class="shoppingCard"></svg-icon>
                    购物车
                  </div>
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </el-header>

      <el-main style="padding: 0px">
        <!--轮播图-->
      <el-carousel :interval="4000"  height="618px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <img :src="item.url"/>
        </el-carousel-item>
      </el-carousel>

        <!--图片展览-->
        <div class="show-daon into clearfix">
        <div class="img-daon fl">
          <a href="product?product_id=1320343071910">
            <img src="http://img.4008117117.com/attached/image/20171116/110555979938329266.png" width="525" height="574" alt="">
          </a>
        </div>

          <div class="imgt-sml fr clearfix">
            <div class="imgt-op clearfix">
              <img src="http://wx.4008117117.com/newapp/badmin/image/20171113/milk_bg.jpg" width="663" height="288">
            </div>


              <div class="col-md-12 no-padding-right fl">
                <div class="pic_r_b">
                  <ul>
                    <li class="fl">
                      <div class="shopping-car">
                        <img class="imglink" alt="/sxd/control/product?product_id=1320343071615" src="../image/右下1.jpg" width="221" height="206" onclick="registEventAndSource('查看具体产品','首页热销产品')">
                        <div class="txt" style="background:#5f64a1">
                          <p class="name">优倍—悦享高品生活</p>
                          <el-button class="car" size="mini" @click="insertCar(youbei)">加入购物车</el-button>
                        </div>
                      </div>
                    </li>
                    <li class="fl">
                      <a href="javascript:;" style="top: -2px;">
                        <img class="imglink" alt="/sxd/control/product?product_id=1320343071562" src="../image/右下2.jpg" width="221" height="206" onclick="registEventAndSource('查看具体产品','首页热销产品')">
                        <div class="txt add-car-bg1" style="background:#a07a58">
                          <p class="name">畅优酸奶 通畅一整天</p>
                          <el-button class="car" size="mini" @click="insertCar(changyou)">加入购物车</el-button>
                        </div>
                      </a>
                    </li>
                    <li class="fl">
                      <a href="javascript:;" style="top: -2px;">
                        <img class="imglink" alt="/sxd/control/product?product_id=1320343072400" src="../image/右下3.png" width="221" height="206" onclick="registEventAndSource('查看具体产品','首页热销产品')">
                        <div class="txt add-car-bg1" style="background:#e2803f">
                          <p class="name">赏味酪乳 犒赏自己~</p>
                          <el-button class="car" size="mini" @click="insertCar(cheese)">加入购物车</el-button>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
          </div>

        </div>
      </el-main>

      <el-footer>

      </el-footer>
    </el-container>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
export default {
  name: 'HelloWorld',
  components: {
    'vheader': Header
  },
  created(){
    this.findCarCount()
  },
  data() {
    return {
      showname:false, //判断是否已登陆
      carCount:0,
      imagesbox:[
        {id:0,url:require("../image/1.jpg")},
        {id:1,url:require("../image/2.jpg")},
        {id:2,url:require("../image/3.jpg")},
        {id:3,url:require("../image/4.jpg")},
        {id:4,url:require("../image/5.jpg")},
      ],
      youbei:{
        id: '',
        userName: '',
        goodsId: '4',
        goodsName: '优倍高品质鲜牛奶新鲜杯200ml',
        price: '5.6',
        firstDate: '',
        lastDate: '',
        adress: '',
        number: '1',
        total: '',
        totalPrice: '',
        createDate: '',
        updateDate: '',
        isDeleted: '0'
      },
      changyou:{
        id: '',
        userName: '',
        goodsId: '30',
        goodsName: '畅优原味风味发酵乳200g',
        price: '4.8',
        firstDate: '',
        lastDate: '',
        adress: '',
        number: '1',
        total: '',
        totalPrice: '',
        createDate: '',
        updateDate: '',
        isDeleted: '0'
      },
      cheese:{
        id: '',
        userName: '',
        goodsId: '35',
        goodsName: '赏味酪乳原味风味发酵乳100g',
        price: '5.0',
        firstDate: '',
        lastDate: '',
        adress: '',
        number: '1',
        total: '',
        totalPrice: '',
        createDate: '',
        updateDate: '',
        isDeleted: '0'
      },
    };
  },
  methods:{
    insertCar(car){
      car.userName=this.user()
      this.$axios.post('/car/insert',
        JSON.stringify(car),
        {headers: {'Content-Type': 'application/json'}}
      ).then((response) => {
        this.findCarCount()
      }).catch((error) => {
        console.log("error")
      })
    },
    findCarCount(){
      const user=this.user()
      this.$axios.post('/car/findCarCount',
        user,
        {headers: {'Content-Type': 'application/json'}}
      ).then((response) => {
        this.carCount = response.data
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
  .HelloWorld {
    position:relative;
    height:100%;
  /*//高度根据需求自行设定*/
  }
  .child{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
  /*//left,top,right,*/
  /*bottom都为0，充满真个页面*/
  overflow-y:auto;
    overflow-x:hidden;
  /*//设置Y轴出现滚动条，X轴隐藏*/
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .header-into{
    width: 1250px;
    height: 89px;
    margin: auto;
  }
  .header-left{
    /*margin-left: 350px;*/
    float: left;
  }
  .lu-nav {
    width: 600px;
    height: 104px;
    margin-left: 60px;
  }
  .lu-navtit{
    width: 100px;
    height: 104px;
    float: left;
  }
  .top-text{
    font-size: 17px;
    line-height: 104px;
  }
  .seach-car {
    width: 400px;
    height: 49px;
    margin-top: 25px;
  }
  .seach-box {
    position: relative;
    width: 235px;
  }
  .seach-box input {
    background: #fff none repeat scroll 0 0;
    border: 2px solid #3d58a7;
    height: 45px;
    line-height: 45px;
    padding-left: 38px;
    width: 125px;
  }
  .seach-box a {
    background: #405aa7;
    display: block;
    height: 51px;
    line-height: 51px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 80px;
    color: #ffffff;
    font-size: 15px;
  }
  .add-cait {
    width: 137px;
    background: #e6001f;
    text-align: center;
    height: 51px;
    line-height: 51px;
  }
  .select-c {
    width: 127px;
    height: 100%;
    float: left;
    font-size: 18px;
    color: #fff;
    /*background: url(../images/icon/snm01.png) no-repeat 13px #e60013;*/
    /*padding-left: 10px;*/
  }
  .select-c i {
    width: 18px;
    position: relative;
    top: 2px;
    font-style: normal;
  }
  .CCNum1 {
    top: 13px;
    right: -65px;
    position: absolute;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    display: none;
    font-family: 'Microsoft YaHei';
  }


  /*.header-right{*/
    /*width: 200px;*/
    /*height: 35px;*/
    /*border-left: 1px solid #cecdcd;*/
    /*margin-left: 50px;*/
    /*margin-top: 24px;*/
    /*float: left;*/
  /*}*/
  /*.huan-login{*/
    /*margin-left: 20px;*/
    /*line-height: 35px;*/
    /*font-size: 25px;*/
    /*font-family: '黑体';*/
    /*color: #979997;*/
  /*}*/

  /*图片展示*/
  .clearfix {
    *zoom: 1;
  }
  .into {
    width: 1200px;
    margin: 0 auto;
  }
  .show-daon {
     padding-top: 55px;
   }
  .img-daon {
    height: 571px;
    overflow: hidden;
    width: 522px;
  }
  .fl {
    float: left;
  }

  /*图片展示右侧*/
  .clearfix {
    *zoom: 1;
  }
  .fr {
    float: right;
    display: inline;
  }
  .imgt-sml {
    width: 665px;
  }

  .no-padding-right {
    padding-right: 0;
  }
  .pic_r_b {
    width: 800px;
    height: 280px;
    overflow: hidden;
  }
  ul, ol {
    list-style: none outside none;
  }
  .pic_r_b li {
    position: relative;
    left: -40px;
    top: -10px;
    width: 221px;
    height: 272px;
  }
  .pic_r_b li .txt {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 104px;
    background: #c63530;
  }
  .txt .name {
    margin-top: 0px;
    margin: 0px;
    padding: 0px;
    line-height: 34px;
    font-size: 18px;
    text-align: center;
    color: white;
  }
  .shopping-car{
    width: 221px;
    height: 310px;
  }
  .car{
    margin-left: 65px;
  }
  /*ul{*/
    /*float: left;*/
  /*}*/
  /*li{*/
    /*float: left;*/
  /*}*/



</style>
