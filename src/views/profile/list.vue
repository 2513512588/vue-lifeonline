<template>
    <div class="user-list-container">
      <list-load :row="1" @load="onLoad" @refresh="onRefresh">
        <user-card v-for="item in list" :key="item.id" :data="item" />
      </list-load>
    </div>
</template>

<script>
import userCard from '@/components/profile/card'
import listLoad from '@/components/list-load'
export default {
  name: "list",
  components:{
    userCard,
    listLoad
  },
  data(){
    return{
      list:[]
    }
  },
  methods:{
    getList(refresh,callback){
      this.$axios.post('/user/list',{}).then(res=>{
        refresh ?  this.list = res.data.concat(this.list) : this.list = this.list.concat(res.data)
        console.log(this.list)
      }).catch(err =>{
        this.$notify({
          type: 'warning',
          message: err.message || '数据加载失败!'
        })
      }).finally(()=>{
        callback && callback()
      })
    },
    onLoad(callback){
      this.getList(false,callback)
    },
    onRefresh(callback){
      this.getList(true,callback)
    }
  }
}
</script>

<style scoped lang="less">
  .user-list-container{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0.3rem 0.8rem;
    .user-card{
      padding: 0.6rem 0;
      margin: 0 auto;
    }
  }
</style>
<style lang="less">
  .user-list-container{
    .van-skeleton {
      align-items: center;
    }
  }
</style>
