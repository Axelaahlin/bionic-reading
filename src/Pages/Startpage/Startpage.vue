<script lang="ts" setup>
import { PropType, onBeforeMount } from 'vue'
import { StartpageInterface } from './interface'
import { usePiniaStore } from '@/stores/pinia'
const store = usePiniaStore()

const props = defineProps({
  data: {
    type: Object as PropType<StartpageInterface>,
    required: true,
  },
})

console.log(props.data.titleTextBlocks)
</script>

<template>
  <div v-for="block in props.data.titleTextBlocks">
    {{ block }}
  </div>
</template>

<style lang="scss">
.start-page {
  padding: 10px;

  h2 {
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
}
</style>
