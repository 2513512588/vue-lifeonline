<template>
  <div class="diary-container">
<!--    <van-pull-refresh-->
<!--        v-model="refreshing"-->
<!--        success-text="刷新成功"-->
<!--        @refresh="onRefresh"-->
<!--    >-->
<!--      <van-list-->
<!--          v-model="loading"-->
<!--          :finished="finished"-->
<!--          finished-text="没有更多了"-->
<!--          @load="onLoad"-->
<!--      >-->
<!--        -->
<!--        <van-skeleton title avatar :row="5" :loading="loading" round />-->
<!--      </van-list>-->
<!--    </van-pull-refresh>-->
    <list-load @load="onLoad" @refresh="onRefresh">
      <diary-item  v-for="item in list" :data="item" :key="item.id" ></diary-item>
    </list-load>
  </div>
</template>

<script>
import diaryItem from '@/components/diary/item'
import listLoad from '@/components/list-load'
export default {
  name: "diary-list",
  props:{
    param: Object,
    default: {}
  },
  components:{
    diaryItem,
    listLoad
  },
  data(){
    return{
      list:[],
      refreshing: false,
      loading: true,
      finished: false,
      offsetId: 0
    }
  },
  methods:{
    onRefresh(callback) {
      let currentNum = this.list.length
      this.getList(true,()=>{
        this.refreshing = false;
        this.$notify({
          type: 'primary',
          duration: 800,
          background: 'rgba(112,90,246,0.7)',
          message: `已为你推荐${this.list.length - currentNum}条新内容`
        });
      })
      callback && callback()
    },
    onLoad(callback) {
      this.getList(false,callback)
    },
    getList(refresh,callback){
      this.list.length > 0  && (refresh ? this.offsetId = this.list[0].index : this.offsetId = this.list[this.list.length - 1].index)
      this.$axios.post("/diary/list", this.param).then((res)=>{
        refresh ? this.list = res.data.concat(this.list) : this.list = this.list.concat(res.data)
      }).catch((err)=>{
        this.$notify({
          type: 'warning',
          message: err.message || '数据加载失败!'
        })
      }).finally(()=>{
        callback && callback()
      })
    }
  }
}
</script>

<style scoped lang="less">
.diary-container {
  /*padding: 2.9rem 0;*/
  /*position: relative;*/
  /*top: 3.8rem;*/
  //padding-bottom: 6rem;

}
</style>
