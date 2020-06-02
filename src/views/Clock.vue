<template>
  <div class="clock">
    <span>{{hours}}</span> : <span>{{minutes}}</span> : <span>{{seconds}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hours: '',
      minutes: '',
      seconds: ''
    }
  },
  created() {
    this.getTime();
  },
  methods: {
    // 获取：时分秒
    getTime(){
      setInterval(()=>{
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
      }, 1000)
    }
  }
}
</script>
<style lang="less">
  .clock {
    font-size: 30px;
    font-family: fantasy;
  }
</style>