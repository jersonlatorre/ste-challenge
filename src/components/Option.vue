<script setup>
import { inject } from 'vue'
import Journey from './Journey.vue'

const props = defineProps({
  option: {},
  id: String,
})
</script>

<template lang="pug">
.option
  Journey(
    v-for="(journey, index) in option.journeys"
    :journey="journey"
    :key="`${id}-journey-${index}`"
    :id="`${id}-journey-${index}`"
  )
</template>

<style lang="sass" scoped>
.option
  position: relative
  background: white
  border-radius: 10px
  padding: 15px
  background: #f5f5f5

  &:not(:first-child)
    margin-top: 20px
</style>
