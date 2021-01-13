<template>
    <div class="comment-container">
        <h2>评论</h2>
        <list-load @load="onLoad" @refresh="onRefresh">
          <comment-item v-for="item in commentList" :key="item.id" :data="item" @clickComment="showInputPanel" @clickReply="showMoreComment" :type="1" ></comment-item>
        </list-load>
        <div class="bottom-input-container" >
            <van-field
                class="bottom-input"
                shape="round"
                placeholder="写评论...."
                @click="showInputPanel"
                readonly
            />
          <div class="operation-wrap">
            <svg t="1609148808871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2034" width="23" height="23"><path d="M291.636 385.404c-30.49 0-55.207 25.633-55.207 57.266 0 31.637 24.717 57.272 55.207 57.272 30.486 0 55.203-25.635 55.203-57.272C346.839 411.038 322.122 385.404 291.636 385.404L291.636 385.404z" p-id="2035" fill="#000000"></path><path d="M512.461 385.404c-30.49 0-55.208 25.633-55.208 57.266 0 31.637 24.722 57.272 55.208 57.272 30.486 0 55.204-25.635 55.204-57.272C567.665 411.038 542.947 385.404 512.461 385.404L512.461 385.404z" p-id="2036" fill="#000000"></path><path d="M733.287 385.404c-30.492 0-55.208 25.633-55.208 57.266 0 31.637 24.716 57.272 55.208 57.272 30.486 0 55.202-25.635 55.202-57.272C788.489 411.038 763.773 385.404 733.287 385.404L733.287 385.404z" p-id="2037" fill="#000000"></path><path d="M843.697 99.077 181.221 99.077c-60.972 0-110.41 51.287-110.41 114.539l0 429.487c0 63.256 50.543 121.56 112.92 121.56l168.257 0c29.33 31.245 150.716 156.912 150.716 156.912 5.389 5.606 14.124 5.606 19.514 0 0 0 88.87-100.764 146.775-156.912l172.193 0c62.376 0 112.92-58.308 112.92-121.56L954.106 213.615C954.107 150.363 904.673 99.077 843.697 99.077zM899.451 643.298c0 31.669-26.565 64.899-57.799 64.899L672.075 708.197c-20.543 0-39.009 21.123-39.009 21.123L514 852.815 394.955 729.32c0 0-22.676-21.123-42.112-21.123L183.267 708.197c-31.235 0-57.794-33.23-57.794-64.899L125.473 213.205c0-31.677 24.751-57.353 55.28-57.353l663.411 0c30.53 0 55.287 25.676 55.287 57.353L899.451 643.298z" p-id="2038" fill="#000000"></path><path d="M898.905 643.103" p-id="2039" fill="#000000"></path></svg>
            <svg t="1609149215747" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5404" width="23" height="23"><path d="M897.6 408.3c-14.4-33.3-63.9-41.5-116.6-41.5-51.9 0-106.9 8-134.4 8-55.5 0 69.5-302-131.5-302-100 0-67 145.5-83.5 277.5-8.4 67-72.6 104.8-133.7 125.7v-44.3h-200v499.5h200V888c13.7-1.1 27.7-1.7 41.5-1.7 11.6 0 22.9 0.5 33.8 1.5 53.4 5.2 179 28.7 293.8 28.7 72.1 0 139.9-9.3 182.7-38.2 110.9-75 76.4-404 47.9-470zM247.9 881.2h-100V481.7h100v399.5z m628-242.1c-0.9 50.5-6.4 95.4-16.1 129.9-9.6 34-22.8 57.5-38.2 67.9-20 13.5-63.1 29.7-154.7 29.7-80 0-166.1-12-228.9-20.8-23.8-3.3-44.4-6.2-60-7.7-11.9-1.2-24.9-1.8-38.6-1.8-13.8 0-27.8 0.6-41.5 1.6V528.5c6.4-1.9 12.8-4 19.3-6.3 123.9-43.4 157.6-114.1 164-165.7 4.7-37.8 5.7-76.6 6.5-110.8 1-42.5 2-82.6 9.7-107.1 3.2-10 6.2-13.1 7-13.8 1.5-1.3 5.5-2 10.6-2 34.4 0 45.5 11.8 49.1 15.7 10.4 11.1 17 30.5 19.7 57.8 3 29.6 0.8 63-1.1 92.4-3.4 52.6-5.8 90.6 18.6 116.6 11.7 12.5 27.8 19.4 45.1 19.4 13.8 0 31.2-1.5 51.5-3.3 25.8-2.2 55.1-4.8 83-4.8 55.1 0 69 10.3 70.9 11.9 9.8 23.4 25.8 112.2 24.1 210.6z" fill="#000000" p-id="5405"></path></svg>
            <svg t="1609148887305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2891" width="23" height="23"><path d="M707.584 93.184c-77.312 0-148.992 38.912-196.608 102.912-47.104-64-119.296-102.912-196.608-102.912-139.264 0-252.416 123.904-252.416 275.968 0 90.624 40.448 154.624 73.216 205.824C229.888 723.968 468.48 908.8 478.72 916.48c9.728 7.68 20.992 11.264 32.256 11.264s22.528-3.584 32.256-11.264c10.24-7.68 248.32-193.024 343.552-341.504 32.768-51.2 73.216-115.2 73.216-205.824 0-152.064-113.152-275.968-252.416-275.968zM821.76 573.44c-87.552 122.88-272.896 263.168-282.112 269.824-8.704 6.656-18.944 10.24-28.672 10.24-10.24 0-19.968-3.072-28.672-10.24-9.216-6.656-190.976-148.48-282.112-274.944-29.184-46.08-75.776-103.424-75.776-184.32 0-136.192 75.776-231.936 200.192-231.936 69.12 0 144.384 66.048 186.368 123.392 42.496-57.344 117.248-123.392 186.368-123.392 124.928 0 205.824 95.744 205.824 231.936 0 80.896-51.712 143.872-81.408 189.44z" fill="#000000" p-id="2892"></path></svg>
            <svg t="1609149114552" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4478" width="23" height="23"><path d="M928 480c-17.664 0-32 14.336-32 32l0 320c0 17.664-14.336 32-32 32L160 864c-17.664 0-32-14.336-32-32L128 288c0-17.664 14.336-32 32-32l224 0 0 0c0 0 0 0 0 0 17.664 0 32-14.336 32-32s-14.336-32-32-32c-1.024 0-1.888 0.48-2.88 0.576L160.384 192.576c-52.96 0-95.904 43.008-95.904 96.064l0 543.872c0 53.056 42.944 96.064 95.904 96.064l704.224 0c52.96 0 95.904-43.008 95.904-96.064L960.512 512 960 512C960 494.336 945.664 480 928 480zM402.688 620.768c-1.92 4.128-3.168 8.608-3.168 13.44 0 17.664 14.336 32 32 32 15.456 0 27.744-11.168 30.752-25.76l0.64 0c37.12-189.696 193.984-336.256 388.672-358.272l-67.776 67.776c-12.512 12.512-12.512 32.768 0 45.248 12.512 12.512 32.768 12.512 45.248 0l122.528-122.528c12.512-12.512 12.512-32.768 0-45.248l-122.528-122.528c-12.512-12.512-32.768-12.512-45.248 0-12.512 12.512-12.512 32.768 0 45.248l67.52 67.52C628.256 239.872 448.224 405.408 402.688 620.768z" p-id="4479" fill="#000000"></path></svg>
          </div>
        </div>
        <van-action-sheet v-model="showInput" title="评论" >
          <van-field
              class="comment-input"
              v-model="message"
              rows="2"
              autosize
              type="textarea"
              maxlength="50"
              :placeholder="placeholderArr[index]"
              show-word-limit
              safe-area-inset-bottom
              :autofocus="showInput"
          />
          <div class="bottom-group">
            <van-button size="small" :disabled="message.length === 0" round type="info">发表</van-button>
          </div>
        </van-action-sheet>
        <van-action-sheet v-model="showReply" title="回复详情">
           <div class="replay-container">
             <div class="comment-origin">
               <comment-item :data="reply" @clickComment="showInputPanel" ></comment-item>
             </div>
             <div class="comment-container">
              <list-load @load="onLoad" @refresh="onRefresh" ref="replyListRef"   >
                <comment-item v-for="item in replyList" :key="item.id" :data="item" @clickComment="showInputPanel" :type="0" ></comment-item>
              </list-load>
             </div>
             <div class="replay-input-wrap">
               <van-field
                   class="bottom-input"
                   shape="round"
                   :placeholder='`回复 ${reply.user && reply.user.username}`'
                   @click="showInputPanel(reply)"
                   readonly
               />
             </div>
           </div>
        </van-action-sheet>
    </div>
