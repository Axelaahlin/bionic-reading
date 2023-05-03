<script lang="ts" setup>
import { ref, watch, onBeforeMount } from 'vue'
import Translate from '../Translate/Translate.vue'
import PageTemplate from '@/Pages/PageTemplate/PageTemplate.vue'
import { usePiniaStore } from '@/stores/pinia'
const store = usePiniaStore()

import { useRouter } from 'vue-router'
const route = useRouter()

const currentRouteName = ref()
const currentPageData = ref()

onBeforeMount(async () => {
  currentRouteName.value = route.currentRoute.value.name
  currentPageData.value = await store.getCurrenPageData(currentRouteName.value)
})

watch(
  () => route.currentRoute.value.name,
  async (newCurrentRoute) => {
    currentRouteName.value = newCurrentRoute
    currentPageData.value = await store.getCurrenPageData(
      currentRouteName.value
    )
  }
)
</script>

<template>
  <main class="main">
    <PageTemplate
      v-if="
        (currentRouteName === 'pageone' || currentRouteName === 'pagetwo') &&
        currentPageData
      "
      :data="currentPageData"
    />

    <Translate v-else-if="currentRouteName === 'translate'" />
  </main>
</template>
