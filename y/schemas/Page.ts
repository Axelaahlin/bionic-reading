import TitleTextBlock from './TitleTextBlock'

export default {
  title: 'page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Preamble',
      name: 'preamble',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'HeroImage',
      name: 'heroImage',
      type: 'image',
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
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
