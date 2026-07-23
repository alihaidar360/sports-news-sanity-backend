// import { defineType, defineField } from "sanity";

// export const article = defineType({
//   name: "article",
//   title: "Articles",
//   type: "document",

//   fields: [
//     defineField({
//       name: "title",
//       title: "Title",
//       type: "string",
//     }),

//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//     }),

//     defineField({
//       name: "excerpt",
//       title: "Excerpt",
//       type: "text",
//     }),

//     defineField({
//       name: "content",
//       title: "Content",
//       type: "array",
//       of: [{ type: "block" }],
//     }),

//     defineField({
//       name: "image",
//       title: "Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//      name: "trendingRank",
//      title: "Trending Rank",
//      type: "number",
//      initialValue: 999,
//      validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "publishedAt",
//       title: "Published At",
//       type: "datetime",
//     }),
      

//     defineField({
//       name: "sport",
//       title: "Sport",
//       type: "reference",
//       to: [{ type: "sportCategory" }],
//     }),
//   ],
// });






import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Articles",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(70),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 60,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),

    defineField({
      name: "focusKeyword",
      title: "Focus Keyword",
      type: "string",
    }),

    defineField({
      name: "readingTime",
      title: "Reading Time",
      type: "string",
    }),

    defineField({
      name: "seoTags",
      title: "SEO Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "relatedKeywords",
      title: "Related Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "imageAlt",
      title: "Image ALT",
      type: "string",
    }),

    defineField({
      name: "imageTitle",
      title: "Image Title",
      type: "string",
    }),

    defineField({
      name: "imageCaption",
      title: "Image Caption",
      type: "string",
    }),

    defineField({
      name: "trendingRank",
      title: "Trending Rank",
      type: "number",
      initialValue: 999,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sport",
      title: "Sport",
      type: "reference",
      to: [{ type: "sportCategory" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});