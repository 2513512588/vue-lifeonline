<template>
    <div class="main-layout">
      <navbar></navbar>
      <homepage-view></homepage-view>
    </div>
</template>

<script>
import navbar from '@/components/navbar/other'
import homepageView from '@/views/profile/home'
export default {
  name: "homepage",
  components:{
    navbar,
    homepageView
  }
}
</script>

<style scoped>

</style>
