<template>
  <div class="main-layout">
    <navbar title="发布帖子">
      <template #right>
        <span>发布</span>
      </template>
    </navbar>
    <publish-view></publish-view>
  </div>
</template>

<script>
import publishView from "@/views/diary/publish";
import navbar from '@/components/navbar/other/index'
export default {
  name: "publish",
  components:{
    publishView,
    navbar
  }
}
</script>

<style scoped>

</style>
