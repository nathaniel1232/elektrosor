import { defineField, defineType } from "sanity";

export const sertifisering = defineType({
  name: "sertifisering",
  title: "✅ Sertifiseringer og godkjenninger",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Navn på sertifiseringen",
      type: "string",
      description: "F.eks. 'Registrert El-installatør', 'Godkjent lærebedrift', 'Sertifisert KNX Partner'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo/bilde (valgfritt)",
      type: "image",
      description: "Laster opp logo for sertifiseringen (f.eks. NVF-logo, Elsikkerhet-logo). Ikke påkrevd – teksten vises uansett.",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "0 vises først, 1 andre, osv. Lavt tall = øverst/til venstre",
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
    select: { title: "name", media: "logo" },
    prepare({ title, media }) {
      return {
        title: title ?? "Ukjent sertifisering",
        subtitle: "✅ Sertifisering",
        media,
      };
    },
  },
});
