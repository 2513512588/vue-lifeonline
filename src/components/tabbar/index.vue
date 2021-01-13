<template>
  <van-tabbar
      active-color="var(--main-color)"
      v-model="active"
      route
      safe-area-inset-bottom
      fixed
      placeholder
      safe-area-inset-top
  >
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/classify" >分类</van-tabbar-item>
    <van-tabbar-item icon="plus" to="/publish">发布</van-tabbar-item>
    <van-tabbar-item icon="smile-comment-o" to="/message" >消息</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style scoped>

</style>
