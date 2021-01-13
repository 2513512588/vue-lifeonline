<template>
  <login-view></login-view>
</template>

<script>
import loginView from '@/views/profile/login'
export default {
  name: "login",
  components:{
    loginView
  },
  mounted() {
    this.$store.commit('loginComplete')
    console.log(this.$store.state.login)
  }
}
</script>

<style scoped>

</style>
