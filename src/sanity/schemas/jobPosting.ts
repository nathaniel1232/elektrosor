import { defineField, defineType } from "sanity";

export const jobPosting = defineType({
  name: "jobPosting",
  title: "Stillingsannonser",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Stillingstittel",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Industri", value: "industri" },
          { title: "Service", value: "service" },
          { title: "Lærling", value: "laerling" },
          { title: "Prosjekt", value: "prosjekt" },
          { title: "Annet", value: "annet" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "openings",
      title: "Antall stillinger",
      type: "number",
      initialValue: 1,
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "active",
      title: "Aktiv annonse",
      type: "boolean",
      description: "Skru av for å skjule uten å slette",
      initialValue: true,
    }),
    defineField({
      name: "deadline",
      title: "Søknadsfrist",
      type: "string",
      description: "F.eks. «19. april» eller «Fortløpende»",
    }),
    defineField({
      name: "contactName",
      title: "Kontaktperson navn",
      type: "string",
      initialValue: "Eilef Fiskå",
    }),
    defineField({
      name: "contactPhone",
      title: "Kontaktperson telefon",
      type: "string",
      initialValue: "92 45 75 42",
    }),
    defineField({
      name: "contactEmail",
      title: "Søknadse-post",
      type: "string",
      description: "E-postadresse søknaden sendes til",
    }),
    defineField({
      name: "intro",
      title: "Ingress / introduksjon",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "tasks",
      title: "Arbeidsoppgaver",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "qualifications",
      title: "Kvalifikasjoner",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "offers",
      title: "Vi tilbyr",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "active", openings: "openings" },
    prepare({ title, subtitle, openings }) {
      return {
        title: title ?? "Ukjent stilling",
        subtitle: subtitle ? `✅ Aktiv – ${openings} stilling(er)` : "⏸ Inaktiv",
      };
    },
  },
});
