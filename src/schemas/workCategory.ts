import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workCategory',
  title: 'Work Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
