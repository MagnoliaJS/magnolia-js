import { defineField } from 'sanity'

const sponsorshipTier = {
  name: 'sponsorshipTier',
  title: 'Sponsorship Tier',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
}

export default sponsorshipTier
