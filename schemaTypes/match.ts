import { defineType, defineField } from "sanity";

export const match = defineType({
  name: "match",
  title: "Matches",
  type: "document",

  fields: [
    defineField({
      name: "team1",
      title: "Team 1",
      type: "string",
    }),

    defineField({
      name: "team2",
      title: "Team 2",
      type: "string",
    }),

    defineField({
      name: "date",
      title: "Match Date",
      type: "datetime",
    }),

    defineField({
      name: "tournament",
      title: "Tournament",
      type: "string",
    }),

    defineField({
      name: "stadium",
      title: "Stadium",
      type: "string",
    }),

    defineField({
      name: "sport",
      title: "Sport",
      type: "reference",
      to: [{ type: "sportCategory" }],
    }),
  ],
});