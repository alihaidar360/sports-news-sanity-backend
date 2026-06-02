import { defineType, defineField } from "sanity";

export const tweet = defineType({
  name: "tweet",
  title: "Tweets",
  type: "document",

  fields: [
    defineField({
      name: "url",
      title: "Tweet URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sport",
      title: "Sport",
      type: "reference",
      to: [{ type: "sportCategory" }],
    }),
  ],

  preview: {
    select: {
      title: "url",
      subtitle: "sport.name",
    },
  },
});