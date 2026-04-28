import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Nettstedsinnstillinger",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Forside – Overskrift",
      type: "string",
      description: "Stor overskrift på forsiden",
      initialValue: "Velkommen til din lokale Elektriker!",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Forside – Ingress",
      type: "text",
      rows: 2,
      description: "Teksten under overskriften på forsiden",
      initialValue:
        "Elektro Sør AS utfører elektriske installasjoner for private og næringsliv i Lindesnesregionen.",
    }),
    defineField({
      name: "heroImage",
      title: "Forside – Bakgrunnsbilde",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "phone",
      title: "Telefonnummer",
      type: "string",
      initialValue: "38 27 13 90",
    }),
    defineField({
      name: "email",
      title: "E-postadresse",
      type: "string",
      initialValue: "firmapost@elektro-sor.no",
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "string",
      initialValue: "Mikkelsmyrveien 4B, 4515 Mandal",
    }),
    defineField({
      name: "openingHours",
      title: "Åpningstider",
      type: "string",
      description: "Vises i header og footer",
      initialValue: "Man–fre 07:00–15:00",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Nettstedsinnstillinger" };
    },
  },
});
