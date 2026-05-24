import { defineType, defineField } from "sanity";

export const sportCategory = defineType({
  name: "sportCategory",
  title: "Sport Categories",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});