<script lang="ts" setup>
import { ref } from 'vue'
import { usePiniaStore } from '@/stores/pinia'
const store = usePiniaStore()

const inputText = ref('')

const h2 = 'Skriv in din text här in under'
</script>
<template>
  <main class="main">
    <h2 class="page-title">{{ h2 }}</h2>

    <div class="content">
      <input
        type="text"
        placeholder="Skriv in din text här!"
        v-model="inputText"
      />
      <p class="hej">
        {{ inputText ? inputText : 'Här kommer din text att komma' }}
      </p>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  min-height: 50dvh;

  h2.page-title {
    font-size: var(--font-sixe-xl);
    text-align: center;
    margin: var(--spacing-xl) var(--spacing-none) var(--spacing-m) 0;
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
      margin: var(--spacing-m);
      font-size: var(--font-sixe-m);
      color: black;
      border: none;
      background: none;

      &:focus {
        outline: none;
      }
    }

    input {
      padding: var(--spacing-m) var(--spacing-m) 2px var(--spacing-none);
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
  margin: var(--spacing-m);

  h2 {
    font-weight: normal;
  }
}
</style>
