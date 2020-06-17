<template>
<div style="position:relative;">
  <div class="calendar-body" @click.stop="changeDate($event)" @blur="handleBlur">
    <span ref="item" v-for="(v,i) in days" :key="i" class="days" :class="v.day === '今天'? 'cur' : ''" :style="{color:v.color}">{{v.day}}</span>
  </div>
  <div class="btn-switch" @click="switchPanel">{{flag?'折叠':'展开'}}</div>
</div>
</template>

<script>
import { year, month, date, getMonthDays, getToggleDates } from './calendar.js';
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      year: year,
      month: month,
      date: date,
      lastMonth: this.month--,
      nextMonth: this.month++,
      lastMonthYear: this.year--,
      nextMonthYear: this.year++,
      flag: true
    }
  },
  computed: {
    ...mapState(['days'])
  },
  created() {
    document.addEventListener('click', ()=>{
      this.$refs.item.forEach(v=> v.classList.remove('select'));
    })
  },
  methods: {
    ...mapMutations(['updateDays']),
    changeDate(event){
      Array.from(event.target.parentNode.childNodes).forEach(v=> v.classList.remove('select'));
      event.target.classList.add('select')
    },
    handleBlur(){
      console.log(123);
    },
    switchPanel(){
      this.flag = !this.flag;
      this.flag
      ? this.updateDays(getMonthDays(this.year, this.month, this.date, this.lastMonthYear, this.lastMonth, this.nextMonthYear, this.nextMonth))
      : this.updateDays(getToggleDates(this.year, this.month, this.date, this.lastMonthYear, this.lastMonth, this.nextMonthYear, this.nextMonth));
    }
  },
}
</script>
<style lang="less">
  .calendar-body{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #eee;
    .days{
      display: inline-block;
      width: calc( 100% / 7 );
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      &.cur{
        font-weight: 700;
        background-color: orange!important;
        border-radius: 50%;
      }
      &.select{
        background-color: skyblue;
        border-radius: 50%;
      }
    }
  }
  .btn-switch{
    background-color: #eee;
    width: 40px;
    height: 35px;
    border-radius: 0 0 50% 50%;
    position: absolute;
    bottom: -34px;
    right: 0;
    line-height: 36px;
    font-size: 14px;
    color: #aaa;
  }
</style>