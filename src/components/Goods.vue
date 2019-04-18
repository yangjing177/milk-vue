<template>
  <div class="goods">
    {{message}}
  </div>
</template>

<script>
    export default {
        name: "goods",
      data(){
        return{
          message:''
        }
      },
      created(){
        var abc=this.$route.params.price
          this.message=this.$route.params.price
      }

    }
</script>

<style scoped>

</style>
