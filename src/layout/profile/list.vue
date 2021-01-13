<template>
  <div class="main-layout">
    <navbar title="用户列表"></navbar>
    <listView></listView>
  </div>
</template>

<script>
import navbar from '@/components/navbar/other'
import listView from '@/views/profile/list'
export default {
  name: "list",
  components:{
    navbar,
    listView
  }
}
</script>

<style scoped>

</style>
