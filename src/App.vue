<script lang="ts" setup>
import Header from './pageComponents/Header/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&display=swap');
* {
  // font-family: 'Open Sans', sans-serif;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  letter-spacing: 0.0125rem;
  line-height: 1.75rem;
  // color: #42b883;
  // background-color: #35495e;
}

p {
  letter-spacing: 0.0125rem;
  line-height: 1.75rem;
  font-size: 16px;
}
</style>
