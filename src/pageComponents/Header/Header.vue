<script lang="ts" setup>
import { ref } from 'vue'
import { usePiniaStore } from '@/stores/pinia'
import useWindowSize from '@/Utils/useWindowSize'

const { currentSizeLte } = useWindowSize()
const store = usePiniaStore()

const isOpen = ref(false)
const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
  console.log(isOpen.value)
}
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <span class="bionic"><b>Bio</b>nic</span>
      <span class="reading"><b>Rea</b>ding</span>
    </RouterLink>

    <nav class="nav" v-if="!currentSizeLte('sm') || isOpen">
      <RouterLink to="/" @click="toggleIsOpen">StartPage</RouterLink>
      <RouterLink to="/information" @click="toggleIsOpen"
        >information</RouterLink
      >
      <RouterLink to="/translate" @click="toggleIsOpen"> Test page </RouterLink>
    </nav>

    <button class="btn" @click="toggleIsOpen" v-if="currentSizeLte('sm')">
      {{ isOpen ? 'Stäng' : 'Öppna' }}
    </button>

    <button class="btn" @click="store.getAllTextElements(true)">
      {{ store.bionicMode ? 'Stäng av bionicMode' : 'Sätt på bionicMode' }}
    </button>
  </header>
</template>

<style lang="scss">
.header {
  background-color: var(--background-grey);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: var(--spacing-none) var(--spacing-2xl);

  @media screen and (min-width: 435px) {
    justify-content: space-between;
    padding: var(--spacing-none) var(--spacing-m);
  }

  a {
    text-decoration: none;
    & > span {
      font-weight: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: var(--letter-spacing);
      line-height: var(--line-height);
      color: var(--color-green);
      font-size: var(--font-size-2L);
    }
  }

  .nav {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 767px) {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 10;
      flex-direction: column;
      width: 50%;
      background-color: var(--background-grey);
      border-left: 5px solid var(--color-green);
    }

    a {
      margin-right: var(--spacing-xl);
      text-decoration: none;
      color: var(--background-grey);
      background-color: var(--color-green);
      padding: var(--spacing-m) var(--spacing-l);
      border-radius: var(--border-radius-m);
      transition: all ease-in-out 0.4s;
      font-size: var(--font-size-m);
      letter-spacing: var(--letter-spacing);
      line-height: var(--line-height);

      &:hover {
        padding: var(--spacing-l) var(--spacing-xl);
      }
    }
  }
  .btn {
    margin-inline: var(--spacing-m);
    text-align: center;
    border: none;
    font-size: var(--font-size-m);
    background-color: var(--color-green);
    color: var(--background-grey);
    border-radius: var(--spacing-m);
    cursor: pointer;
    padding: var(--spacing-m);
  }
}
</style>
