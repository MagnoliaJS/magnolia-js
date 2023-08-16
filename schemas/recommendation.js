import { defineField } from "sanity"

const recommendation = {
  name: "recommendation",
  title: "Recommendation",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "recommendationType" }],
    }),
    defineField({
      name: "subtype",
      title: "Subtype",
      type: "reference",
      to: [{ type: "recommendationSubType" }],
    }),
  ],
}

export default recommendation