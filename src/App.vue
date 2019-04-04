<template>
  <div id="app">
    <router-view class="app-router-view"/>
  </div>
</template>

<script>
  // //全局监听，页面刷新的时候将store里state的值存到sessionStorage中，然后从sessionStorage中获取，再赋值给store。然后再把session里面存的删除即可，相当于中间件的作用。
  // //在页面加载时读取sessionStorage里的状态信息
  // if (sessionStorage.getItem("store")) {
  //   this.$store.replaceState(
  //     Object.assign(
  //       {},
  //       this.$store.state,
  //       JSON.parse(sessionStorage.getItem("store"))
  //     )
  //   );
  //   sessionStorage.removeItem("store")
  // }
  //
  // //在页面刷新时将vuex里的信息保存到sessionStorage里
  // window.addEventListener("beforeunload", () => {
  //   debugger
  //   sessionStorage.setItem("store", JSON.stringify(this.$store.state));
  // });

export default {
  name: 'App',

  mounted() {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}


</script>

<style>
  #app .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
</style>
