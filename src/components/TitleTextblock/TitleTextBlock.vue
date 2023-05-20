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
      <h3 v-if="props.data.title">
        {{ props.data.title }}
      </h3>
      <p v-if="props.data.text">{{ props.data.text }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.title-text-block {
  background-color: white;
  box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.6);
  padding: var(--spacing-m) var(--spacing-m) var(--spacing-l) var(--spacing-l);
  border-radius: var(--border-radius-m);
  margin: var(--spacing-1xl) var(--spacing-none);
  cursor: pointer;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: unset;
  }

  h3 {
    color: var(--color-red);
    margin-bottom: var(--spacing-m);
  }

  &__image {
    margin-right: var(--spacing-xl);
    img {
      width: 300px;
      height: 200px;
    }
  }
}
</style>
