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
  numStops: Number,
  isExpanded: Boolean,
  parentId: String,
})

const carriers = inject('carriers')

const emit = defineEmits(['toggleExpand'])

const duration = computed(() => {
  return minutesToHoursAndMinutes(props.duration)
})

const numStops = computed(() => {
  if (props.numStops == 1) return 'direct'
  else return `${props.numStops - 1} stops ${props.isExpanded ? '-' : '+'}`
})

const stopsStyle = computed(() => {
  let fontWeight = props.numStops > 1 ? 'bold' : 'normal'
  let textDecoration = props.numStops > 1 ? 'underline' : 'none'
  let cursorPointer = props.numStops > 1 ? 'pointer' : 'auto'
  return {
    fontWeight: fontWeight,
    textDecoration: textDecoration,
    cursor: cursorPointer,
  }
})

function onStopsClick() {
  if (props.numStops == 1) return
  emit('toggleExpand', props.parentId)
}
</script>

<template lang="pug">
.segment
  .operating-airline-logo(:style="{backgroundColor: backgroundColor(operatingAirline)}") {{ operatingAirline }}
  .left
    .origin-place {{ originPlace }}
    .departure-date-time  {{ formatDate(departureDateTime) }}
  .middle
    .operating-airline-name {{ getAirLineName(operatingAirline, carriers) }}
    .line
    .duration-and-stops
      span {{ duration }}
      span {{ ' . ' }}
      span(@click="onStopsClick" :style="stopsStyle") {{ numStops }}
  .right
    .destination-place {{ destinationPlace }}
    .arrival-date-time  {{ formatDate(arrivalDateTime) }}
</template>

<style lang="sass" scoped>
.segment
  height: 80px
  display: grid
  grid-template-columns: 80px 1fr 1fr 1fr
  padding: 10px

  .operating-airline-logo
    background: gray
    display: grid
    place-items: center
    font-size: 2.7rem
    font-weight: bold
    border-radius: 8px
    color: white

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
