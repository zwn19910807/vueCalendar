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
        this.minutes = new Date().getMinutes() < 10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        this.seconds = new Date().getSeconds() < 10 ? '0'+new Date().getSeconds() : new Date().getSeconds();;
      }, 1000)
    }
  }
}
</script>
<style lang="less">
  .clock {
    font-size: 50px;
    font-family: fantasy;
    margin: 30px 0;
  }
</style>