import { defineType, defineField } from "sanity";

export const tweet = defineType({
  name: "tweet",
  title: "Tweets",
  type: "document",

  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),

    defineField({
      name: "handle",
      title: "Handle",
      type: "string",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "text",
    }),

    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "verified",
      title: "Verified",
      type: "boolean",
    }),

    defineField({
      name: "likes",
      title: "Likes",
      type: "number",
    }),

    defineField({
      name: "reposts",
      title: "Reposts",
      type: "number",
    }),

    defineField({
      name: "replies",
      title: "Replies",
      type: "number",
    }),

    defineField({
      name: "time",
      title: "Time",
      type: "string",
    }),

    defineField({
      name: "url",
      title: "Tweet URL",
      type: "url",
    }),

    defineField({
      name: "sport",
      title: "Sport",
      type: "reference",
      to: [{ type: "sportCategory" }],
    }),
  ],
});