</template>

<script>
import commentItem from '@/components/comment/item'
import listLoad from '@/components/list-load'
export default {
  name: "comment",
  components:{
    commentItem,
    listLoad
  },
  mounted() {
    this.param.diary = {id:this.$route.params.id}
  },
  data(){
    return{
      commentList: [],
      replyList:[],
      message: '',
      showInput: false,/*是否显示输入框*/
      showReply: false,/*是否显示回复评论的面板*/
      replyRoot:{}, //回复评论的顶层
      reply:{},//回复对象
      placeholderArr: ['请输入评论','回复'],
      index: 0, /*回复提示词索引*/
      param:{},
      offsetId: 0
    }
  },
  methods:{
    showInputPanel(data){
      if(this.reply !== data || !data){
        this.message = ''
      }
      if(data && data.user){ /*回复评论*/
        this.reply = data
        this.index = 1
        this.placeholderArr[this.index] = `回复 ${data.user.nickname}`
      }else{ /*直接评论*/
        this.index = 0
      }
      this.showInput = true
    },
    showMoreComment(data){
      this.reply = data
      this.showReply = true
      this.replyRoot = data
      setTimeout(()=>{
        // this.$refs.replyListRef.onLoad()
      },0)
    },
    onLoad(callback){
      this.getList(false,()=>{
        callback && callback()
      })
    },
    onRefresh(callback){
      this.getList(true,()=>{
        callback && callback()
      })
    },
    getList(refresh,callback){
      /*是否为打开评论回复*/
      this.showReply ? this.param.root = this.replyRoot.id : this.param.root = null
      this.$axios.post('/comment/list',this.param).then((res)=>{
         if(this.showReply){
           if (!this.replyRoot.replyList){
             this.replyRoot.replyList = []
           }
           refresh ? this.replyRoot.replyList = res.data.concat(this.replyRoot.replyList) : this.replyRoot.replyList = this.replyRoot.replyList.concat(res.data)
           this.replyList = this.replyRoot.replyList
           console.log(this.replyList)
         }else{
           refresh ? this.commentList = res.data.concat(this.commentList) : this.commentList = this.commentList.concat(res.data)
         }
      }).catch((err)=>{
        this.$notify({
          type: 'warning',
          message: err.message || '评论数据加载失败!'
        })
      }).finally( ()=>{
         callback && callback()
      })
    },
    comment(){
      this.$axios.post('/comment/create',{}).then(res =>{
         res.data
      }).catch(err =>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="less">
  .comment-container{
    width: 100%;
    margin-top: 0.5rem;
    background-color: #fff;
    padding: 0.6rem 0.5rem 4rem;
    box-sizing: border-box;
    h2{
      color: #000;
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 0.7rem;
    }
    .comment-input{
      width: 93%;
      border-radius: 0.3rem;
      margin: 0 auto;
      background-color: rgb(245,245,245);
    }
    .bottom-group{
      box-sizing: border-box;
      padding: 0.4rem 0.7rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0.7rem 0;
      .van-button{
        margin-left: auto;
        padding: 0 1.1rem;
        font-size: 0.9rem;
      }
    }
    .bottom-input-container{
      width: 100%;
      //height: 3rem;
      box-sizing: border-box;
      padding: 0 0.5rem;
      padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
      padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
      background-color: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-top: 0.01rem solid #e6e6e6;
      .bottom-input{
        width: 45%;
        height: 1.7rem;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: rgb(245,245,245);
        border-radius: 0.8rem;
      }
      .operation-wrap{
        width: 55%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        margin: 1rem 0;
      }
    }
    .replay-container{
      width: 100%;
      height: 65vh;
      overflow-y: auto;
      .comment-origin{
        padding: 0 0.5rem;
        border-bottom: 0.01rem solid #e6e6e6;
      }
      .replay-input-wrap{
         position: fixed;
         bottom: 0;
         padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
         padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
         width: 100%;
         height: 2.5rem;
         background-color: #fff;
         padding: 0.2rem 0.4rem;
         box-sizing: border-box;
         border-top: 0.01rem solid #e6e6e6;
         display: flex;
         align-items: center;
         justify-content: center;
        .van-field{
          width: 95%;
          height: 90%;
          border-radius: 1rem;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(245,245,245);
        }
      }
    }
  }
</style>
