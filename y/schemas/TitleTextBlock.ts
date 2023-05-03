export default {
  title: 'TitleTextBlock',
  name: 'titleTextBlock',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
}
