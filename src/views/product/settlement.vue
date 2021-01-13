<template>
  <!--  <van-contact-edit-->
  <!--      is-edit-->
  <!--      show-set-default-->
  <!--      :contact-info="editingContact"-->
  <!--      set-default-label="设为默认联系人"-->
  <!--      @save="onSave"-->
  <!--      @delete="onDelete"-->
  <!--  />-->
  <div class="settlement-container">
    <!--    <van-divider content-position="left">选择联系人</van-divider>-->
    <!--    <van-contact-list-->
    <!--        v-model="chosenContactId"-->
    <!--        :list="list"-->
    <!--        default-tag-text="默认"-->
    <!--        @add="onAdd"-->
    <!--        @edit="onEdit"-->
    <!--        @select="onSelect"-->
    <!--    />-->
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>填写信息</van-step>
      <van-step>支付货款</van-step>
      <van-step>购买成功</van-step>
    </van-steps>
    <van-divider content-position="left">商品信息</van-divider>
    <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        origin-price="10.00"
    />
    <van-divider content-position="left">联系人</van-divider>
    <contacts-card></contacts-card>
    <van-divider content-position="left">订单备注</van-divider>
    <van-field
        v-model="message"
        rows="2"
        autosize
        label="备注"
        type="textarea"
        maxlength="50"
        placeholder="选填,请先和商家协商一致"
        show-word-limit
    />
    <van-button type="primary" block>下一步</van-button>
  </div>
</template>

<script>
import contactsCard from '@/components/contacts/card'
export default {
  name: "settlement",
  components:{
    contactsCard
  },
  data() {
    return {
      editingContact: {},
      chosenContactId: '1',
      active: 1,
      message:'',

      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
        },
      ],
    };
  },
  methods: {
    onSave() {

    },
    onDelete() {

    },
    onAdd() {

    },
    onSelect() {

    },
  }
}
</script>

<style scoped lang="less">
.settlement-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //justify-content: space-around;
  .van-card,.van-steps{
    width: 100%;
    box-sizing: border-box;
    margin-top: 0;
  }
  .van-button{
    position: absolute;
    bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
    bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
  }
}
</style>
