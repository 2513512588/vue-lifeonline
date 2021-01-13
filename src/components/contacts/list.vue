<template>
  <van-contact-list
      v-model="chosenContactId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
  />
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      chosenContactId: '1',
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
    onAdd() {
      this.$toast('新增');
    },
    onEdit(contact) {
      this.$toast('编辑' + contact.id);
    },
    onSelect(contact) {
      this.$toast('选择' + contact.id);
    },
  },
}
</script>

<style scoped>

</style>
