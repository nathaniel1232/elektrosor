import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "⭐ Kundeomtaler",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Kundens navn",
      type: "string",
      description: "F.eks. 'Marius Romedal' eller 'Acme AS'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Kundetype",
      type: "string",
      description: "Hva er kunden? F.eks. 'Privatkunde', 'Bedriftseier', 'Næringsvirksomhet'",
      initialValue: "Privatkunde",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "initials",
      title: "Initialer (2 bokstaver)",
      type: "string",
      description: "F.eks. 'MR' fra Marius Romedal, eller 'AC' fra Acme. Vises som avatar på forsiden.",
      validation: (r) => r.required().max(2),
    }),
    defineField({
      name: "rating",
      title: "Antall stjerner (1-5)",
      type: "number",
      description: "Hvor mange stjerner gir kunden? 5 = best, 1 = dårlig",
      initialValue: 5,
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({
      name: "text",
      title: "Sitatet – Hva sier kunden?",
      type: "text",
      rows: 4,
      description: "Det kunden skriver om dere. F.eks. 'Veldig god service, rask respons og godt arbeid!'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      title: "Vis på forsiden?",
      type: "boolean",
      description: "Slå på for å vise omtalen på forsiden, av for å skjule den",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "0 vises først, 1 vises andre osv. Brukt til å velge hvilken omtale som skal roteres på forsiden.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      rating: "rating",
    },
    prepare({ title, subtitle, rating }) {
      return {
        title: title,
        subtitle: `${subtitle} – ${'⭐'.repeat(rating || 5)}`,
      };
    },
  },
});
  },
});
