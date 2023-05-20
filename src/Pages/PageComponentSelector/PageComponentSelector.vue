<!-- 
  Denna komponent fungerar bas för applicationen, den hämtar rätt data beroende på vad namnet på den nuvarande routen är 
  och skickar vidare till pageTemplate som renderar datat.
-->

<script lang="ts" setup>
import { ref, watch, onBeforeMount } from 'vue'
import { usePiniaStore } from '@/stores/pinia'
import { useRouter } from 'vue-router'

import PageTemplate from '@/Pages/PageTemplate/PageTemplate.vue'

const store = usePiniaStore()
const route = useRouter()

const currentRouteName = ref('')
const currentPageData = ref()

onBeforeMount(async () => {
  currentRouteName.value = route.currentRoute.value.name as string

  // Hämtar rätt data genom att kolla vad routen har för namn.
  currentPageData.value = await store.getCurrenPageData(currentRouteName.value)
})

// Kollar på värdet av sidans namn och om det ändras så hämtas nytt data för att rendera rätt på nästa sida.
watch(
  () => route.currentRoute.value.name,
  async (newCurrentRoute) => {
    currentRouteName.value = newCurrentRoute as string
    currentPageData.value = await store.getCurrenPageData(
      currentRouteName.value
    )
  }
)
</script>

<!-- Renderas PageTemplate beorende på lite olika parametrar beroende på vad man vill visa -->
<template>
  <main class="main">
    <PageTemplate :data="currentPageData ? currentPageData : null" />
  </main>
</template>
