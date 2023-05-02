<script lang="ts" setup>
import { ref } from 'vue'
import { usePiniaStore } from '@/stores/pinia'
const store = usePiniaStore()

const bionic = ref(true)

const inputText = ref()

const h1 = 'Skriv in din text här in under'
</script>
<template>
  <main class="main">
    <h1 v-html="store.bionicMode ? store.translateToBionicReading(h1) : h1" />

    <div class="content">
      <input
        type="text"
        placeholder="Skriv in din text här!"
        v-model="inputText"
        @input="store.translateToBionicReading(inputText)"
      />
      <section v-if="!inputText || !store.bionicMode">{{ inputText }}</section>
      <section
        v-else-if="store.bionicMode && inputText"
        v-html="store.translateToBionicReading(inputText)"
      />
    </div>
  </main>
</template>

<style lang="scss">
.main {
  padding: 10px;
  min-height: 50dvh;

  h1 {
    font-size: 40px;
    text-align: center;
    margin: 0 0 10px 0;
    font-weight: normal;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50dvh;
    display: flex;
    flex-direction: column;

    input,
    section {
      width: 50%;
      margin: 10px;
      font-size: 18px;
      color: black;
      border: none;
      background: none;

      &:focus {
        outline: none;
      }
    }

    input {
      padding: 10px 10px 2px 0;
      border-bottom: 1px solid black;

      &::placeholder {
        color: black;
      }
    }

    textarea {
      border: 1px solid black;
      min-height: 400px;
    }
  }
}

.description {
  margin: 10px;

  h2 {
    font-weight: normal;
  }
}

.btn {
  min-width: 200px;
  text-align: center;
  padding: 10px;
  border: none;
  background-color: brown;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
</style>
