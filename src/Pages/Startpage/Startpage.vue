<script lang="ts" setup>
import { PropType } from 'vue'
import { StartpageInterface } from './interface'
import { usePiniaStore } from '@/stores/pinia'
const store = usePiniaStore()

const props = defineProps({
  data: {
    type: Object as PropType<StartpageInterface>,
    required: true,
  },
})
</script>

<template>
  <div class="start-page">
    <h2
      v-if="props.data.title"
      v-html="
        store.bionicMode
          ? store.translateToBionicReading(props.data.title)
          : props.data.title
      "
    />
    <p
      v-if="props.data.preamble"
      v-html="
        store.bionicMode
          ? store.translateToBionicReading(props.data.preamble)
          : props.data.preamble
      "
    ></p>
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
