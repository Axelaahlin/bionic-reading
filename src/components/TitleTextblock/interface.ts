export interface TitleTextBlock extends SanityExtraData {
  title: string
  text: string
  page: string
  image?: SanityImage
}

export interface SanityImage {
  _type: string
  asset: SanityImageAsset
}

interface SanityImageAsset {
  _type: String
  _ref: string
}

interface SanityExtraData {
  _key: string
  _type: string
}
