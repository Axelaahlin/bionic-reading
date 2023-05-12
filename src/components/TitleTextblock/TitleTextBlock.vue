<script lang="ts" setup>
import { PropType } from 'vue'
import { TitleTextBlock } from './interface'
import { usePiniaStore } from '@/stores/pinia'
import { urlBuilder } from '@/client'
const store = usePiniaStore()

const props = defineProps({
  data: {
    type: Object as PropType<TitleTextBlock>,
    required: true,
  },
})
</script>

<template>
  <div class="title-text-block">
    <div class="title-text-block__image">
      <img
        v-if="props.data.image"
        :src="(urlBuilder(props.data.image) as unknown as string)"
      />
    </div>
    <div class="title-text-block__details">
      <h3
        :class="{ bionic: store.bionicMode }"
        v-if="props.data.title"
        v-html="store.translateToBionicReading(props.data.title)"
      />
      <p
        v-if="props.data.text"
        v-html="store.translateToBionicReading(props.data.text)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.title-text-block {
  background-color: white;
  box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.6);
  padding: 10px 10px 15px 15px;
  border-radius: 4px;
  margin: 30px 0;
  cursor: pointer;
  display: flex;

  h3 {
    color: brown;
    margin-bottom: 10px;
    &.bionic {
      font-weight: normal;
    }
  }

  &__image {
    margin-right: 20px;
    img {
      width: 300px;
      height: 200px;
    }
  }
}
</style>
