<script setup>
const emit = defineEmits(['filterStopChanged'])

function onChangeFilterStops(e) {
  emit('filterStopChanged', e.target.value)
}
</script>

<template lang="pug">
#filters
  .stops
    span stops:
    select(name="filter-stops" id="filter-stops" @change="onChangeFilterStops($event)" small)
      option(value="any") Any
      option(value="direct") Direct
      option(value="stops") Stops
</template>

<style lang="sass" scoped>
#filters
  display: grid
  grid-template-columns: 150px 100px
  text-align: left

  select
    width: 140px
    height: 30px
    border: 1px solid #ddd
    border-radius: 4px
    margin-left: 10px
    padding: 0 3px

    &:focus
      box-shadow: none
      outline: none

  select[small]
    width: 80px
</style>
