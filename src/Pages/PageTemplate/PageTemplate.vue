<!-- 
    Denna komponent renderar ut allt på sidan beroende på vad för data den får och om den inte får något data så visas min devPage 
    där jag har suttit och testat olika saker. 
 -->

<script lang="ts" setup>
import { usePiniaStore } from '@/stores/pinia'
import { useRouter } from 'vue-router'
import { urlBuilder } from '@/client'
import { PropType } from 'vue'

import TitleTextBlock from '@/components/TitleTextblock/TitleTextBlock.vue'
import { PageTemplateInterface } from './interface'
import Translate from '../Translate/Translate.vue'

const store = usePiniaStore()
const route = useRouter()

const props = defineProps({
  data: {
    type: Object as PropType<PageTemplateInterface>,
    required: false,
  },
})
</script>

<template>
  <div class="page">
    <div class="page-hero" v-if="props.data?.heroImage">
      <img :src="(urlBuilder(props.data.heroImage) as unknown as string)" />
      <h2 v-if="props.data?.title">
        {{ props.data.title }}
      </h2>
    </div>

    <div class="page-content">
      <p v-if="props.data?.preamble">{{ props.data.preamble }}</p>
      <div class="title-text-blocks">
        <TitleTextBlock
          v-if="props.data?.titleTextBlocks"
          v-for="block in props.data.titleTextBlocks"
          :data="block"
        />
      </div>
    </div>
    <Translate v-if="route.currentRoute.value.name === 'translate'" />

    <div v-if="!props.data" class="error">
      <h2>Tyvärr kunde innehållet för denna sida inte hämtas ordentligt</h2>
      <p>Prova att ladda om sidan eller försök igen om en stund.</p>
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
