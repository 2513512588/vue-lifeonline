<template>
  <div class="user-card" v-if="data">
      <van-image
          width="2rem"
          height="2rem"
          lazy-load
          round
          fit="cover"
          :src="data.avatar || require('@/assets/avatar.jpeg')"
      />
      <div class="user-info">
        <span class="nickname" v-text="data.nickname" >苏小七是我吖</span>
        <span class="describe">
           <slot name="describe">
             <span v-text="data.describe" ></span>
           </slot>
        </span>
      </div>
      <div class="right-wrap" v-if="right !== 'none'">
        <slot name="right">
          <van-button round size="small" type="info" color="var(--main-color)" v-text="data.isFollow ? '已关注' : '关注'" >关注</van-button>
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    right: String,
    data:Object
  },
  name: "mine"
}
</script>

<style scoped lang="less">

.user-card{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;

  .user-info{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 0.5rem;

    .nickname{
      letter-spacing: .05rem;
      font-size: 0.9rem;
      color: #333;
      font-weight: 500;
      align-self: flex-start;
    }
    .describe{
      font-size: 0.7rem;
      color: #999999;
    }
  }
  .right-wrap{
    margin-left: auto;
    .van-button{
      height: 1.6rem;
      padding: 0 0.9rem;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
