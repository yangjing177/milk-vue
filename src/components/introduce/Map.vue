<template>
  <div class="servrice-ritbg fr clearfix"><h3 class="name-tile">网站地图</h3>
    <div class="foot-content">
      <div class="map-milk">
        <h3>光明全部产品</h3>
        <router-link to="/ZhiYou"><p><a href="javascript:;">新鲜牛奶</a></p></router-link>
        <router-link to="/BaiXue"><p><a href="javascript:;">新鲜酸奶</a></p></router-link>
      </div>
      <div class="map-milk">
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;客服中心</h3>
        <router-link to="/Problem"><p><a href="javascript:;">常见问题</a></p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact"
  }
</script>

<style scoped>
  .fr {
    float: right;
  }

  .clearfix {
    *zoom: 1;
  }

  .fr {
    float: right;
    display: inline;
  }

  .servrice-ritbg {
    width: 936px;
    margin-top: 4px;
    margin-left: 50px;
  }

  .name-tile {
    color: #535252;
    font-size: 16px;
    margin-bottom: 25px;
  }

  .foot-content {
    /*padding: 30px 45px;*/
    border: 1px solid #D8D8D8;
    font-size: 13px;
    font-family: "Microsoft YaHei";
    /*line-height: 2;*/
  }

  .foot-content p {
    padding-left: 20px;
  }

  .fl {
    float: left;
  }
  .map-milk{
    width: 269px;
    /*height: 80px;*/
    float: left;
  }
</style>
