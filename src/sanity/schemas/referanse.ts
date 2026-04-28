import { defineField, defineType } from "sanity";

export const referanse = defineType({
  name: "referanse",
  title: "Referanseprosjekter",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Prosjektnavn",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Privatmarked", value: "privat" },
          { title: "Næringsliv", value: "naring" },
          { title: "Industri", value: "industri" },
          { title: "Offentlig", value: "offentlig" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Sted",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Prosjektbilde",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Vis på forsiden",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Sorteringsrekkefølge",
      type: "number",
      description: "Lavere tall vises først",
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: "Rekkefølge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "image" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
});
