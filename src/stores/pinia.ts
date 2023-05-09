import { defineStore } from 'pinia'
import { getSanityData } from '@/client'

export const usePiniaStore = defineStore('Bionic', {
  state: () => ({
    bionicMode: false,
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
            `<span class="bionic-font">${word
              // Sepparerar vi varje bokstav till en array
              .split('')
              // Den första halvan arrayen delas på två (avrundat uppåt).
              .slice(0, Math.ceil(word.length / 2))
              // Och sen sätts alla kvarvarande bokstäver i arrayen ihop med hjälp av join('') och läggs i en
              // <b> tag.
              .join('')}</span>${word
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
    async getCurrenPageData(route: string) {
      //Hämtar alla sidor som matchar, route skickas in som routens namn som säts i router/index.ts
      const data = await getSanityData(
        `*[_type == "page" && page == "${route}"]`
      )
      // returnerar data[0] för att få ut objektet direkt eftersom man enbart ska få tillbaka en sida som hämtas från sanity.io
      return data[0]
    },
  },
})
