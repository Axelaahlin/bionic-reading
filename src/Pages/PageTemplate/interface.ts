import { TitleTextBlock } from '@/components/TitleTextblock/interface'

export interface PageTemplateInterface extends SanityDataInterface {
  title: string
  preamble: string
  heroImage?: heroImage
  page: string
  titleTextBlocks?: TitleTextBlock[]
}

interface SanityDataInterface {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface heroImage {
  _type: string
  asset: HeroImageAsset
}

interface HeroImageAsset {
  _ref: string
  _type: string
}
