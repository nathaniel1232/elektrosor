import { defineField, defineType } from "sanity";

export const jobPosting = defineType({
  name: "jobPosting",
  title: "💼 Stillingsannonser",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Stillingstittel",
      type: "string",
      description: "Hva heter stillingen? F.eks. 'Elektriker', 'Lærling ElektroFag', 'Servicetekniker'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Jobbkategori",
      type: "string",
      description: "Hva slags jobb er det?",
      options: {
        list: [
          { title: "Industri", value: "industri" },
          { title: "Service / vedlikehold", value: "service" },
          { title: "Lærling", value: "laerling" },
          { title: "Prosjekt", value: "prosjekt" },
          { title: "Annet", value: "annet" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "openings",
      title: "Hvor mange skal ansettes?",
      type: "number",
      description: "Antall ledige stillinger",
      initialValue: 1,
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "active",
      title: "Skal dette vises på nettsiden?",
      type: "boolean",
      description: "Ja = vises, Nei = skjules (men slettes ikke)",
      initialValue: true,
    }),
    defineField({
      name: "deadline",
      title: "Søknadsfrist",
      type: "string",
      description: "F.eks. '19. april', '31. mai' eller 'Fortløpende (åpen inntil besatt)'",
    }),
    defineField({
      name: "contactName",
      title: "Navn på kontaktperson",
      type: "string",
      description: "Hvem skal søkerne kontakte? F.eks. 'Eilef Fiskå'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "contactPhone",
      title: "Telefonnummer til kontaktperson",
      type: "string",
      description: "F.eks. '92 45 75 42'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "contactEmail",
      title: "E-postadresse for søknader",
      type: "string",
      description: "Hvor skal søknadene sendes? F.eks. 'post@elektro-sor.no'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "intro",
      title: "Beskrivelse av stillingen",
      type: "text",
      rows: 4,
      description: "Kort tekst som presenterer jobben. Hva handler den om? Hvorfor er den interessant?",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tasks",
      title: "Hva blir du gjøre? (oppgaver)",
      type: "array",
      description: "Liste over arbeidsoppgaver. Klikk '+' for å legge til",
      of: [{ type: "string" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "qualifications",
      title: "Hva bør du kunne? (krav)",
      type: "array",
      description: "F.eks. 'Fullført fagbrev', 'Erfaring fra elektroinstallasjoner', '3+ års erfaring'",
      of: [{ type: "string" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "offers",
      title: "Hva tilbyr vi? (fordeler)",
      type: "array",
      description: "F.eks. 'Lønn etter tariff', 'Interiør arbeidsmiljø', 'Muligheter for utvikling'",
      of: [{ type: "string" }],
      validation: (r) => r.required(),
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
