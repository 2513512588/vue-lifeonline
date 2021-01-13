<template>
   <div class="navbar-panel">
     <van-nav-bar
         fixed
         :placeholder="placeholder"
         :border="placeholder"
         :class="{'background-none': !placeholder}"
         safe-area-inset-top
         z-index="999"
     >
       <template #left>
         <van-icon name="arrow-left" @click="onClickLeft" :color="placeholder ? '#333' : '#fff'" />
       </template>
       <template #title>
         <span :style="`color:${placeholder ? '#333' : '#fff'}`" >{{title}}</span>
       </template>
       <template #right v-if="right" >
         <slot name="right">
           <van-icon name="ellipsis" size="1.5rem" :color="placeholder ? '#333' : '#fff'" @click="onClickRight" />
         </slot>
       </template>
     </van-nav-bar>

     <van-share-sheet
         v-model="showShare"
         title="立即分享给好友"
         :options="options"
         safe-area-inset-bottom
     />
   </div>
</template>

<script>
export default {
  name: "index",
  props:{
    title: String,
    placeholder: {
      type:Boolean,
      default(){
       return true
      }
    },
    right: {
      type:Boolean,
      default(){
        return true
      }
    },
  },
  data(){
    return{
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    }
  },
  mounted() {
    !this.placeholder && document.querySelector('.main-layout').addEventListener('scroll',this.scrollHandler)
  },
  methods:{
    onClickLeft() {
       this.$router.back()
    },
    onClickRight(){
      if(this.$listeners.rightClick){
        this.$emit('rightClick')
      }else{
        this.showShare = true
      }
    },
    scrollHandler(){
      let scrollY = document.querySelector('.main-layout').scrollTop
      this.$parent.placeholder = scrollY > 50
    }
  }
}
</script>

<style scoped>
  .van-nav-bar{
    transition: 1s;
  }

  .background-none{
    background-color: rgba(255,255,255,0);
  }
</style>
