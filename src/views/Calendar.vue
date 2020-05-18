<template>
  <div class="calendar">
    <CalendarHeader></CalendarHeader>
    <CalendarBody></CalendarBody>
  </div>
</template>

<script>
import CalendarHeader from '../components/calendar/CalendarHeader'
import CalendarBody from '../components/calendar/CalendarBody'
export default {
  components: {
    CalendarHeader,
    CalendarBody
  }
}
</script>
