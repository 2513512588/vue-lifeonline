<template>
  <van-skeleton title avatar :row="18" :loading="loading" animate round >
    <div class="diary-detail" >
      <h2 class="title" v-text="diary.title" >分享一部超好看的动画,喜欢的朋友可以直接去我主页留言我私信链接哦~!</h2>
      <user-card :data="diary.user" />
      <div class="diary-body">
        <p class="detail" v-text="diary.detail" >邮死不就是花钱买体验卡吗？还得心惊胆战怕上家收回 小白萌新啥的别因为价格便宜去收邮死 当然你非得收也别收那种明知道是邮死还挂特别高价格的号【特指想300收白鸟号的某些nt】在我看来 邮死的标价就是市场价的30% 拿四季节毕业白鸟号举例 市场价2000+ 邮死直接五六百 更别说那些复刻都没咋拿一两个季节毕业的号了 这种几十块卖我我也不要</p>
        <template  v-if="diary.imageList && diary.imageList.length === 1">
          <van-image
              v-for="(image,index) in diary.imageList"
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
        <template v-else-if="diary.imageList && diary.imageList.length > 1">
          <div class="image-container" >
            <van-image
                v-for="(image,index) in diary.imageList"
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
  </div>
  </van-skeleton>
</template>

<script>
import userCard from '@/components/profile/card'
import { ImagePreview } from 'vant';
export default {
  name: "detail",
  components:{
    userCard
  },
  data(){
    return{
       diary: {},
       loading: true
    }
  },
  mounted() {
    this.getData()
  },
  methods:{
    preview(index){
      ImagePreview({
        images: this.diary.imageList,
        startPosition: index,
      });
    },
    getData(){
      this.$axios.post('/diary/detail').then((res)=>{
        console.log(res.data)
        this.diary = res.data
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>

.diary-detail{
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  //border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #e6e6e6;
  box-sizing: border-box;
  padding: 0.5rem 0.7rem 0.7rem;

  .title{
    margin: 0.3rem 0 !important;
    font-weight: 500;
    font-size: 1.4rem;
  }
  .diary-body{
    width: 100%;
    font-size: 0.9rem;
    color: #000;
    .detail{
      margin: 0.4rem 0 0.7rem;
      line-height: 1.5rem;
    }
    .image-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      //padding-bottom: 0.6rem;
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
  .bottom-info{
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 0.8rem;
    margin-top: 0.3rem;
    div{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.7rem;
      margin-right: 0.7rem;
      span{
        margin-left: 0.3rem;
      }
    }
    svg{
      margin-left: auto;
    }
  }
}
</style>
