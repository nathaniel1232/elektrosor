import React from "react";

const s = {
  wrap: {
    padding: "2rem",
    maxWidth: "720px",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: "1.65",
    color: "#111",
  } as React.CSSProperties,
  h1: {
    fontSize: "1.6rem",
    fontWeight: 700,
    marginBottom: "0.4rem",
    color: "#1a1a1a",
  } as React.CSSProperties,
  intro: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "2rem",
    borderBottom: "1px solid #e5e5e5",
    paddingBottom: "1.5rem",
  } as React.CSSProperties,
  section: {
    marginBottom: "2rem",
    background: "#f9f9f9",
    borderRadius: "10px",
    padding: "1.25rem 1.5rem",
    border: "1px solid #ebebeb",
  } as React.CSSProperties,
  sectionRed: {
    marginBottom: "2rem",
    background: "#fff5f5",
    borderRadius: "10px",
    padding: "1.25rem 1.5rem",
    border: "1px solid #fecaca",
  } as React.CSSProperties,
  sectionBlue: {
    marginBottom: "2rem",
    background: "#eff6ff",
    borderRadius: "10px",
    padding: "1.25rem 1.5rem",
    border: "1px solid #bfdbfe",
  } as React.CSSProperties,
  sectionGreen: {
    marginBottom: "2rem",
    background: "#f0fdf4",
    borderRadius: "10px",
    padding: "1.25rem 1.5rem",
    border: "1px solid #bbf7d0",
  } as React.CSSProperties,
  h2: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
    marginTop: 0,
  } as React.CSSProperties,
  ol: {
    paddingLeft: "1.4rem",
    margin: "0.5rem 0",
  } as React.CSSProperties,
  ul: {
    paddingLeft: "1.4rem",
    margin: "0.5rem 0",
  } as React.CSSProperties,
  li: {
    marginBottom: "0.4rem",
    fontSize: "0.95rem",
  } as React.CSSProperties,
  p: {
    fontSize: "0.95rem",
    margin: "0.5rem 0",
  } as React.CSSProperties,
  code: {
    background: "#e8e8e8",
    padding: "1px 6px",
    borderRadius: "4px",
    fontFamily: "monospace",
    fontSize: "0.88rem",
  } as React.CSSProperties,
  tip: {
    background: "#fffbeb",
    border: "1px solid #fde68a",
    borderRadius: "6px",
    padding: "0.6rem 0.9rem",
    fontSize: "0.9rem",
    margin: "0.75rem 0 0",
  } as React.CSSProperties,
  contact: {
    background: "#1e3a5f",
    color: "#fff",
    borderRadius: "10px",
    padding: "1.25rem 1.5rem",
    marginBottom: "2rem",
  } as React.CSSProperties,
  contactH2: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.6rem",
    marginTop: 0,
    color: "#fff",
  } as React.CSSProperties,
  contactP: {
    fontSize: "0.95rem",
    margin: "0.35rem 0",
    color: "#bfdbfe",
  } as React.CSSProperties,
};

