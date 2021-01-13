<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="css">
  *{
    margin: 0;
    padding: 0;
    /*user-select: none;*/
  }
  /*@font-face {*/
  /*  font-family: 'pingfang';*/
  /*  src: url('~@/assets/font/PingFang.ttc');*/
  /*}*/
  :root{
    --main-color: rgb(112,90,246);
    /*--bg-color: #f5f6f7;*/
    --bg-color: #F2F2F5;
  }
  html,body,#app {
    background: var(--bg-color);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    font-family: 'pingfang',sans-serif;
  }
  #app{
    max-width: 375px;
    min-width: 320px;
    /*position: fixed;*/
    overflow-y: auto;
  }
  img{
    vertical-align: middle;
    user-select: none;
  }

  .main-layout{
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .van-skeleton{
    box-sizing: border-box;
    background-color: #fff;
    padding: 0.7rem;
  }


</style>
