<template>
  <div class="main-layout van-overflow-hidden">
    <navbar></navbar>
    <settlement-view></settlement-view>
  </div>
</template>

<script>
import navbar from '@/components/navbar/other'
import settlementView from '@/views/product/settlement'
export default {
  name: "settlement",
  components:{
    navbar,
    settlementView
  }
}
</script>

<style scoped>

</style>
