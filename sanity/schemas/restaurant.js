import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
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
      name: 'image',
      title: 'Restaurant Image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation(rule) {
        rule.required()
      },
    }),
    defineField({
      name: 'rating',
      title: 'Restaurant Rating (1 to 5 stars)',
      type: 'number',
      validation(rule) {
        rule.required().min(1).max(5).error('Rating value between 1 to 5 stars.')
      },
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation(rule) {
        rule.required()
      },
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