export function HelpView() {
  return (
    <div style={s.wrap}>
      <h1 style={s.h1}>📖 Bruksguide – Redaksjonsverktøyet</h1>
      <p style={s.intro}>
        Her kan du endre alt som vises på nettsiden til Elektro Sør. Det du endrer her, dukker opp på nettsiden
        innen ca. 1 minutt. Ingen teknisk kunnskap er nødvendig – bare trykk, skriv, og publiser.
      </p>

      {/* ── FIX: CORS / Publish issue ── */}
      <div style={s.sectionRed}>
        <h2 style={s.h2}>🔧 Kan ikke publisere eller laste opp bilder? Les dette først</h2>
        <p style={s.p}>
          Første gang du bruker dette verktøyet på en ny datamaskin eller nettadresse, må du gi tillatelse i
          Sanity-kontrollpanelet. Dette gjøres <strong>én gang</strong> av utvikleren.
        </p>
        <p style={s.p}><strong>Steg for utvikler (Nathaniel):</strong></p>
        <ol style={s.ol}>
          <li style={s.li}>
            Gå til{" "}
            <span style={s.code}>https://www.sanity.io/manage/personal/project/dcvw93xz/api</span>
          </li>
          <li style={s.li}>Klikk på <strong>«CORS Origins»</strong></li>
          <li style={s.li}>
            Trykk <strong>«Add CORS origin»</strong> og legg til:
            <ul style={s.ul}>
              <li style={s.li}><span style={s.code}>http://localhost:3000</span> (huk av «Allow credentials»)</li>
              <li style={s.li}><span style={s.code}>https://ditt-domene.vercel.app</span> (legg til når du deployer)</li>
            </ul>
          </li>
          <li style={s.li}>Trykk <strong>Save</strong>. Nå skal publisering og bildeopplasting fungere.</li>
        </ol>
        <div style={s.tip}>
          💡 Etter du har lagt til CORS, lukk og åpne nettleseren igjen på <span style={s.code}>/studio</span>
        </div>
      </div>

      {/* ── SLIK PUBLISERER DU ── */}
      <div style={s.sectionBlue}>
        <h2 style={s.h2}>🚀 Slik gjør du endringer – steg for steg</h2>
        <ol style={s.ol}>
          <li style={s.li}>Klikk på det du vil endre i venstremenyen (f.eks. «⭐ Kundeomtaler»)</li>
          <li style={s.li}>Klikk på et element for å åpne det, eller trykk «+» (Lag ny) for å legge til noe nytt</li>
          <li style={s.li}>Gjør endringene dine – skriv ny tekst, last opp bilde, eller endre tall</li>
          <li style={s.li}>
            Trykk den grønne <strong>«Publish»</strong>-knappen øverst til høyre
          </li>
          <li style={s.li}>✅ Ferdig! Nettsiden oppdaterer seg automatisk innen ca. 1 minutt</li>
        </ol>
        <div style={s.tip}>
          💡 Endringene er ikke synlige på nettsiden før du trykker <strong>Publish</strong>. Drafts = utkast som
          ikke er publisert ennå.
        </div>
      </div>

      {/* ── INNSTILLINGER ── */}
      <div style={s.section}>
        <h2 style={s.h2}>⚙️ Innstillinger – telefon, e-post, adresse og forsidebilde</h2>
        <p style={s.p}>Her kan du endre grunnleggende informasjon som vises overalt på nettsiden.</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Stor overskrift på forsiden</strong> – den første teksten folk ser</li>
          <li style={s.li}><strong>Beskrivelse</strong> – teksten under overskriften</li>
          <li style={s.li}><strong>Forsidebilde</strong> – bildet på høyre side av forsiden (anbefalt størrelse: 600×600 px)</li>
          <li style={s.li}><strong>Om oss-bilde</strong> – bildet i midtseksjonen «Om oss»</li>
          <li style={s.li}><strong>Telefon, e-post, adresse, åpningstider</strong></li>
        </ul>
        <div style={s.tip}>
          📸 For å laste opp bilde: Klikk på bildefeltet → trykk «Upload» → velg bildet fra datamaskinen din
        </div>
      </div>

      {/* ── KUNDEOMTALER ── */}
      <div style={s.section}>
        <h2 style={s.h2}>⭐ Kundeomtaler – legg til eller fjern anmeldelser</h2>
        <p style={s.p}>Her styrer du hvilke anmeldelser som vises på forsiden.</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Legg til ny</strong>: Trykk «+» øverst til høyre → fyll ut navn, tekst, antall stjerner</li>
          <li style={s.li}><strong>Vis på forsiden</strong>: Sett «Vis på forsiden» til ✅ for at den skal vises</li>
          <li style={s.li}><strong>Rekkefølge</strong>: 0 = vises øverst, 1 = nummer to, osv.</li>
          <li style={s.li}><strong>Fjern</strong>: Klikk på omtalen → trykk de tre prikkene (⋯) øverst til høyre → «Delete»</li>
        </ul>
        <div style={s.tip}>
          💡 Du kan legge inn anmeldelser fra Google, Facebook eller andre steder – bare skriv inn teksten manuelt.
          Husk å be om tillatelse fra kunden først!
        </div>
      </div>

      {/* ── REFERANSER ── */}
      <div style={s.section}>
        <h2 style={s.h2}>🏆 Referanseprosjekter – prosjekter dere er stolte av</h2>
        <p style={s.p}>Disse vises på referansesiden og (hvis «fremhevet») på forsiden.</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Legg til</strong>: Trykk «+» → fyll ut prosjektnavn, beskrivelse, sted, kategori</li>
          <li style={s.li}><strong>Bilde</strong>: Last opp et bilde av prosjektet (valgfritt)</li>
          <li style={s.li}>
            <strong>Fremhev på forsiden</strong>: Huk av «Er dette ett av de beste prosjektene?» – da vises det
            blant de tre øverste prosjektene på forsiden
          </li>
          <li style={s.li}><strong>Rekkefølge</strong>: 0 = vises øverst på referansesiden</li>
          <li style={s.li}><strong>Fjern</strong>: Åpne prosjektet → trykk ⋯ → «Delete»</li>
        </ul>
        <div style={s.tip}>
          💡 De tre referansene med lavest «Rekkefølge»-tall som er merket som fremhevet, vises på forsiden
        </div>
      </div>

      {/* ── SERTIFISERINGER ── */}
      <div style={s.section}>
        <h2 style={s.h2}>✅ Sertifiseringer – godkjenninger og merker</h2>
        <p style={s.p}>
          Disse vises som «merker» nederst på forsiden. Du kan ha tekst alene eller tekst + logo.
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Legg til</strong>: Trykk «+» → skriv inn navnet på sertifiseringen</li>
          <li style={s.li}><strong>Logo (valgfritt)</strong>: Last opp logo-bildet til sertifiseringen (f.eks. NELFO-logoen)</li>
          <li style={s.li}><strong>Rekkefølge</strong>: 0 = vises til venstre</li>
          <li style={s.li}><strong>Fjern</strong>: Åpne → ⋯ → «Delete»</li>
        </ul>
      </div>

      {/* ── STILLINGER ── */}
      <div style={s.section}>
        <h2 style={s.h2}>💼 Stillingsannonser – ledige jobber</h2>
        <p style={s.p}>Disse vises på karrieresiden under «Jobb hos oss».</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Legg til stilling</strong>: Trykk «+» → fyll ut tittel, beskrivelse, søknadsfrist</li>
          <li style={s.li}><strong>Aktiv/inaktiv</strong>: «Skal dette vises på nettsiden?» → JA = vises, NEI = skjules</li>
          <li style={s.li}><strong>Arbeidsoppgaver</strong>: Trykk «+» for å legge til punkter</li>
          <li style={s.li}><strong>Fjern</strong>: Åpne stilling → ⋯ → «Delete»</li>
        </ul>
        <div style={s.tip}>
          💡 Det er tryggere å sette «Aktiv» til NEI enn å slette – da kan du ta den tilbake senere
        </div>
      </div>

      {/* ── AI CHATBOT ── */}
      <div style={s.section}>
        <h2 style={s.h2}>🤖 AI-chatbot – hva chatboten vet og sier</h2>
        <p style={s.p}>
          Chatboten på nettsiden leser instruksjonene du skriver her, og bruker det til å svare på spørsmål fra
          kunder.
        </p>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Hva skal chatboten vite om bedriften?</strong> – skriv fakta, priser, tjenester, åpningstider,
            ansatte. Jo mer du skriver, jo bedre svar.
          </li>
          <li style={s.li}>
            <strong>Velkomstmelding</strong> – den første meldingen chatboten sender til kunden som åpner chatten
          </li>
        </ul>
        <p style={s.p}><strong>Eksempel på hva du kan legge til:</strong></p>
        <ul style={s.ul}>
          <li style={s.li}>«Vi monterer elbil-ladere fra 8500 kr.»</li>
          <li style={s.li}>«Kontaktperson for næring: Eilef Fiskå, 92 45 75 42»</li>
          <li style={s.li}>«Vi tar ikke oppdrag utenfor Mandal-regionen.»</li>
          <li style={s.li}>«Vi har alltid plass til to lærling-søkere.»</li>
        </ul>
        <div style={s.tip}>
          ⚠️ Chatboten krever at OpenAI API-nøkkel er satt opp av utvikleren. Uten nøkkel vil den vise en feilmelding.
        </div>
      </div>

      {/* ── BILDER ── */}
      <div style={s.section}>
        <h2 style={s.h2}>📸 Slik laster du opp bilder</h2>
        <ol style={s.ol}>
          <li style={s.li}>Klikk på bildefeltet (det grå feltet med «Upload»)</li>
          <li style={s.li}>Velg «Upload» og finn bildet på datamaskinen din</li>
          <li style={s.li}>Bildet lastes opp automatisk</li>
          <li style={s.li}>Trykk <strong>Publish</strong> for at det skal vises på nettsiden</li>
        </ol>
        <p style={s.p}><strong>Anbefalte størrelser:</strong></p>
        <ul style={s.ul}>
          <li style={s.li}>Forsidebilde: 1200×800 px (liggende/bredformat)</li>
          <li style={s.li}>Om oss-bilde: 800×600 px (liggende)</li>
          <li style={s.li}>Referanseprosjekter: 600×400 px (liggende)</li>
          <li style={s.li}>Sertifisering-logo: 200×80 px (bred, lav)</li>
        </ul>
        <div style={s.tip}>
          💡 JPEG og PNG fungerer best. Prøv å holde filstørrelsen under 2 MB for rask innlasting.
        </div>
      </div>

      {/* ── LIVE OPPDATERING ── */}
      <div style={s.sectionGreen}>
        <h2 style={s.h2}>🔄 Slik ser endringer live på nettsiden</h2>
        <p style={s.p}>
          Nettsiden oppdaterer seg automatisk ca. <strong>1 minutt</strong> etter du trykker «Publish».
          Du trenger ikke gjøre noe annet.
        </p>
        <p style={s.p}>
          Ser du ikke endringen? Prøv å trykke <strong>Ctrl+Shift+R</strong> (Windows) eller{" "}
          <strong>Cmd+Shift+R</strong> (Mac) i nettleseren for å tømme hurtigbufferen.
        </p>
        <div style={s.tip}>
          💡 For <em>øyeblikkelig</em> oppdatering kan utvikleren sette opp et Sanity-webhook.
          Spør Nathaniel om dette.
        </div>
      </div>

      {/* ── RAPPORTER PROBLEM ── */}
      <div style={s.contact}>
        <h2 style={s.contactH2}>🆘 Noe fungerer ikke? Kontakt utvikleren</h2>
        <p style={s.contactP}>
          Hvis noe ikke fungerer som det skal, ta kontakt med Nathaniel (som lagde nettsiden).
        </p>
        <p style={s.contactP}>📱 <strong style={{ color: "#fff" }}>Ring eller send melding direkte</strong></p>
        <p style={{ ...s.contactP, marginTop: "0.75rem", fontSize: "0.88rem" }}>
          Beskriv gjerne: hva du forsøkte å gjøre, hva som skjedde, og om det kom opp en feilmelding.
          Et skjermbilde hjelper også!
        </p>
      </div>

      <p style={{ ...s.p, color: "#888", fontSize: "0.85rem", textAlign: "center", marginTop: "1rem" }}>
        Redaksjonsverktøy for Elektro Sør AS – tilpasset av utvikleren
      </p>
    </div>
  );
}
