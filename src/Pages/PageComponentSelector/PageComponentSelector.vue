<script lang="ts" setup>
import { ref, watch, onBeforeMount } from 'vue'
import Translate from '../Translate/Translate.vue'
import Startpage from '../Startpage/Startpage.vue'
import { usePiniaStore } from '@/stores/pinia'

const store = usePiniaStore()

import { useRouter } from 'vue-router'
const route = useRouter()

const currentRouteName = ref(route.currentRoute.value.name)

watch(
  () => route.currentRoute.value.name,
  (newCurrentRoute) => {
    currentRouteName.value = newCurrentRoute
  }
)

onBeforeMount(async () => {
  pageData.value.titleTextBlocks = await store.setBlocks()
})

const pageData = ref({
  title: '',
  preamble: '',
  titleTextBlocks: [],
})
</script>

<template>
  <main class="main">
    <Startpage :data="pageData" v-if="currentRouteName === 'startpage'" />
    <Translate v-if="currentRouteName === 'translate'" />
  </main>
</template>
