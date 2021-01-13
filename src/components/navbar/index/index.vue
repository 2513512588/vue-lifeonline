<template>
  <div class="navbar-container">
    <div class="fixed-placeholder"></div>
    <div class="navbar">
      <div class="top-bar">
        <van-search
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
        />
        <van-button size="small" color="var(--main-color)" round :icon="require('@/assets/images/icon/edit.svg')" type="info">
          发布
        </van-button>
      </div>
      <van-nav-bar :border="false">
        <template #left>
          <van-tabs v-model="active" line-width="1rem" line-height="0.25rem">
            <van-tab title="关注" ></van-tab>
            <van-tab title="推荐" ></van-tab>
          </van-tabs>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "index",
  data(){
    return {
      active: 0,
      value:''
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>
<!-- todo 用户卡片多个插槽 -->
<style scoped lang="less">
   .navbar-container{
     width: 100%;
     .fixed-placeholder{
       width: 100%;
       height: 6.2rem;
     }
     .navbar{
       width: 100%;
       position: fixed;
       left: 0;
       top: 0;
       //box-shadow: 0 0 0.5rem #e6e6e6;
       z-index: 99;
       background-color: var(--bg-color);
       .top-bar{
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-around;
         .van-search{
           width: 75%;
         }
         .van-button{
           height: 1.8rem;
         }
         img{
           vertical-align: baseline;
         }
       }
     }
   }
</style>
<style lang="less">
    .navbar{
      .van-tabs--line .van-tabs__wrap { /*设置首页的tabs的线的高度*/
        height: 1.8rem;
      }
      .van-tabs__line {
        background-color: var(--main-color);
      }
      .van-tab{
        padding: 0 0.5rem;
        transform-origin: bottom center;
        //transition: transform 0.6s;
      }
      .van-tab--active {
        font-weight: 600;
        transform: scale(1.2);
      }
      .van-search,.van-nav-bar,.van-tabs__nav{
        background-color: var(--bg-color);
      }
      .van-search{
        .van-search__content{
          background-color: #eeecec;
          .van-field__left-icon,input[type=search]::-webkit-input-placeholder{
            color: rgb(163,162,167);
          }
        }
      }
    }
</style>
