import type { Metadata } from "next";
import Link from "next/link";
import {
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  CheckIcon,
  StarIcon,
  ArrowRightIcon,
  BoltIcon,
} from "@/components/Icons";
import { getTestimonials } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Elektro Sør AS – Din lokale elektriker i Mandal",
  description:
    "Elektro Sør AS er din lokale elektriker i Mandalsregionen. Vi utfører alt fra enkle installasjoner til store industriprosjekter. Ring 38 27 13 90.",
};

function ImagePlaceholder({ label = "Legg til bilde", className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1e40af 60%, #1d4ed8 100%)" }}
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500 rounded-full opacity-20" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-red-600 rounded-full opacity-10" />
      <div className="relative z-10 text-center select-none">
        <svg className="w-10 h-10 mx-auto mb-2 text-blue-400 opacity-60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
        <p className="text-xs text-blue-300 opacity-70">{label}</p>
      </div>
    </div>
  );
}

const services = [
  {
    icon: HomeIcon,
    title: "Privatmarkedet",
    desc: "Stikkontakter, sikringsskap, belysning, elbillader, gulvvarme – vi fikser alt det elektriske i hjemmet ditt.",
    href: "/tjenester/privat",
    bg: "from-blue-50 to-blue-100",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Næringsliv",
    desc: "Elektriske installasjoner tilpasset butikker og virksomheter – fra enkle endringer til komplette anlegg.",
    href: "/tjenester/naring",
    bg: "from-red-50 to-red-100",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Industri",
    desc: "Vi løser store industrioppdrag. Vi har hatt ansvar for elektroanlegg hos GE Healthcare og Mandal Fengsel.",
    href: "/tjenester/naring#industri",
    bg: "from-slate-50 to-slate-100",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Termografering",
    desc: "Avdekk feil og svakheter i elektriske anlegg med termografering – før de blir et kostbart problem.",
    href: "/tjenester/privat#termografi",
    bg: "from-amber-50 to-amber-100",
  },
];

const steps = [
  { num: "01", title: "Ta kontakt", desc: "Ring oss eller send en bestilling på nett. Vi svarer alltid innen én arbeidsdag." },
  { num: "02", title: "Vi gir deg tilbud", desc: "Etter eventuell befaring får du et klart og uforpliktende tilbud uten skjulte kostnader." },
  { num: "03", title: "Jobben utføres", desc: "Sertifiserte fagarbeidere utfører jobben ryddig og effektivt. Vi rydder opp etter oss." },
];

const certs = [
  "Registrert El-installatør",
  "Godkjent lærebedrift",
  "Registrert EKOM-installatør",
  "Sertifisert KNX Partner",
  "Godkjent for ansvarsrett",
];

const FALLBACK_TESTIMONIALS = [
  {
    _id: "1",
    name: "Marius Romedal",
    role: "Privatkunde",
    initials: "MR",
    rating: 5,
    text: "Veldig god service og de holder det de lover. Kjempefornøyd med kvalitet på produktene og utført jobb.",
    featured: true,
    order: 0,
  },
  {
    _id: "2",
    name: "Ingrid Hansen",
    role: "Bedriftseier",
    initials: "IH",
    rating: 5,
    text: "Profesjonell gjeng som vet hva de gjør. Anbefaler sterkt til alle som trenger elektriker.",
    featured: true,
    order: 1,
  },
  {
    _id: "3",
    name: "Johan Eriksen",
    role: "Næringsvirksomhet",
    initials: "JE",
    rating: 5,
    text: "Løste komplisert elektroproblem på kort tid. Ung, dyktig og pålitelig. Takk!",
    featured: true,
    order: 2,
  },
  {
    _id: "4",
    name: "Maria Andersen",
    role: "Privatkunde",
    initials: "MA",
    rating: 5,
    text: "Ryddig, effektivt og gode priser. Vil absolutt bruke dem igjen.",
    featured: true,
    order: 3,
  },
];

