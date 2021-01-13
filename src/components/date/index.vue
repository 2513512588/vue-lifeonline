<template>
    <span>{{datetime}}</span>
</template>

<script>
export default {
  name: "datetime",
  props:{
    value:String
  },
  data(){
    return{
      datetime: ''
    }
  },
  mounted() {
    this.setTime()
    this.$store.commit('pushEvent', this.setTime)
    this.$store.commit('startDateUtilTimer')
  },
  methods:{
    setTime(){
      this.datetime = this.$dateUtils.relativeTime(this.value)
    }
  }
}
</script>

<style scoped>

</style>
