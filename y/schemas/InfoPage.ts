import TitleTextBlock from './TitleTextBlock'

export default {
  title: 'infopage',
  name: 'infopage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'HeroImage',
      name: 'heroImage',
      type: 'image',
    },
    {
      title: 'Preamble',
      name: 'preamble',
      type: 'text',
    },
    {
      title: 'TitleTextBlocks',
      name: 'titleTextBlocks',
      type: 'array',
      of: [TitleTextBlock],
    },
    {
      title: 'page',
      name: 'page',
      type: 'string',
    },
  ],
}
