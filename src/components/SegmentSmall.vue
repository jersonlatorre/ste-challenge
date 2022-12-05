<script setup>
import { computed, inject } from 'vue'
import { minutesToHoursAndMinutes, formatDate, getAirLineName, backgroundColor } from '../common/helpers'

const props = defineProps({
  operatingAirline: String,
  originPlace: String,
  departureDateTime: String,
  duration: Number,
  destinationPlace: String,
  arrivalDateTime: String,
})

const carriers = inject('carriers')

const duration = computed(() => {
  return minutesToHoursAndMinutes(props.duration)
})
</script>

<template lang="pug">
.segment-small
  .operating-airline-logo(:style="{backgroundColor: backgroundColor(operatingAirline)}") {{ operatingAirline }}
  .left
    .origin-place {{ originPlace }}
    .departure-date-time  {{ formatDate(departureDateTime) }}
  .middle
    .operating-airline-name {{ getAirLineName(operatingAirline, carriers) }}
    .line
    .duration-and-stops {{ duration }}
  .right
    .destination-place {{ destinationPlace }}
    .arrival-date-time  {{ formatDate(arrivalDateTime) }}
</template>

<style lang="sass" scoped>
.segment-small
  height: 80px
  display: grid
  grid-template-columns: 80px 1fr 1fr 1fr
  padding: 10px
  padding-left: 50px

  .operating-airline-logo
    background: gray
    display: grid
    place-items: center
    font-size: 2.6rem
    font-weight: bold
    border-radius: 8px
    color: white
    transform: scale(0.8)

  .left, .right, .middle
    display: grid
    align-items: center

  .left
    justify-content: flex-start
    margin-left: 25px
    text-align: left

    .origin-place
      font-weight: bold
      font-size: 1.5rem

  .right
    justify-content: flex-end
    margin-right: 25px
    text-align: right

    .destination-place
      font-weight: bold
      font-size: 1.5rem

  .middle
    justify-content: center
    text-align: center

    .line
      width: 200px
      height: 3px
      background-color: #eee
</style>
