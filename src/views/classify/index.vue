<template>
  <div class="classify-container">
    <van-search
        v-model="value"
        shape="round"
        placeholder="请输入搜索关键词"
    />
    <van-tabs animated :duration="0.2" swipeable>
      <van-tab title="我的话题">
        <div class="classify-square-wrap">
          <h2>我关注的话题</h2>
          <van-cell-group :border="false">
            <van-cell v-for="item in 9" :key="item.id" :border="false" @click="()=>{$router.push(`/classify/detail?id=${item.id}`)}">
              <template #title>
                <span>原神</span>
              </template>
              <template #label>
                <span>热度1</span>
              </template>
              <template #icon>
                <van-image
                    radius="0.8rem"
                    width="3rem"
                    height="3rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </template>
              <template #right-icon>
                <van-icon name="diamond" />
              </template>
            </van-cell>
          </van-cell-group>
        </div>
      </van-tab>
      <van-tab title="话题广场">
        <div class="classify-mine-wrap">
          <van-sidebar v-model="activeKey" class="tab-list">
            <van-sidebar-item  title="推荐" />
          </van-sidebar>
          <div class="classify-item-list">
            <van-cell-group :border="false">
              <van-cell v-for="item in 9" :key="item.id" @click="()=>{$router.push(`/classify/detail?id=${item.id}`)}">
                <template #title>
                  <span>原神</span>
                </template>
                <template #label>
                  <span>关注78W&nbsp; 帖子78W</span>
                </template>
                <template #icon>
                  <van-image
                      radius="0.8rem"
                      width="3rem"
                      height="3rem"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                </template>
                <template #extra>
                  <van-button round size="mini" type="info">关注</van-button>
                </template>
              </van-cell>
            </van-cell-group>
          </div>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      activeKey:0,
      value: '',
      subjectList: []
    }
  }
}
</script>

<style scoped lang="less">
.classify-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .van-tabs{
    overflow: hidden;
    .classify-square-wrap{
      width: 95%;
      margin: 0.8rem auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: #fff;
      border-radius: 0.5rem;
      box-sizing: border-box;
      padding: 0.4rem 0.5rem;
      h2{
        font-size: 0.9rem;
        font-weight: 500;
        margin: 0.5rem 0;
      }
      .van-cell-group{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .van-cell{
          width: 50%;
          padding: 0.5rem;
          .van-image{
            margin-right: 0.5rem;
          }
          .van-icon{
            color: #5593e1;
          }
        }
      }
    }
    .classify-mine-wrap{
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .tab-list{
        width: 22%;
        background: none;
      }
      .classify-item-list{
        width: 78%;
        .van-cell-group{
          width: 100%;
          height: 78vh;
          overflow-y: auto;
          .van-image{
            margin-right: 0.5rem;
            align-self: center;
          }
          .van-button{
            align-self: center;
            padding: 0.2rem 0.8rem;
            background-color: rgb(243,241,250);
            color: rgb(101,86,190);
            border-color: rgb(243,241,250);
          }
        }
      }
    }
  }
}
</style>
