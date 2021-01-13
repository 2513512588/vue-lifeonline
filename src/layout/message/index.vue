<template>
   <div class="main-layout van-overflow-hidden">
     <message-view></message-view>
     <tabbar></tabbar>
   </div>
</template>

<script>
import messageView from '@/views/message'
import tabbar from '@/components/tabbar'
export default {
  name: "index",
  components:{
    messageView,
    tabbar
  }
}
</script>

<style scoped>

</style>
