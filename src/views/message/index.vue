<template>
  <div class="message-container">
    <h2>全部消息</h2>
    <van-cell-group :border="false">
      <van-cell v-for="item in 9" :key="item.id">
        <template #title>
          <span>原神</span>
        </template>
        <template #label>
          <span>你好大神!</span>
        </template>
        <template #icon>
          <van-image
              radius="0.8rem"
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </template>
        <template #right-icon>
          <span class="send-time">2分钟前</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
.message-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  h2{
    font-size: 1rem;
    background: #fdfdfd;
    font-weight: 500;
    padding: 1rem 2rem;
  }
  .van-cell-group{
    width: 100%;
    height: 85vh;
    overflow-y: auto;
    .van-image{
      margin-right: 0.5rem;
    }
    .send-time{
      font-size: 0.6rem;
      color: #999;
    }
  }
}
</style>
