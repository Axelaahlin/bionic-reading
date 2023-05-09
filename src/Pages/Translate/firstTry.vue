<script lang="ts" setup>
import { ref } from 'vue'

const concateWord = (array: string[]) => {
  let newWord: string = ''
  array.forEach((charachter: string) => {
    newWord = newWord += charachter
  })
  return newWord
}

//Detta är den första versionen av att ta ut alla ord i en array som jag gjorde när jag först fick iden.
//Innan jag hade kollat runt lite, valde att ha kvar denna för det är kul att se hur lite avstånd från en orginaltankte kan leda till ett bättre
// resultat.

const stringConverter = (desiredString: string) => {
  const currentWord = ref<string[]>([])
  const arrayOfStringWord = ref<string[]>([])
  const string = desiredString
  const stringLength = desiredString.length
  const newArray = []

  for (let i = 0; i <= stringLength; i++) {
    //sparar en nuvarande bokstaven i en constant
    const currentCharacter: string = string.charAt(i)

    //Kollar om nuvarande bokstaven inte är ett mellanslag, då lägger jag in den i en
    // array som innehåller alla bokstäver i det order som nuvarande bokstaven är i
    if (currentCharacter !== ' ') {
      currentWord.value?.push(currentCharacter)

      //För att få ut det sista order eftersom det inte är ett mellanslag på slutet så kollar jag om nuvarande
      // bokstavs index är samma som längden på arrayen
      if (i === stringLength) {
        newArray.push(concateWord(currentWord.value))
      }

      //och för att avgöra när ordet är slut så kollar jag om det är ett mellanslag eller bara '' som kommer som absolut sista karaktär.
      //Sätter ihop ordet och pushar det till den slutliga arrayen och tömer currentWord
    } else if (currentCharacter === ' ' || currentCharacter === '') {
      newArray.push(concateWord(currentWord.value))

      currentWord.value = []
    }
  }

  return newArray
}

const text =
  'Är det sant att denna text ska kunna göra så att man kan läsa snabbare och att det kan hjälpa folk med dyselexi att läsa'
const display = stringConverter(text)
</script>

<template>
  <div class="content"></div>
</template>

<style lang="scss">
.content {
  max-width: 100dvw;
  padding: 10px;

  .string {
    display: flex;
    box-sizing: border-box;

    background-color: red;
    height: 100%;
    max-width: 100%;

    p {
      font-size: 16px;
      letter-spacing: 0.0125rem;
      line-height: 1.75rem;
      margin-right: 3px;
    }
  }
}
</style>
