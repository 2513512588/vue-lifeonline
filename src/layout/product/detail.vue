<template>
    <div class="main-layout">
      <navbar title="商品详情"></navbar>
      <detail-view></detail-view>
      <comment></comment>
    </div>
</template>

<script>
import detailView from "@/views/product/detail";
import navbar from '@/components/navbar/other'
import comment from '@/views/comment/index'
export default {
  name: "detail",
  components:{
    detailView,
    navbar,
    comment
  }
}
</script>

<style scoped>

</style>
