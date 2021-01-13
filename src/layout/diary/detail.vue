<template>
  <div class="main-layout">
    <navbar title="帖子详情"></navbar>
    <diary></diary>
    <comment></comment>
  </div>
</template>

<script>
import navbar from '@/components/navbar/other/index'
import diary from '@/views/diary/detail'
import comment from '@/views/comment/index'
export default {
  name: "index",
  components: {
    navbar,
    diary,
    comment
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="less">

</style>
