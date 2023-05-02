export interface StartpageInterface {
  title: string
  preamble: string
  ImageTextBlocks?: ImageTextBlock[]
}

interface ImageTextBlock {
  title: string
  text: string
  image?: string
  url?: string
  buttonLabel?: string
}
