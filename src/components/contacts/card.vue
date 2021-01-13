<template>
  <van-contact-card
      type="edit"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="onEdit"
  />
</template>

<script>
export default {
  name: "list",
  data(){
    return{
      currentContact: {
        name: '张三',
        tel: '13000000000',
      },
    }
  },
  methods:{
    onEdit() {

    },
  }
}
</script>

<style scoped>

</style>
