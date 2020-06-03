<template>
  <div class="calendar">
    <Clock/>
    <CalendarHeader></CalendarHeader>
    <CalendarBody></CalendarBody>
  </div>
</template>

<script>
import CalendarHeader from '../components/calendar/CalendarHeader'
import CalendarBody from '../components/calendar/CalendarBody'
import Clock from '../components/clock/Clock'
export default {
  components: {
    CalendarHeader,
    CalendarBody,
    Clock
  }
}
</script>
