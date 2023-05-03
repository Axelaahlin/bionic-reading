<script lang="ts" setup>
import { PropType } from 'vue'
import { StartpageInterface } from './interface'
import { usePiniaStore } from '@/stores/pinia'
import TitleTextBlock from '@/components/TitleTextblock/TitleTextBlock.vue'
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
      :class="{ bionic: store.bionicMode }"
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
    />

    <TitleTextBlock
      v-if="props.data.titleTextBlocks"
      v-for="block in props.data.titleTextBlocks"
      :data="block"
    />
  </div>
</template>

<style lang="scss">
.start-page {
  padding: 10px;

  h2 {
    color: brown;
    font-size: 32px;
    margin-bottom: 10px;
    &.bionic {
      font-weight: normal;
    }
  }
}
</style>
