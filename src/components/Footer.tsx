import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, CheckIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src="/images/logo.svg" alt="Elektro Sør" className="h-10 w-auto mb-3" />
            <p className="text-sm leading-relaxed text-blue-200">
              Din lokale elektriker i Mandalsregionen siden oppstarten. Vi tar på oss alt fra enkle installasjoner til store industriprosjekter.
            </p>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Tjenester</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/tjenester/privat" className="hover:text-white transition-colors">Privatmarkedet</Link></li>
              <li><Link href="/tjenester/naring" className="hover:text-white transition-colors">Butikk / virksomhet</Link></li>
              <li><Link href="/tjenester/naring" className="hover:text-white transition-colors">Industri / bedrift</Link></li>
              <li><Link href="/bestilling" className="hover:text-white transition-colors">Bestill elektriker</Link></li>
            </ul>
          </div>

          {/* Selskapet */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Selskapet</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/om-oss" className="hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="/referanser" className="hover:text-white transition-colors">Referanser</Link></li>
              <li><Link href="/sertifiseringer" className="hover:text-white transition-colors">Sertifiseringer</Link></li>
              <li><Link href="/karriere" className="hover:text-white transition-colors">Ledig stilling</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Kontakt</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>
                <a href="tel:+4738271390" className="flex items-start gap-2 hover:text-white transition-colors">
                  <PhoneIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>38 27 13 90</span>
                </a>
              </li>
              <li>
                <a href="mailto:firmapost@elektro-sor.no" className="flex items-start gap-2 hover:text-white transition-colors">
                  <EnvelopeIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>firmapost@elektro-sor.no</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mikkelsmyrveien 4B<br />4515 Mandal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-400">
          <p>© {new Date().getFullYear()} Elektro Sør AS. Alle rettigheter forbeholdt.</p>
          <div className="flex gap-6 items-center">
            <Link href="/om-oss" className="hover:text-white transition-colors">Om oss</Link>
            <Link href="/apenhetsloven" className="hover:text-white transition-colors">Åpenhetsloven</Link>
            <Link href="/studio/login" className="text-blue-700 hover:text-blue-500 text-xs transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
