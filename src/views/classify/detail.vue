<template>
  <div class="classify-detail">
    <div class="banner">
      <div>
        <h2>旅游分享</h2>
        <p>分享一组图片,求点赞关注</p>
      </div>
      <van-button round size="mini" type="info">关注</van-button>
    </div>
    <div class="followed-container" @click="$router.push(`/user/list?id=${$route.params.id}`)" >
      <div class="followed-container-info">
        <span>2546人关注</span>
        <van-icon name="arrow" color="#666" />
      </div>
      <div class="followed-container-wrap">
        <van-image
            v-for="item in 8"
            :key="item.id"
            width="2rem"
            height="2rem"
            round
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <div class="classify-detail-diary-container">
      <van-tabs v-model="active" animated swipeable>
        <van-tab title="精选">
          <diary-view></diary-view>
        </van-tab>
        <van-tab title="广场">
          <diary-view></diary-view>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import diaryView from '@/views/diary/list'
export default {
  name: "detail",
  data(){
    return{
      diaryList:[
        {
          imageList:[{}]
        },
        {
          imageList:[{}]
        }
      ],
      active:0
    }
  },
  components:{
    diaryView
  }
}
</script>

<style scoped lang="less">
.classify-detail{
  width: 100%;
  .banner{
    width: 100%;
    height: 10rem;
    background: url("~@/assets/images/banner.png") no-repeat 0/100% 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 2rem;
    h2{
      font-size: 1.2rem;
      font-weight: 500;
    }
    p{
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }
    .van-button{
      margin-top: 1.5rem;
      padding: 0.15rem 0.9rem;
      background-color: #1a1a1a;
      border-color: #1a1a1a;
      font-weight: 600;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .followed-container{
    width: 100%;
    height: 5.3rem;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0.4rem 0.6rem 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    .followed-container-info{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        font-size: 0.85rem;
        font-weight: 600;
      }
    }
    .followed-container-wrap{
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .van-image{
        margin-right: 0.4rem;
      }
    }
  }
  .classify-detail-diary-container{
    width: 100%;
    margin-top: 0.8rem;
    background-color: #fff;
  }
}
</style>

<style lang="less" >
.classify-detail-diary-container{
  .van-tabs__wrap{
    width: 35%;
    margin-bottom: 0.8rem;
  }
  .diary-item{
    box-shadow: none;
  }
}
</style>
