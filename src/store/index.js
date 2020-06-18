import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag: true,
    days: [],
    year: '',
    month: '',
    date: '',
    lastMonth: '',
    nextMonth: '',
    lastMonthYear: '',
    nextMonthYear: '',
  },
  mutations: {
    updateDays(state, data) {
      state.days = data;
    },
    updateYear(state, data) {
      state.year = data;
    },
    updateMonth(state, data) {
      state.month = data;
    },
    updateDate(state, data) {
      state.date = data;
    },
    updateLastMonth(state, data) {
      state.lastMonth = data;
    },
    updateNextMonth(state, data) {
      state.nextMonth = data;
    },
    updateLastMonthYear(state, data) {
      state.lastMonthYear = data;
    },
    updateNextMonthYear(state, data) {
      state.nextMonthYear = data;
    },
    updateFlag(state, data) {
      state.flag = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
