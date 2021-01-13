<template>
  <div class="profile">
    <div class="user-info" @click="()=>{this.$router.push('/homepage')}">
      <van-icon name="setting-o" color="#fff" size="1.3rem" class="set-icon" />
      <van-image
          width="4rem"
          height="4rem"
          lazy-load
          round
          fit="fill"
          :src="require('@/assets/images/avatar.png')"
      />
      <div class="user-info-detail">
        <span>吕不韦</span>
        <p class="describe">人生是一场修行</p>
      </div>
      <van-icon name="arrow" color="#fff" size="1.5rem" class="arrow-icon" />
    </div>
    <div class="order-container">
      <div class="order-container-describe">
        <h2>我的订单</h2>
        <span>查看全部订单&gt;</span>
      </div>
      <div class="order-operation-wrap">
        <div><img :src="require('@/assets/images/icon/待付款.png')" alt=""><span>待支付</span></div>
        <div><img :src="require('@/assets/images/icon/待收货.png')" alt=""><span>待收货</span></div>
        <div><img :src="require('@/assets/images/icon/评价.png')" alt=""><span>待评价</span></div>
        <div><img :src="require('@/assets/images/icon/售后.png')" alt=""><span>售后</span></div>
      </div>
    </div>
    <div class="other-container">
      <van-cell title="我的发布" icon="comment-circle-o" is-link />
      <van-cell title="我的收藏" icon="like-o" is-link />
      <van-cell title="我的关注" icon="friends-o" is-link />
      <van-cell title="我的粉丝" icon="friends-o" is-link />
      <van-cell title="收货地址" icon="location-o" is-link />
    </div>
    <van-button color="#fff" type="primary" block class="logout-btn" >退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
.profile{
  width: 100%;
  height: 100%;
  .user-info{
    width: 100%;
    height: 11rem;
    background: url("~@/assets/images/profile_bg.png") no-repeat 0/100% 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2rem;
    box-sizing: border-box;
    position: relative;
    .set-icon{
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
    .user-info-detail{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      color: #fff;
      margin-left: 0.5rem;
      .describe{
        font-size: 0.6rem;
        margin-top: 0.2rem;
        letter-spacing: 0.1rem;
      }
    }
    .arrow-icon{
      margin-left: auto;
    }
  }
  .order-container{
    width: 100%;
    height: 7rem;
    background-color: #fff;
    margin: 1rem auto;
    box-shadow: 0 0 0.5rem #e6e6e6;
    border-radius: 0.3rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0.5rem 0.8rem;
    .order-container-describe{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2{
        font-size: 1rem;
        font-weight: 500;
      }
      span{
        font-size: 0.6rem;
        color: #999;
      }
    }
    .order-operation-wrap{
      box-sizing: border-box;
      padding: 0 0.5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
          width: 2.2rem;
        }
        span{
          font-size: 0.6rem;
          margin-top: 0.2rem;
          color: #333;
        }
      }
    }
  }
  .other-container{
    width: 100%;
    background-color: #fff;
    margin: 1rem auto;
    box-shadow: 0 0 0.5rem #e6e6e6;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .logout-btn{
    color: #fa656a !important;
    font-weight: 500;
  }
}
</style>
