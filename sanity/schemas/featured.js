import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Feature Category Name',
      type: 'string',
      validation(rule) {
        rule.required()
      },
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation(rule) {
        rule.max(200)
      },
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
