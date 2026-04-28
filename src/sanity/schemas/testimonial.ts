import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Anmeldelser",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Kundens navn",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Rolle/type kunde",
      type: "string",
      description: "F.eks. Privatkunde, Bedrift, Næring",
      initialValue: "Privatkunde",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "initials",
      title: "Initialer (2 bokstaver)",
      type: "string",
      description: "F.eks. MR, JD",
    }),
    defineField({
      name: "rating",
      title: "Stjerner (1-5)",
      type: "number",
      initialValue: 5,
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({
      name: "text",
      title: "Anmeldelsestekst",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      title: "Fremhevet",
      type: "boolean",
      description: "Vis på forsiden",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Rekkefølge",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
    },
  },
});
