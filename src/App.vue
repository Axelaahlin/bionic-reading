<script lang="ts" setup>
import Header from './pageComponents/Header/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&display=swap');

:root {
  --background-grey: #35495e;
  --color-green: #42b883;
  --color-red: brown;

  --spacing-none: 0px;
  --spacing-s: 5px;
  --spacing-m: 10px;
  --spacing-l: 15px;
  --spacing-xl: 20px;
  --spacing-2xl: 50px;

  --font-size-m: 16px;
  --font-size-2L: 30px;
  --font-sixe-xl: 40px;

  --font-bold: bold;
  --font-normal: normal;

  --letter-spacing: 0.0125rem;
  --line-height: 1.75rem;

  --border-radius-m: 4px;
}

// Allmän styling jag vill ska appliceras över hela applikationen
* {
  font-family: 'Inter', sans-serif;
  padding: var(--spacing-none);
  margin: var(--spacing-none);
  box-sizing: border-box;
  letter-spacing: 0.05rem;
  line-height: var(--line-height);
}

p {
  font-size: var(--font-size-m);
}

//global font styling som gör det första delen av ordet fetstilat.
.bionic-font {
  font-weight: var(--font-bold);
}
</style>
