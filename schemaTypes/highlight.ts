import { defineType, defineField } from "sanity";

export const highlight = defineType({
  name: "highlight",
  title: "Highlights",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    // YouTube Video ID
    defineField({
      name: "youtubeId",
      title: "YouTube Video ID",
      type: "string",
      description:
        "Example: https://youtube.com/watch?v=abc123 → only add abc123",
    }),

    // Manual Video Upload
    defineField({
      name: "uploadedVideo",
      title: "Upload Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      description:
        "Upload video manually if YouTube embed is blocked",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    // Website Upload Time
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description:
        "Select when this video was added to your website",
    }),

    defineField({
      name: "featured",
      title: "Featured Video",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "sport",
      title: "Sport",
      type: "reference",
      to: [{ type: "sportCategory" }],
    }),
  ],
});