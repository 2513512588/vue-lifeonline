<template>
    <div class="comment-item" >
      <van-image
          width="2rem"
          height="2rem"
          lazy-load
          round
          fit="cover"
          :src="data.user.avatar || require('@/assets/avatar.jpeg')"
      />
      <div class="comment-info">
           <div class="user-info">
             <span class="nickname" v-text="data.user.nickname" >木子先森</span>
             <div>
                 <span v-text="data.likeNum">506</span>
                 <svg t="1609148887305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2891" width="16" height="16"><path d="M707.584 93.184c-77.312 0-148.992 38.912-196.608 102.912-47.104-64-119.296-102.912-196.608-102.912-139.264 0-252.416 123.904-252.416 275.968 0 90.624 40.448 154.624 73.216 205.824C229.888 723.968 468.48 908.8 478.72 916.48c9.728 7.68 20.992 11.264 32.256 11.264s22.528-3.584 32.256-11.264c10.24-7.68 248.32-193.024 343.552-341.504 32.768-51.2 73.216-115.2 73.216-205.824 0-152.064-113.152-275.968-252.416-275.968zM821.76 573.44c-87.552 122.88-272.896 263.168-282.112 269.824-8.704 6.656-18.944 10.24-28.672 10.24-10.24 0-19.968-3.072-28.672-10.24-9.216-6.656-190.976-148.48-282.112-274.944-29.184-46.08-75.776-103.424-75.776-184.32 0-136.192 75.776-231.936 200.192-231.936 69.12 0 144.384 66.048 186.368 123.392 42.496-57.344 117.248-123.392 186.368-123.392 124.928 0 205.824 95.744 205.824 231.936 0 80.896-51.712 143.872-81.408 189.44z" fill="#000000" p-id="2892"></path></svg>
             </div>
           </div>
           <p class="comment-detail" @click="commentClick()" v-text="data.content">
             一起种树那段,给我感动哭了.....
             一起种树那段,给我感动哭了.....
             一起种树那段,给我感动哭了.....
           </p>
          <div class="bottom-info">
            <span class="create-time"><date-converter :value="data.createTime" /></span>
            <template v-if="type === 0">
              <span class="replay" @click="commentClick">回复</span>
            </template>
            <template v-else-if="type === 1">
              <span class="more" @click="replyClick" v-text="`${data.replyNum}条回复`" >3条回复&gt;</span>
            </template>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "comment",
  props:{
    type:Number,
    data:Object
  },
  methods:{
    commentClick(){
      if (this.$listeners.clickComment){
        this.$emit('clickComment',this.data)
      }
    },
    replyClick(){
      if (this.$listeners.clickReply){
        this.$emit('clickReply',this.data)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .comment-item{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.6rem 0 1rem;
    .comment-info{
      margin-left: 0.5rem;
      line-height: 1.5rem;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      transform: translateY(-0.4rem);
      .user-info{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .nickname{
          color: #474747;
          font-size: 0.8rem;
        }
        div{
          display: flex;
          align-items: center;
          justify-content: center;
          span{
            font-size: 0.6rem;
            color: #333;
            margin-right: 0.3rem;
          }
        }
      }
      .comment-detail{
         width: 20rem;
         color: #000;
         font-size: 0.85rem;
         line-height: unset;
      }
      .bottom-info{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .create-time{
          color: #999999;
          font-size: 0.6rem;
        }
        .more{
          display: flex;
          color: rgb(71,71,71);
          font-size: 0.6rem;
          padding: 0 0.5rem;
          background-color: rgb(242,242,242);
          border-radius: 0.7rem;
          margin-left: 0.3rem;
        }
        .replay{
          font-size: 0.6rem;
          color: rgb(71,71,71);
          margin-left: 0.3rem;
        }
      }
    }
  }
</style>
