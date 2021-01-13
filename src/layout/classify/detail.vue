<template>
    <div class="main-layout">
      <navbar title="#旅游" :placeholder="placeholder" @rightClick="rightClick" ></navbar>
      <classify-view></classify-view>
    </div>
</template>

<script>
import navbar from '@/components/navbar/other'
import classifyView from '@/views/classify/detail'
export default {
  name: "detail",
  components:{
    navbar,
    classifyView
  },
  data(){
    return{
      placeholder:false
    }
  },
  methods:{
    rightClick(){
      this.$toast('右边点击')
    }
  }
}
</script>

<style scoped>

</style>
