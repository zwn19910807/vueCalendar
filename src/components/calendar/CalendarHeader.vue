<template>
  <div class="calendar-header">
    <div class="title">
      <div class="last">
        <span class="switch-year" @click="goLastYear">&#60;</span>
        <span class="switch-month" @click="goLastMonth">&#60;&#60;</span>
      </div>
      <div class="now">{{year}} 年 {{month}} 月</div>
      <div class="next">
        <span class="switch-month" @click="goNextMonth">&#62;&#62;</span>
        <span class="switch-year" @click="goNextYear">&#62;</span>
      </div>
    </div>
    <div class="week">
      <span v-for="(v,i) in weekArray" :key="i">{{v}}</span>
    </div>
  </div>
</template>

<script>
import { year, month, date, getMonthDays } from './calendar.js';
import { state, mutations, mapMutations } from 'vuex';
export default {
  data() {
    return {
      year: year,
      month: month,
      date: date,
      weekArray: ['日','一','二','三','四','五','六'],
      lastMonth: this.month--,
      nextMonth: this.month++,
      lastMonthYear: this.year--,
      nextMonthYear: this.year++,
    }
  },
  computed: {

  },
  created() {
    let arr = getMonthDays(this.year, this.month, this.date, this.lastMonthYear, this.lastMonth, this.nextMonthYear, this.nextMonth)
    this.updateDays(arr);
  },
  methods: {
    ...mapMutations([
      'updateDays',
      'updateYear',
      'updateMonth',
      'updateDate',
      'updateLastMonth',
      'updateNextMonth',
      'updateLastMonthYear',
      'updateNextMonthYear',
      'updateFlag'
    ]),
    goLastMonth(){
      this.month--;
      this.updateMonth(this.month);
      if(this.month === 0){
        this.month = 12;
        this.year--;
        this.updateMonth(this.month);
        this.updateYear(this.year);
      }
      this.updateDays(getMonthDays(this.year, this.month, this.date, this.lastMonthYear, this.lastMonth, this.nextMonthYear, this.nextMonth));
      this.updateFlag(true);
    },
    goNextMonth(){
      this.month++;
      this.updateMonth(this.month);
      if(this.month === 13){
        this.month = 1;
        this.year++;
        this.updateMonth(this.month);
        this.updateYear(this.year);
      }
      this.updateDays(getMonthDays(this.year, this.month, this.date, this.lastMonthYear, this.lastMonth, this.nextMonthYear, this.nextMonth));
      this.updateFlag(true);
    },
    goLastYear(){
      this.year--;
      this.updateYear(this.year);
      this.updateDays(getMonthDays(this.year, this.month, this.date, this.lastMonthYear, this.lastMonth, this.nextMonthYear, this.nextMonth));
      this.updateFlag(true);
    },
    goNextYear(){
      this.year++;
      this.updateYear(this.year);
      this.updateDays(getMonthDays(this.year, this.month, this.date, this.lastMonthYear, this.lastMonth, this.nextMonthYear, this.nextMonth));
      this.updateFlag(true);
    }
  },
  watch:{
    'month':{ // 监听当前月份，获得：上一月、下一月、上一月所在年份，下一月所在年份
      handler:function(newVal, oldVal){
        if (newVal === 1) {
          this.lastMonth = 12;
          this.nextMonth = 2;
          this.lastMonthYear = this.year - 1;
          this.nextMonthYear = this.year;
        } else if (newVal === 12) {
          this.lastMonth = 11;
          this.nextMonth = 1
          this.lastMonthYear = this.year;
          this.nextMonthYear = this.year + 1;
        } else {
          this.lastMonth = newVal - 1;
          this.nextMonth = newVal + 1;
          this.lastMonthYear = this.year;
          this.nextMonthYear = this.year;
        }
        this.updateDate(this.date);
        this.updateYear(this.year);
        this.updateMonth(this.month);
        this.updateLastMonth(this.lastMonth);
        this.updateNextMonth(this.nextMonth);
        this.updateLastMonthYear(this.lastMonthYear);
        this.updateNextMonthYear(this.nextMonthYear);
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang="less">
  .calendar-header{
    .title{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: 30px;
      .now{
        font-size: 20px;
        color: #42b983;
      }
      .last,.next {
        width: 90px;
        text-align: center;
        cursor: pointer;
        span{
          display: inline-block;
          width: 30px;
          &.switch-year{
            color: brown;
          }
          &.switch-month{
            color: brown;
          }
        }
      }
    }
    .week {
      width: 100%;
      height: 30px;
      line-height: 30px;
      display: flex;
      background-color: #ddd;
      span{
        flex: 1;
        color: #555;
        border: 1px solid #ccc;
      }
    }
  }
</style>