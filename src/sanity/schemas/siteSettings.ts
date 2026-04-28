import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "⚙️ Nettstedets innstillinger",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Forsiden – Stor overskrift",
      type: "string",
      description: "Den største teksten på toppen av forsiden (f.eks. 'Din lokale elektriker – rask og pålitelig')",
      initialValue: "Din lokale elektriker – rask og pålitelig",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Forsiden – Beskrivelse",
      type: "text",
      rows: 3,
      description: "Teksten under den store overskriften. Forklar kort hva dere gjør og hvem dere er.",
      initialValue:
        "Vi holder til i Mandal og utfører alt fra enkle hjemmeinstallasjoner til totale elektrotekniske prosjekter for industri og næringsliv.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Forsiden – Bilde (høyre side)",
      type: "image",
      description: "Bildet som vises på høyre side av forsiden (ca. 600×600px). Kan være foto av team, kontor eller arbeid i gang.",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutImage",
      title: "Om oss – bilde",
      type: "image",
      description: "Bildet som vises i 'Om oss'-seksjonen midt på forsiden. Kan være foto av teamet, verkstedet eller en pågående jobb.",
      options: { hotspot: true },
    }),
    defineField({
      name: "phone",
      title: "Telefonnummer",
      type: "string",
      description: "Telefonnummeret som vises på hele nettsiden (i header, footer, og CTA-knapper)",
      initialValue: "38 27 13 90",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "email",
      title: "E-postadresse",
      type: "string",
      description: "E-postadressen som mottar henvendelser",
      initialValue: "firmapost@elektro-sor.no",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Forretningsadresse",
      type: "string",
      description: "Adressen som vises i footer og kontaktside",
      initialValue: "Mikkelsmyrveien 4B, 4515 Mandal",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "openingHours",
      title: "Åpningstider",
      type: "string",
      description: "F.eks. 'Man–fre 07:00–15:00' eller 'Man–fre 08:00–16:00'",
      initialValue: "Man–fre 07:00–15:00",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    prepare() {
      return { 
        title: "Nettstedets innstillinger",
        subtitle: "Telefon, e-post, adresse, åpningstider og forsidtekst"
      };
    },
  },
});
