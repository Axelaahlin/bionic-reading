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
      <p>
        {{ inputText }}
      </p>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  min-height: 50dvh;

  h2.page-title {
    font-size: 40px;
    text-align: center;
    margin: 20px 0 10px 0;
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
</style>
