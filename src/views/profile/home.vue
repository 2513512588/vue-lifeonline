<template>
    <div class="homepage-container">
      <van-image :src="require('@/assets/images/homepage.jpg')" fit="contain" />
      <div class="content-container">
        <div class="user-info-wrap">
          <div class="user-info-detail">
            <h2>Alice</h2>
            <span>花有重开日,人无再少年</span>
          </div>
          <van-image
              round
              width="5rem"
              height="5rem"
              fit="cover"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <diary-view></diary-view>
      </div>
    </div>
</template>

<script>
import diaryView from '@/views/diary/list'
export default {
  name: "homepage",
  components:{
    diaryView,
  },
  data(){
    return{
      list: [{imageList:[{},{}]}]
    }
  }
}
</script>

<style scoped lang="less">
  .homepage-container{
    .van-image{
      width: 100%;
    }
    .content-container{
      width: 100%;
      background-color: #fff;
      border-top-left-radius: 0.6em;
      border-top-right-radius: 0.6rem;
      position: relative;
      top: -1rem;
      .user-info-wrap{
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        transform: translateY(-50%);
        box-sizing: border-box;
        padding: 0 1rem;
        .user-info-detail{
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          flex-direction: column;
          margin-right: 0.5rem;
          h2{
            font-size: 1.1rem;
            font-weight: 500;
            color: #333;
          }
          span{
            font-size: 0.6rem;
            color: #999;
            margin-top: 0.2rem;
          }
        }
        .van-image{
          border: 0.2rem solid #fff;
        }
      }
    }
  }
</style>
