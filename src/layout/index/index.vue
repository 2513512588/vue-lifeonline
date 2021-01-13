<template>
  <div class="main-layout">
      <navbar></navbar>
      <index-view></index-view>
      <tabbar></tabbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar/index/index'
import tabbar from '@/components/tabbar/index'
import indexView from '@/views/diary/list'
export default {
  name: "index",
  components:{
    navbar,
    tabbar,
    indexView
  }
}
</script>

<style scoped>

</style>
