// 当前的：年月日
let year =  new Date().getFullYear();
let month = new Date().getMonth() + 1;
let date = new Date().getDate();

// 根据年、月，获取一个月的天数
const getDaysByMonth = (year, month, color = "#000") => {
  let days = [];
  if([1,3,5,7,8,10,12].includes(month)){    // 有31天的月份
    days = [...(new Array(31)).keys()].map(v => v + 1);
  } else if (month === 2 && year % 4 === 0) {   // 闰年2月
    days = [...(new Array(29)).keys()].map(v => v + 1);
  } else if (month === 2 && year % 4 !== 0) { // 非闰年2月
    days = [...(new Array(28)).keys()].map(v => v + 1);
  } else {                                // 正常30天的月份
    days = [...(new Array(30)).keys()].map(v => v + 1);
  }
  return days.map(v => {
    return v = {
      year: year,
      month: month,
      day: v,
      color: color
    }
  })
}

// 根据年、月，得出当月1号是星期几
const getWeekday = (year, month) => {
  let nowDate = new Date('' + year + ',' + month + ',' + '01'); // 当前年月的01号
  return nowDate.getDay();
}

// 如果一个月的天数数组中，有当天的日期，改为"今天"
const getToday = (year, month, date) => {
  let curDays;
  if (year === new Date().getFullYear() && month === new Date().getMonth() + 1) {
    curDays = getDaysByMonth(year, month);
    let index = curDays.findIndex(v => v.day === date);
    curDays[index].day = "今天";
  } else {
    curDays = getDaysByMonth(year, month);
  }
  return curDays;
}

// 获取日历上天数的数组（包含上个月的后几天，下个月的前几天）
const getMonthDays = (year, month, date, lastMonthYear, lastMonth, nextMonthYear, nextMonth) => {
  let curDays = getToday(year, month, date);
  let n = 7 - curDays.length % 7;
  let w = getWeekday(year, month); // 会得到一个数字表示星期几
  let L = getDaysByMonth(lastMonthYear, lastMonth, "#999");
  let N = getDaysByMonth(nextMonthYear, nextMonth, "#999");
  switch (w) {
    case 0: // 说明当月1号是周日
      curDays = [...L.slice(-7),...curDays,...N.slice(0,n)]
      break;
    case 1: // 说明当月1号是周一
      curDays = [...L.slice(-1),...curDays,...N.slice(0,n)]
      break;
    case 2: // 说明当月1号是周二
      curDays = [...L.slice(-2),...curDays,...N.slice(0,n)]
      break;
    case 3: // 说明当月1号是周三
      curDays = [...L.slice(-3),...curDays,...N.slice(0,n)]
      break;
    case 4: // 说明当月1号是周四
      curDays = [...L.slice(-4),...curDays,...N.slice(0,n)]
      break;
    case 5: // 说明当月1号是周五
      curDays = [...L.slice(-5),...curDays,...N.slice(0,n)]
      break;
    case 6: // 说明当月1号是周六
      curDays = [...L.slice(-6),...curDays,...N.slice(0,n)]
      break;
    default:
      break;
  }
  return curDays;
}

// 获取日历“展开/折叠”后的日期
const getToggleDates = (year, month, date, lastMonthYear, lastMonth, nextMonthYear, nextMonth) => {
  let newArray = [];
  let curDays = getMonthDays(year, month, date, lastMonthYear, lastMonth, nextMonthYear, nextMonth);
  // 如果当年当月，展示当天所在行
  if (year === new Date().getFullYear() && month === new Date() + 1) {
    if (index <= 6) {
      newArray = curDays.slice(0, 7);
    } else if (index <= 13) {
      newArray = curDays.slice(7, 14);
    } else if (index <= 20) {
      newArray = curDays.slice(14, 21);
    } else if (index <= 27) {
      newArray = curDays.slice(21, 28);
    } else if (index <= 34) {
      newArray = curDays.slice(28, 35);
    } else {
      newArray = curDays.slice(35);
    }
  } else {  // 不是当月，随便展示一行吧
    newArray = curDays.slice(14, 21);
  }
  return newArray;
}

module.exports = {
  year,
  month,
  date,
  getDaysByMonth,
  getWeekday,
  getMonthDays,
  getToggleDates
}