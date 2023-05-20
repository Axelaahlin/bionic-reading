import { defineStore } from 'pinia'
import { getSanityData } from '@/client'

export const usePiniaStore = defineStore('Bionic', {
  state: () => ({
    bionicMode: false,
    error: false,
  }),
  actions: {
    setBionicMode() {
      this.bionicMode = !this.bionicMode
    },
    translateToBionicReading(string: string) {
      if (this.bionicMode) {
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
                // <span> tag med en klass för att skapa denna visuella effekt.
                .join('')}</span>${word
                // Sedan gör samma sak men ovänt.
                .split('')
                // Andra halvan av ordet tas ut och sätts utanför <soan> taggen för att få den
                // efterfrågade effekten.
                .slice(Math.ceil(word.length / 2), word.length)
                .join('')} `
          )
          .join(' ')

        return htmlString
      } else {
        return string
      }
    },
    removeHTMLFromString(str: string) {
      if (str === null || str === '') return false
      else str = str.toString()

      return str.replace(/(<([^>]+)>)/gi, '')
    },
    getAllTextElements(fromButton: boolean) {
      //Initial array för alla element som hittas på sidan
      const allElements = [] as string[]
      //Dem olika typer av element man vill hitta
      const textTypes = ['p', 'h1', 'h2', 'h3', 'h4'] as string[]

      //Om ett knapptryck triggar funktionen innebär det att man också vill byta
      //värde på bionicMode
      if (fromButton) {
        this.setBionicMode()
      }

      //Hämtar alla element för varje typ av element och pushar in i arrayen för alla element
      textTypes.forEach((type: string) => {
        const elements = document.querySelectorAll(type)
        const elementsArray = Array.prototype.slice.call(elements)
        allElements.push(elementsArray as any)
      })

      //För varje element som hittats på sidan kollar functionen om det ska vara bionic eller inte och renderar ut rätt text
      allElements.forEach((category: any) => {
        category.forEach((element: HTMLElement) => {
          if (this.bionicMode) {
            element.innerHTML = this.translateToBionicReading(element.innerHTML)
          } else {
            element.innerHTML = this.removeHTMLFromString(
              element.innerHTML
            ) as string
          }
        })
      })
    },
    async getCurrenPageData(route: string) {
      let data = null
      //Hämtar alla sidor som matchar, route parametern som skickas in är routens namn som säts i router/index.ts
      try {
        data = await getSanityData(`*[_type == "page" && page == "${route}"]`)
        // returnerar data[0] för att få ut objektet direkt.
        this.error = false
        return data[0]
      } catch (e) {
        console.error(e)
        this.error = true
      }
    },
  },
})
