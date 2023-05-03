<script lang="ts" setup>
import { PropType, onBeforeMount, ref } from 'vue'
import { PageTemplateInterface } from './interface'
import { urlBuilder } from '@/client'
import { usePiniaStore } from '@/stores/pinia'
import TitleTextBlock from '@/components/TitleTextblock/TitleTextBlock.vue'
const store = usePiniaStore()

const props = defineProps({
  data: {
    type: Object as PropType<PageTemplateInterface>,
    required: true,
  },
})

// const titleTextBlocks = ref([])

// console.log(props.data.titleTextBlocks.length)
// for(let i = 0; i <= props.data.titleTextBlocks.length; i++){

//   titleTextBlocks.value.push(props.data.titleTextBlocks[i])
// }
</script>

<template>
  <div class="page">
    <div class="page-hero" v-if="props.data?.heroImage">
      <img
        :src="(urlBuilder(props.data.heroImage) as unknown as string)"
        alt=""
      />
      <h2
        v-if="props.data?.title"
        :class="{ bionic: store.bionicMode }"
        v-html="
          store.bionicMode
            ? store.translateToBionicReading(props.data.title)
            : props.data.title
        "
      />
    </div>

    <div class="page-content">
      <p
        v-if="props.data?.preamble"
        v-html="
          store.bionicMode
            ? store.translateToBionicReading(props.data.preamble)
            : props.data.preamble
        "
      />
      <div class="title-text-blocks">
        <TitleTextBlock
          v-if="props.data?.titleTextBlocks"
          v-for="block in props.data.titleTextBlocks"
          :data="block"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  .page {
    padding-bottom: 50px;
    .bionic {
      font-weight: normal;
    }

    &-hero {
      position: relative;
      img {
        width: 100%;
        height: 50%;
      }
      h2 {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        bottom: 5px;
        padding: 10px 20px;
        background-color: white;
      }
    }

    &-content {
      padding: 0 20px;
    }
  }
}
</style>
