<!-- 
  Denna komponent fungerar bas för applicationen, den hämtar rätt data beroende på vad namnet på den nuvarande routen är 
  och skickar vidare till pageTemplate som renderar datat.
-->

<script lang="ts" setup>
import { ref, watch, onBeforeMount } from 'vue'
import PageTemplate from '@/Pages/PageTemplate/PageTemplate.vue'
import { usePiniaStore } from '@/stores/pinia'
const store = usePiniaStore()

import { useRouter } from 'vue-router'
const route = useRouter()

const currentRouteName = ref()
const currentPageData = ref()

onBeforeMount(async () => {
  currentRouteName.value = route.currentRoute.value.name
  // Hämtar rätt data genom att kolla vad routen har för namn.
  currentPageData.value = await store.getCurrenPageData(currentRouteName.value)
})

// Kollar på värdet av sidans namn och om det ändras så hämtas nytt data för att rendera rätt på nästa sida.
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

<!-- Renderas PageTemplate beorende på lite olika parametrar beroende på vad man vill visa -->
<template>
  <main class="main">
    <PageTemplate
      v-if="
        ((currentRouteName === 'pageone' || currentRouteName === 'pagetwo') &&
          currentPageData) ||
        (currentRouteName === 'translate' && !currentPageData)
      "
      :data="currentPageData ? currentPageData : null"
    />
  </main>
</template>
