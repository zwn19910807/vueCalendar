<template>
  <div class="calendar-body">
    <span class="days" v-for="(v,i) in days" :key="i" :style="{backgroundColor:(v.day === '今天' ? 'yellow':'#fff')}">{{v.day}}</span>
  </div>
</template>

<script>
import { getDaysByMonth } from './calendar.js';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['days'])
  },
  methods: {
    
  },
}
</script>
<style lang="less">
  .calendar-body{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .days{
      display: inline-block;
      width: calc( 100% / 7 );
      height: 50px;
      line-height: 50px;
    }
  }
</style>