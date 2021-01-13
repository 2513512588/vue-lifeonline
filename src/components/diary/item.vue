<template>
    <div class="diary-item" >
      <div class="top-info">
        <user-card :data="data.user">
          <template #describe>
            <date-converter :value="data.createTime" />
          </template>
          <template #right>
            <van-icon name="ellipsis" />
          </template>
        </user-card>
      </div>
      <div class="diary-body">
        <p @click="goDetail(data.id)" v-text="data.title" >分享一部超好看的动画,喜欢的朋友可以直接去我主页留言我私信链接哦~!</p>
        <template  v-if="data.imageList.length === 1">
          <van-image
              v-for="(image,index) in data.imageList"
              :key="image.id"
              width= "100%"
              height="12rem"
              lazy-load
              radius="0.5rem"
              fit="none"
              :src="image || 'https://img.yzcdn.cn/vant/cat.jpeg'"
              @click="preview(index)">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
        </template>
        <template v-else-if="data.imageList.length > 1">
          <div class="image-container" >
            <van-image
                v-for="(image,index) in data.imageList"
                :key="image.id"
                width= "7.1rem"
                height="7.1rem"
                lazy-load
                radius="0.5rem"
                fit="cover"
                :src="image || 'https://img.yzcdn.cn/vant/cat.jpeg'"
                @click="preview(index)">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
          </div>
        </template>
      </div>
      <div class="tag-wrap">
        <van-tag color="var(--main-color)" size="large" type="primary" v-if="data.type === 1" >闲置商品</van-tag>
        <van-tag size="large" type="warning" v-once >#{{data.classify.subject}}</van-tag>
      </div>
      <div class="bottom-info">
        <div>
          <van-icon name="share-o" size="20" color="rgb(81,81,83)" />
          <span v-text="data.repostNum">200</span>
        </div>
        <div>
          <van-icon name="smile-comment-o" size="20" color="rgb(81,81,83)" />
          <span v-text="data.commentNum">506</span>
        </div>
        <div>
          <van-icon name="good-job-o" size="20" color="rgb(81,81,83)" />
          <span v-text="data.likeNum">30</span>
        </div>
      </div>
      <!--todo 阅读量-->
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
import userCard from '@/components/profile/card'
export default {
  name: "diary-item",
  props:{
    data:Object
  },
  components:{
    userCard
  },
  data(){
    return{
      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  methods:{
    goDetail(id){
        if (this.data.type === 1){
           this.$router.push(`/product/detail?id=${id}`)
        }else{
           this.$router.push(`/diary/detail?id=${id}`)
        }
    },
    onChange(index) {
      this.index = index;
    },
    preview(index){
      ImagePreview({
        images: this.data.imageList,
        startPosition: index,
      });
    }
  }
}
</script>

<style lang="less" scoped>
    .diary-item{
      //width: 96%;
      width: 100%;
      margin: 0 auto 0.7rem;
      background-color: #fff;
      border-radius: 0.5rem;
      //box-shadow: 0 0 0.5rem #e6e6e6;
      box-sizing: border-box;
      padding: 0.7rem;

      .top-info{
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .diary-body{
        width: 100%;
        padding: 0.1rem 0;
        font-size: 0.9rem;
        color: #000;
          p{
            margin: 0.5rem 0 0.7rem !important;
            white-space: nowrap;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
          }
        .image-container{
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          overflow: hidden;
          .van-image{
            margin-bottom: 0.35rem;
          }
        }
        .image-container::after{
          content: "";
          position: relative;
          width: 7.1rem;
        }
      }
      .tag-wrap{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .van-tag{
          margin: 0.3rem;
        }
      }
      .bottom-info{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        margin-top: 0.3rem;
        padding: 0.2rem 0;
        div{
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.7rem;
          margin-right: 0.7rem;
          .van-icon{
            font-weight: bold;
          }
          span{
            margin-left: 0.3rem;
          }
        }
      }
    }
</style>
