<template>
  <div class="calendar-body" @click.stop="changeDate($event)" @blur="handleBlur">
    <span ref="item" v-for="(v,i) in days" :key="i" class="days" :class="v.day === '今天'? 'cur' : ''" :style="{color:v.color}">{{v.day}}</span>
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
  created() {
    document.addEventListener('click', ()=>{
      this.$refs.item.forEach(v=> v.classList.remove('select'));
    })
  },
  methods: {
    changeDate(event){
      Array.from(event.target.parentNode.childNodes).forEach(v=> v.classList.remove('select'));
      event.target.classList.add('select')
    },
    handleBlur(){
      console.log(123);
    }
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
</style>