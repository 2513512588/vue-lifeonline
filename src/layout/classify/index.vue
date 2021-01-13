<template>
   <div class="main-layout">
     <classify-view></classify-view>
     <tabbar></tabbar>
   </div>
</template>

<script>
import classifyView from '@/views/classify'
import tabbar from '@/components/tabbar'
export default {
  name: "index",
  components:{
    classifyView,
    tabbar
  }
}
</script>

<style scoped lang="less">

</style>
