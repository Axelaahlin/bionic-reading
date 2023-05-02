<script lang="ts" setup>
import { ref, watch } from 'vue'
import Translate from '../Translate/Translate.vue'
import Startpage from '../Startpage/Startpage.vue'

import { useRouter } from 'vue-router'
const route = useRouter()

const currentRouteName = ref(route.currentRoute.value.name)

watch(
  () => route.currentRoute.value.name,
  (newCurrentRoute) => {
    currentRouteName.value = newCurrentRoute
  }
)

const startpageData = {
  title: 'Huvudrubrik',
  preamble:
    'Detta är en text som beskriver sidan lite snabbt eller försöker fånga besökarens uppmärksamhet.',
}
</script>

<template>
  <main class="main">
    <Startpage
      v-if="currentRouteName === 'startpage' && startpageData"
      :data="startpageData"
    />
    <Translate v-if="currentRouteName === 'translate'" />
  </main>
</template>
