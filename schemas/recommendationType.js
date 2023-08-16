import { defineField } from "sanity"

const recommendationType = {
  name: "recommendationType",
  title: "Recommendation Type",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    })
  ]
}

export default recommendationType