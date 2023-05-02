// export interface StartpageInterface {
//   title: string
//   preamble: string
//   ImageTextBlocks?: titleTextBlock[]
// }

export interface StartpageInterface {
  title: string
  preamble: string
  titleTextBlocks: titleTextBlock[]
}

interface titleTextBlock {
  title: string
  text: string
  image?: string
  url?: string
  buttonLabel?: string
}
