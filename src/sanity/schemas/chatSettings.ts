import { defineField, defineType } from "sanity";

export const chatSettings = defineType({
  name: "chatSettings",
  title: "🤖 AI-chatbot innstillinger",
  type: "document",
  fields: [
    defineField({
      name: "systemPrompt",
      title: "Hva skal chatboten vite om bedriften?",
      type: "text",
      rows: 15,
      description:
        "Dette er informasjonen chatboten bruker når den svarer på spørsmål. Skriv fakta om bedriften, tjenester, priser, åpningstider osv. Jo mer info du gir, jo bedre svar. Eksempel: 'Vi utfører elbil-ladere fra 8500 kr. Vi har alltid en elektriker på vakt. Lærlingeplasser er alltid ledige.'",
      validation: (r) => r.required(),
      initialValue: `Du er en hjelpsom assistent for Elektro Sør AS, en lokal elektroentreprenør i Lindesnesregionen (Mandal/Spangereid).

Svar alltid på norsk. Vær kortfattet, vennlig og profesjonell.

Fakta om Elektro Sør AS:
- Adresse: Mikkelsmyrveien 4B, 4515 Mandal (Skinsnes)
- Telefon: 38 27 13 90
- Daglig leder: Eilef Fiskå, telefon 92 45 75 42
- E-post: firmapost@elektro-sor.no
- Åpningstider: Mandag–fredag 07:00–15:00. Utenom dette viderekobles til vakttelefon.
- Tjenester: Elektriske installasjoner, elbil-ladeanlegg, sikringsskap, smarthus, industri, næringsliv, elektrotermografi
- Viktige referanser: GE Healthcare (Spangereid), Mandal Fengsel, Mandal Golfklubb
- Ledige stillinger: Industrielektriker (2 stillinger), Serviceelektriker (2 stillinger), Elektrikerlærling (4 plasser)

Hvis noen spør om pris, si at de bør ringe eller bruke bestillingsskjemaet for et uforpliktende tilbud.
Hvis du ikke vet svaret, oppfordre dem til å ringe 38 27 13 90 eller sende e-post til firmapost@elektro-sor.no.
Ikke svar på spørsmål som ikke har med Elektro Sør eller elektrofaget å gjøre.`,
    }),
    defineField({
      name: "welcomeMessage",
      title: "Velkomstmelding (første melding chatboten sender)",
      type: "string",
      description: "Det chatboten sier til kunden som åpner chatten. F.eks. 'Hei! Hvordan kan jeg hjelpe deg?'",
      initialValue: "Hei! Jeg er her for å hjelpe deg med spørsmål om Elektro Sør AS. Hva lurer du på? 😊",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "AI-chatbot innstillinger",
        subtitle: "Klikk for å redigere hva chatboten vet om bedriften",
      };
    },
  },
});