export default async function Home() {
  const testimonials = (await getTestimonials()) || FALLBACK_TESTIMONIALS;
  const displayTestimonial = testimonials[0] || FALLBACK_TESTIMONIALS[0];

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-800 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <BoltIcon className="w-3.5 h-3.5 text-red-400" />
                Godkjent elektroentreprenør – Mandal
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Din lokale <span className="text-red-400">elektriker</span> – rask og pålitelig
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
                Vi holder til i Mandal og utfører alt fra enkle hjemmeinstallasjoner til totale elektrotekniske prosjekter for industri og næringsliv.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/bestilling"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30"
                >
                  Bestill elektriker
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+4738271390"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
                >
                  <PhoneIcon className="w-4 h-4" />
                  38 27 13 90
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Sertifiserte fagarbeidere", "Vakttelefon 24/7", "Gratis befaring"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-blue-300 bg-blue-800/60 px-3 py-1.5 rounded-full">
                    <CheckIcon className="w-3 h-3 text-red-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:block relative">
              <ImagePlaceholder
                label="Legg til bilde via admin"
                className="rounded-2xl h-96 w-full shadow-2xl shadow-blue-950/50"
              />
              <div className="absolute -bottom-5 left-6 bg-white rounded-xl shadow-xl p-4 w-56 border border-gray-100">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3.5 h-3.5 text-red-500" />)}
                </div>
                <p className="text-xs text-gray-600 leading-snug">&ldquo;Kjempefornøyd – raskt og ryddig!&rdquo;</p>
                <p className="text-xs font-semibold text-gray-900 mt-1.5">Marius Romedal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            {[
              { value: "25+", label: "År i bransjen" },
              { value: "500+", label: "Gjennomførte oppdrag" },
              { value: "4.9★", label: "Snittkarakter" },
              { value: "24/7", label: "Vakttelefon" },
            ].map((s) => (
              <div key={s.label} className="px-4 first:pl-0 last:pr-0">
                <p className="text-3xl font-bold text-blue-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">Tjenester</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">Hva kan vi hjelpe deg med?</h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              Vi har høy kompetanse på mange områder innen elektrofaget og utfører alle oppdrag med faglig stolthet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 card-hover"
                >
                  <div className={`h-36 bg-gradient-to-br ${s.bg} flex items-center justify-center relative overflow-hidden`}>
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-blue-800" />
                    </div>
                    <div className="absolute top-2 right-2 text-[10px] text-gray-300 bg-white/80 rounded px-1.5 py-0.5 font-medium">Bilde</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-blue-700 text-sm font-medium">
                      Les mer <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">Enkelt og greit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">Slik jobber vi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-blue-900/20">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/bestilling"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Send bestilling nå <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 bg-blue-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder
              label="Legg til bilde av team/kontor"
              className="rounded-2xl h-72 lg:h-96 w-full"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">Om oss</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">Lokal elektriker – siden starten</h2>
              <p className="text-blue-200 leading-relaxed mb-4">
                Vi holder til i Mikkelsmyrveien 4B på Skinsnes i Mandal. Gjennom mange år har vi utført utallige oppdrag for folk og virksomheter i Mandalsregionen.
              </p>
              <p className="text-blue-200 leading-relaxed mb-6">
                Blant våre største prosjekter er utbyggingen ved <strong className="text-white">GE Healthcares fabrikker</strong> og arbeidet med <strong className="text-white">Mandal Fengsel</strong>.
              </p>
              <ul className="space-y-2 mb-7">
                {["Konkurransedyktige priser", "Sertifiserte fagarbeidere og mestere", "Vakttelefon utenom åpningstid", "Godkjent lærebedrift"].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-blue-100">
                    <span className="flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
              >
                Les mer om oss <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL + REFERENCES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Testimonial */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Anmeldelser</span>
              <h2 className="text-xl font-bold text-gray-900 mt-1 mb-5">Hva kundene sier</h2>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-3 right-5 text-7xl text-blue-50 font-serif leading-none select-none">&rdquo;</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(displayTestimonial.rating || 5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-red-500" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 relative z-10">
                  {displayTestimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{displayTestimonial.initials}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{displayTestimonial.name}</p>
                    <p className="text-xs text-gray-400">{displayTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* References */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Referanser</span>
              <h2 className="text-xl font-bold text-gray-900 mt-1 mb-5">Noen prosjekter vi er stolte av</h2>
              <div className="space-y-3">
                {[
                  { name: "GE Healthcare", desc: "Utbygging av elektrisk anlegg ved fabrikker i Ramslandsvågen", tag: "Industri" },
                  { name: "Mandal Fengsel", desc: "Elektrotekniske installasjoner i forbindelse med bygging", tag: "Offentlig" },
                  { name: "Mandal Golfklubb", desc: "Elektriske arbeider på klubbhus og anlegg", tag: "Næring" },
                ].map((proj) => (
                  <div key={proj.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden flex card-hover">
                    <div className="w-14 flex-shrink-0 bg-gradient-to-b from-blue-800 to-blue-900 flex items-center justify-center">
                      <BoltIcon className="w-5 h-5 text-blue-300 opacity-50" />
                    </div>
                    <div className="px-4 py-3 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-semibold text-gray-900 text-sm">{proj.name}</p>
                        <span className="text-[10px] font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{proj.tag}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-snug">{proj.desc}</p>
                    </div>
                  </div>
                ))}
                <Link href="/referanser" className="inline-flex items-center gap-1.5 text-blue-800 hover:text-red-600 text-sm font-semibold mt-1 transition-colors">
                  Se alle referanser <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(239,68,68,0.15),_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Trenger du elektriker?</h2>
          <p className="text-blue-200 mb-8 text-lg">Kontakt oss på 38 27 13 90 eller send en bestilling – vi svarer raskt.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/bestilling"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40"
            >
              Send bestilling <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="tel:+4738271390"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
            >
              <PhoneIcon className="w-4 h-4" />
              38 27 13 90
            </a>
          </div>
        </div>
      </section>

      {/* ── CERTS ── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-7">
            Sertifiseringer og godkjenninger
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certs.map((cert) => (
              <div
                key={cert}
                className="bg-white border border-gray-200 rounded-full px-5 py-2 text-gray-700 text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
              >
                <CheckIcon className="w-4 h-4 text-blue-800 flex-shrink-0" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
