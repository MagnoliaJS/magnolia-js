import { defineField } from "sanity"

const recommendationSubType = {
  name: "recommendationSubType",
  title: "Recommendation Subtype",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "parentType",
      title: "Parent Type",
      type: "reference",
      to: [{ type: "recommendationType" }],
    }),
  ]
}

export default recommendationSubType