import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  BoltIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
} from "@/components/Icons";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Elektro Sør AS – elektriker i Mandal",
  description:
    "Elektro Sør AS er en lokal elektroentreprenør i Mandal. Privat, næring og industri i Lindesnesregionen. Ring 38 27 13 90.",
};

const SERVICES = [
  {
    Icon: HomeIcon,
    title: "Privatmarkedet",
    desc: "Stikkontakter, sikringsskap, belysning, elbillader, gulvvarme og smarthus.",
    href: "/tjenester/privat",
  },
  {
    Icon: BuildingOfficeIcon,
    title: "Næringsliv",
    desc: "Installasjoner for butikker og virksomheter — fra enkle endringer til komplette anlegg.",
    href: "/tjenester/naring",
  },
  {
    Icon: WrenchScrewdriverIcon,
    title: "Industri",
    desc: "Større industrioppdrag. Vi har hatt ansvar for elektroanlegg hos GE Healthcare og Mandal Fengsel.",
    href: "/tjenester/naring#industri",
  },
  {
    Icon: MagnifyingGlassIcon,
    title: "Termografering",
    desc: "Avdekk feil og varmegang i elektriske anlegg før det blir et kostbart problem.",
    href: "/tjenester/privat#termografi",
  },
];

const REFS = [
  {
    title: "GE Healthcare",
    location: "Spangereid",
    desc: "Utbygging av elektrisk anlegg ved fabrikkene i Ramslandsvågen.",
    tag: "Industri",
  },
  {
    title: "Mandal Fengsel",
    location: "Mandal",
    desc: "Elektrotekniske installasjoner i forbindelse med oppføring av bygget.",
    tag: "Offentlig",
  },
  {
    title: "Mandal Golfklubb",
    location: "Mandal",
    desc: "Elektriske arbeider på klubbhus og uteanlegg.",
    tag: "Næring",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-800/70 text-blue-100 text-[11px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <BoltIcon className="w-3.5 h-3.5 text-red-400" />
                Godkjent elektroentreprenør — Mandal
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
                Din lokale{" "}
                <span className="text-red-400">elektriker</span>
                <span className="block sm:inline">{" "}— rask og pålitelig</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl mb-7">
                Vi holder til i Mandal og utfører alt fra enkle hjemmeinstallasjoner til totale
                elektrotekniske prosjekter for industri og næringsliv.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <Link
                  href="/bestilling"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all hover:shadow-lg hover:shadow-red-900/30"
                >
                  Bestill elektriker
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+4738271390"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-base"
                >
                  <PhoneIcon className="w-4 h-4" />
                  38 27 13 90
                </a>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Sertifiserte fagarbeidere", "Vakttelefon 24/7", "Gratis befaring"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 bg-blue-800/60 text-blue-100 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    <CheckIcon className="w-3 h-3 text-red-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero image + testimonial card */}
            <div className="relative">
              <HeroImage />

              <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs bg-white rounded-xl shadow-xl p-4 sm:p-5 border border-gray-100">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 text-red-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-snug">
                  &ldquo;Veldig god service og de holder det de lover. Kjempefornøyd …&rdquo;
                </p>
                <p className="text-gray-900 font-semibold text-xs mt-2">Marius Romedal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1.5">
              Tjenester
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl">
              Hva kan vi hjelpe deg med?
            </h2>
            <p className="text-gray-600 text-base mt-3 max-w-xl">
              Vi har høy kompetanse på mange områder innen elektrofaget — og utfører hvert
              oppdrag med faglig stolthet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SERVICES.map((s) => {
              const Icon = s.Icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-blue-900 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 group-hover:gap-2 transition-all">
                    Les mer <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1.5">
                Om oss
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
                Lokal entreprenør — siden starten
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vi holder til i Mikkelsmyrveien 4B på Skinsnes i Mandal. Gjennom mange år har vi
                utført utallige oppdrag for folk og virksomheter i Mandalsregionen — fra én ny
                stikkontakt til totale industriprosjekter.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Blant våre største er utbyggingen ved{" "}
                <span className="font-semibold text-gray-900">GE Healthcare</span> og arbeidet
                med <span className="font-semibold text-gray-900">Mandal Fengsel</span>.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  "Konkurransedyktige priser",
                  "Sertifiserte fagarbeidere og mestere",
                  "Vakttelefon utenom åpningstid",
                  "Godkjent lærebedrift",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-1.5 text-blue-900 font-semibold hover:gap-2.5 transition-all"
              >
                Les mer om oss <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <dl className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 text-sm">
              {[
                ["Adresse", "Mikkelsmyrveien 4B, 4515 Mandal"],
                ["Telefon", "38 27 13 90"],
                ["E-post", "firmapost@elektro-sor.no"],
                ["Åpningstid", "Man–fre 07:00–15:00"],
                ["Daglig leder", "Eilef Fiskå"],
                ["Org.nr.", "985 022 036"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 py-3 border-b border-gray-200 last:border-0"
                >
                  <dt className="text-gray-500">{k}</dt>
                  <dd className="text-gray-900 font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── REFERANSER ── */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1.5">
                Referanser
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Noen prosjekter vi er stolte av
              </h2>
            </div>
            <Link
              href="/referanser"
              className="inline-flex items-center gap-1.5 text-blue-900 font-semibold hover:gap-2.5 transition-all text-sm"
            >
              Se alle referanser <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {REFS.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full">
                    {r.tag}
                  </span>
                  <span className="text-xs text-gray-500">{r.location}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MER INFORMASJON ── */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1.5">
            Mer om oss
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Bli bedre kjent med Elektro Sør
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/sertifiseringer",
                title: "Sertifiseringer",
                desc: "Godkjenninger og medlemskap som dokumenterer kvaliteten på arbeidet vi leverer.",
              },
              {
                href: "/karriere",
                title: "Ledige stillinger",
                desc: "Vi søker industrielektrikere, serviceelektrikere og lærlinger akkurat nå.",
              },
              {
                href: "/esg",
                title: "ESG og bærekraft",
                desc: "Hvordan vi tar ansvar for miljø, mennesker og forretningspraksis.",
              },
              {
                href: "/apenhetsloven",
                title: "Åpenhetsloven",
                desc: "Vår redegjørelse om menneskerettigheter og anstendige arbeidsforhold.",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-blue-900">
                  {l.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{l.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 group-hover:gap-2 transition-all">
                  Les mer <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Trenger du elektriker?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-7 sm:mb-8 max-w-lg mx-auto">
            Ring oss eller send en bestilling — vi svarer raskt og kommer når vi har sagt vi
            skal komme.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/bestilling"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-3.5 rounded-full"
            >
              Send bestilling <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="tel:+4738271390"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full"
            >
              <PhoneIcon className="w-4 h-4" />
              38 27 13 90
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
