<template>
  <div class="login-container">
      <div class="banner">
        <img class="logo" :src="require('@/assets/images/logo.png')" alt="">
      </div>
      <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button disabled loading loading-text="加载中..." round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
  </div>
</template>

<script>

export default {
  name: "login",
  data(){
    return{
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
}
</script>

<style scoped lang="less">
  .login-container{
    width: 100%;
    height: 100%;
    .banner{
      width: 100%;
      height: 13rem;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background: url("~@/assets/images/login.png") no-repeat 0/100% 100%;
      .logo{
        width: 5rem;
        transform: translateY(2rem);
      }
    }
    .van-form{
      margin-top: 4rem;
    }
  }
</style>
