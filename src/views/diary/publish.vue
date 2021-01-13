<template>
  <div class="publish-panel">
    <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="选择话题"
        placeholder="点击选择话题"
        @click="showPicker = true"
    />
    <van-popup safe-area-inset-bottom v-model="showPicker" round position="bottom">
      <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
      />
    </van-popup>
    <van-field v-model="title" label="标题" />
    <van-field v-model="price" type="number" :autofocus="show" label="价格" @touchstart.native.stop="(e)=>{e.preventDefault();show = true}" />
    <van-field
        v-model="message"
        rows="2"
        autosize
        label="正文"
        type="textarea"
        maxlength="50"
        placeholder="请输入正文"
        show-word-limit
    />
    <van-field name="uploader" label="图片">
      <template #input>
        <van-uploader v-model="uploader" />
      </template>
    </van-field>

    <van-number-keyboard
        :show="show"
        theme="custom"
        :extra-key="['00', '.']"
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
    />

    <div class="bottom-input-options-wrap">
      <van-icon name="smile-o" size="1.5rem" color="#333" />
      <van-icon name="photo-o" size="1.5rem" color="#333" />
    </div>

  </div>
</template>

<script>
export default {
  name: "publishDiary",
  data() {
    return {
      message:'',
      title:'',
      value:'',
      showPicker:false,
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      show: false,
      price: ''
    };
  },
  methods:{
    onCancel() {

    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onInput(value) {
      this.price += value
    },
    onDelete() {
      this.price = this.price.substr(0,this.price.length -1 )
    },
  }
}
</script>

<style scoped lang="less">
.publish-panel{
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  .bottom-input-options-wrap{
    position: fixed;
    left: 0;
    bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
    bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
    width: 100%;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    border-top: 0.01rem solid #e6e6e6;
    .van-icon{
      margin: 0 0.5rem;
    }
  }
}
</style>
