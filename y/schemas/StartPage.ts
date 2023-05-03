import TitleTextBlock from './TitleTextBlock'

export default {
  title: 'startpage',
  name: 'startpage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
  ],
}
