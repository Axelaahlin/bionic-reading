import { defineStore } from 'pinia'
import { getSanityData } from '@/client'

export const usePiniaStore = defineStore('Bionic', {
  state: () => ({
    bionicMode: false,
    titleTextBlocks: [] as any,
  }),
  actions: {
    setBionicMode() {
      this.bionicMode = !this.bionicMode
    },
    translateToBionicReading(string: string) {
      const htmlString = string
        //Funktionen börjar med att med hjälp av split() ta ut varje ord i en string genom att skicka in ' ' som parameter
        //Sedan mappar vi igenom arrayen med alla ord och för varje ord...
        .split(' ')
        .map(
          (word) =>
            `<b>${word
              // Sepparerar vi varje bokstav till en array
              .split('')
              // Den första halvan arrayen delas på två (avrundat uppåt).
              .slice(0, Math.ceil(word.length / 2))
              // Och sen sätts alla kvarvarande bokstäver i arrayen ihop med hjälp av join('') och läggs i en
              // <b> tag.
              .join('')}</b>${word
              // Sedan gör samma sak men ovänt.
              .split('')
              // Andra halvan av ordet tas ut och sätts utanför <b> taggen för att få den
              // efterfrågade effekten.
              .slice(Math.ceil(word.length / 2), word.length)
              .join('')} `
        )
        .join(' ')

      return htmlString
    },
    async setBlocks() {
      const titleTextBlocks = await getSanityData(
        '*[_type == "titleTextBlock"]'
      )
      this.titleTextBlocks = titleTextBlocks
      return titleTextBlocks
    },
  },
})
