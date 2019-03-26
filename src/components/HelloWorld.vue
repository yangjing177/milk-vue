<template>
  <div id="HelloWorld">
    <el-container>
      <el-header class="header">
        <vheader />
      </el-header>

      <el-main>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      </el-main>

      <el-main>main</el-main>
      <el-footer>{{fullName}}</el-footer>
    </el-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'
export default {
  name: 'HelloWorld',
  components: {
    'vheader': Header
  },
  data() {
    return {
      showname:false, //判断是否已登陆
    };
  }
}

</script>

<style>
  #HelloWorld {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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

</style>
