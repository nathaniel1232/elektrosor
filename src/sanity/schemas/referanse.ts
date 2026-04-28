import { defineField, defineType } from "sanity";

export const referanse = defineType({
  name: "referanse",
  title: "🏆 Referanseprosjekter",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Prosjektnavn",
      type: "string",
      description: "F.eks. 'GE Healthcare fabrikk', 'Mandal Fengsel', 'Villa Solheim'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Hva slags prosjekt?",
      type: "string",
      description: "Velg riktig kategori så det vises på riktig sted på nettsiden",
      options: {
        list: [
          { title: "Privatmarked (boliger)", value: "privat" },
          { title: "Næringsliv (butikker, kontorer)", value: "naring" },
          { title: "Industri (fabrikker, anlegg)", value: "industri" },
          { title: "Offentlig (kommunale bygninger)", value: "offentlig" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "location",
      title: "Hvor ligger det?",
      type: "string",
      description: "Sted/adresse, f.eks. 'Mandal', 'Ramslandsvågen, Mandal'",
    }),
    defineField({
      name: "description",
      title: "Hva gjorde dere? (kort beskrivelse)",
      type: "text",
      rows: 3,
      description: "Hva var det for slags elektroarbeid? F.eks. 'Installasjoner, vedlikehold og oppgradering av elektroanlegg på 5000 m²'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Foto av prosjektet",
      type: "image",
      description: "Bilde som vises på referansesiden (ca. 400×300px)",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Er dette ett av de beste prosjektene?",
      type: "boolean",
      description: "Ja = vises større/fremhevet på referansesiden",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Sorteringsrekkefølge",
      type: "number",
      description: "0 vises først, 1 andre osv. Lave tall = helt øverst",
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
