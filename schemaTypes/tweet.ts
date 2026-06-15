// import { defineType, defineField } from "sanity";

// export const tweet = defineType({
//   name: "tweet",
//   title: "Tweets",
//   type: "document",

//   fields: [
//     defineField({
//       name: "url",
//       title: "Tweet URL",
//       type: "url",
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: "sport",
//       title: "Sport",
//       type: "reference",
//       to: [{ type: "sportCategory" }],
//     }),
//   ],

//   preview: {
//     select: {
//       title: "url",
//       subtitle: "sport.name",
//     },
//   },
// });




import { defineType, defineField } from "sanity";

export const tweet = defineType({
  name: "tweet",
  title: "Tweets",
  type: "document",
  fields: [
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "handle",
      title: "Handle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Tweet Text",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Tweet Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    }),
    defineField({
      name: "tweetDate",
      title: "Tweet Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tweetUrl",
      title: "Tweet URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "verified",
      title: "Verified",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "likes",
      title: "Likes",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "replies",
      title: "Replies",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "reposts",
      title: "Reposts",
      type: "number",
      initialValue: 0,
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
      title: "authorName",
      subtitle: "handle",
    },
  },
});