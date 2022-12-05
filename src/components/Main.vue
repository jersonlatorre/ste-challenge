<script setup>
import { provide, ref, computed } from 'vue'
import Option from './Option.vue'
import Filters from './Filters.vue'

const options = ref([])
const carriers = ref([])
let filterStops = ref('any')

provide('carriers', carriers)

async function fetchData() {
  const res = await fetch('./data/data.json').catch(() => {
    console.error('Data not loaded.')
  })

  let data = await res.json()
  options.value = data.options
  carriers.value = data.carriers
}

function onChangeFilterStops(e) {
  filterStops.value = e
}

let filteredOptions = computed(() => {
  // filter stops
  return options.value.filter((option) => {
    return option.journeys.some((journey) => {
      switch (filterStops.value) {
        case 'any':
          return true
        case 'direct':
          return journey.segments.length == 1
        case 'stops':
          return journey.segments.length > 1
      }
    })
  })
})

await fetchData()
</script>

<template lang="pug">
#options
  h1 Flight Options
  Filters(@filterStopChanged="onChangeFilterStops")
  Option(
    v-for="(option, index) in filteredOptions"
    :option="option" 
    :id="`option-${index}`"
    :key="`option-${index}`"
  )
</template>

<style lang="sass" scoped>
#options
  width: 80vw
  max-width: 800px
  min-width: 640px

  h1
    margin-bottom: 40px
</style>
