<script setup>
import { inject, ref } from 'vue'
import Segment from './Segment.vue'
import SegmentSmall from './SegmentSmall.vue'

const props = defineProps({
  journey: {},
  id: String,
})

let isExpanded = ref(false)

function onToggleExpand(id) {
  if (props.id === id) {
    isExpanded.value = !isExpanded.value
  }
}
</script>

<template lang="pug">
.journey
  Transition(name="fade")
    .expanded(v-if="journey.segments.length > 1 && isExpanded")
      Segment(
        :operatingAirline="journey.segments[0].operatingAirline"
        :originPlace="journey.originPlace.code"
        :departureDateTime="journey.departureDateTime"
        :duration="journey.duration"
        :destinationPlace="journey.destinationPlace.code"
        :arrivalDateTime="journey.arrivalDateTime"
        :numStops="journey.segments.length"
        :isExpanded="isExpanded"
        :parentId="id"
        @toggleExpand="onToggleExpand"
      )
      SegmentSmall(
        v-for="(segment, index) in journey.segments"
        :key="`${id}-smallsegment-${index}`"
        :operatingAirline="segment.operatingAirline"
        :originPlace="segment.originPlace.code"
        :departureDateTime="segment.departureDateTime"
        :duration="segment.duration"
        :destinationPlace="segment.destinationPlace.code"
        :arrivalDateTime="segment.arrivalDateTime"
        )
    .collapsed(v-else="!isExpanded")
      Segment(
        :operatingAirline="journey.segments[0].operatingAirline"
        :originPlace="journey.originPlace.code"
        :departureDateTime="journey.departureDateTime"
        :duration="journey.duration"
        :destinationPlace="journey.destinationPlace.code"
        :arrivalDateTime="journey.arrivalDateTime"
        :numStops="journey.segments.length"
        :parentId="id"
        @toggleExpand="onToggleExpand"
      )
  
</template>

<style lang="sass" scoped>
.fade-enter-active
  transition: opacity 0.4s ease

.fade-leave-active
  display: none

.fade-enter-from
  opacity: 0.5

.fade-enter-to
  opacity: 1

.journey
  background: white
  border-radius: 8px

  &:not(:first-child)
    margin-top: 15px
</style>
