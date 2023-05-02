<script lang="ts" setup>
import Header from './components/Header/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  letter-spacing: 0.0125rem;
  line-height: 1.75rem;
}
</style>
