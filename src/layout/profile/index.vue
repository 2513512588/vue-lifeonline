<template>
  <div class="main-layout van-overflow-hidden">
    <profile-view></profile-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import profileView from '@/views/profile'
import tabbar from '@/components/tabbar/index'
export default {
  name: "index",
  components:{
    profileView,
    tabbar
  }
}
</script>

<style scoped lang="less">

</style>
