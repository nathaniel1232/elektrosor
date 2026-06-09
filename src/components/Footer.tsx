import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="sm:col-span-2 md:col-span-1">
          <img src="/images/elektro_sor_negativ.png" alt="Elektro Sør" className="h-9 w-auto mb-3" />
          <p className="text-gray-400 leading-relaxed">
            Elektroentreprenør i Mandal. Vi tar privat-, nærings- og industrioppdrag i Lindesnesregionen.
          </p>
        </div>

        <div>
          <p className="text-white font-medium mb-3">Tjenester</p>
          <ul className="space-y-1.5 text-gray-400">
            <li><Link href="/tjenester/privat" className="hover:text-white">Privat</Link></li>
            <li><Link href="/tjenester/naring" className="hover:text-white">Næring og industri</Link></li>
            <li><Link href="/bestilling" className="hover:text-white">Bestill elektriker</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-medium mb-3">Selskapet</p>
          <ul className="space-y-1.5 text-gray-400">
            <li><Link href="/om-oss" className="hover:text-white">Om oss</Link></li>
            <li><Link href="/referanser" className="hover:text-white">Referanser</Link></li>
            <li><Link href="/fagartikler" className="hover:text-white">Fagartikler</Link></li>
            <li><Link href="/karriere" className="hover:text-white">Karriere</Link></li>
            <li><Link href="/apenhetsloven" className="hover:text-white">Åpenhetsloven</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-medium mb-3">Kontakt</p>
          <ul className="space-y-1.5 text-gray-400">
            <li><a href="tel:+4738271390" className="hover:text-white">38 27 13 90</a></li>
            <li><a href="mailto:firmapost@elektro-sor.no" className="hover:text-white">firmapost@elektro-sor.no</a></li>
            <li>Mikkelsmyrveien 4B<br/>4515 Mandal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Elektro Sør AS · Org.nr. 985 022 036
        </div>
      </div>
    </footer>
  );
}
