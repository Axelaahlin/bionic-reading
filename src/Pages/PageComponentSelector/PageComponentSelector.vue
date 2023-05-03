<script lang="ts" setup>
import { ref, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { getSanityData } from '@/client'
import { usePiniaStore } from '@/stores/pinia'

import Translate from '../Translate/Translate.vue'
import Startpage from '../Startpage/Startpage.vue'

const route = useRouter()

const currentRouteName = ref(route.currentRoute.value.name)
const currentPageData = ref({
  title: '',
  preamble: '',
  titleTextBlocks: [],
})

onBeforeMount(async () => {
  const data = await getSanityData(
    `*[_type == "${currentRouteName.value as string}"]`
  )

  currentPageData.value.title = data[0].title
  currentPageData.value.preamble = data[0].preamble
  currentPageData.value.titleTextBlocks = data[0].titleTextBlocks
})

watch(
  () => route.currentRoute.value.name,
  (newCurrentRoute) => {
    currentRouteName.value = newCurrentRoute
  }
)
</script>

<template>
  <main class="main">
    <Startpage
      :data="currentPageData"
      v-if="currentRouteName === 'startpage'"
    />
    <Translate v-if="currentRouteName === 'translate'" />
  </main>
</template>
