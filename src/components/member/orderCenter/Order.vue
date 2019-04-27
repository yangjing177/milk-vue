<template>
  <div class="all-order">

  </div>
</template>

<script>
    export default {
        name: "Order",

      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
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
