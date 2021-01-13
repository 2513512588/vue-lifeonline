<template>
    <van-pull-refresh
        v-model="refreshing"
        success-text="刷新成功"
        @refresh="onRefresh"
    >
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          offset="0"
      >
          <slot></slot>
          <van-skeleton title avatar :row="row" :loading="loading"  />
      </van-list>
    </van-pull-refresh>
</template>

<script>
export default {
  name: "index",
  props:{
    row:{
      type:Number,
      default:5
    }
  },
  data(){
    return{
      refreshing: false,
      loading: false,
      finished: false,
      offsetId: 0
    }
  },
  methods:{
    onRefresh() {
      this.$emit('refresh',()=>{
        this.refreshing = false;
      })
    },
    onLoad() {
      this.$emit('load',()=>{
        this.loading = false
      })
    },
  }
}
</script>

<style scoped>

</style>
