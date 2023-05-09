<script lang="ts" setup>
import Header from './pageComponents/Header/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&display=swap');

// Allmän styling jag vill ska appliceras över hela applikationen
* {
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  letter-spacing: 0.017rem;
  line-height: 1.75rem;
}

p {
  font-size: 16px;
}

//global font styling som gör det första delen av ordet fetstilat.
.bionic-font {
  font-weight: bold;
}
</style>
