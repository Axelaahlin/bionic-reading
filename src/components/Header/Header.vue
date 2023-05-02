<script lang="ts" setup>
import { usePiniaStore } from '@/stores/pinia'
const store = usePiniaStore()
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <span class="bionic"><b>Bio</b>nic</span>
      <span class="reading"><b>Rea</b>ding</span>
    </RouterLink>
    <nav class="nav">
      <RouterLink to="/">StartPage</RouterLink>

      <RouterLink to="/translate"> Test page </RouterLink>
    </nav>
    <button class="btn" @click="store.setBionicMode">
      {{ store.bionicMode ? 'Stäng av bionicMode' : 'Sätt på bionicMode' }}
    </button>
  </header>
</template>

<style lang="scss">
.header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(184, 184, 184);
  padding: 0 50px;

  a {
    text-decoration: none;
    & > span {
      font-weight: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotate(-20deg);
      letter-spacing: 0.0125rem;
      line-height: 1.75rem;
      color: black;
      font-size: 30px;

      .bionic {
        transform: translateY(-25px);
      }

      .reading {
        transform: translateY(5px);
        transform: translateX(-25px);
      }
    }
  }

  .nav {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      margin-right: 20px;
      text-decoration: none;
      color: black;
      background-color: white;
      padding: 10px 15px;
      border-radius: 10px;
      transition: all ease-in-out 0.4s;
      font-size: 16px;
      letter-spacing: 0.0125rem;
      line-height: 1.75rem;

      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
}
</style>
