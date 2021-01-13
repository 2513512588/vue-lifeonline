<template>
  <van-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      set-default-label="设为默认联系人"
      @save="onSave"
      @delete="onDelete"
  />
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      editingContact: {},
    };
  },
  methods: {
    onSave(contactInfo) {
      this.$toast('保存',contactInfo);
    },
    onDelete(contactInfo) {
      this.$toast('删除',contactInfo);
    },
  },
}
</script>

<style scoped>

</style>
