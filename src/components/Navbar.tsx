"use client";

import Link from "next/link";
import { useState } from "react";
import { PhoneIcon, EnvelopeIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from "@/components/Icons";

const navLinks = [
  {
    label: "Våre tjenester",
    children: [
      { label: "Privatmarkedet", href: "/tjenester/privat" },
      { label: "Butikk / virksomhet", href: "/tjenester/naring" },
      { label: "Industri / bedrift", href: "/tjenester/naring#industri" },
      { label: "Elektrotermografering", href: "/tjenester/privat#termografi" },
    ],
  },
  { label: "Referanser", href: "/referanser" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Ledig stilling", href: "/karriere" },
  { label: "Kontakt oss", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-blue-900 text-blue-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6 h-9">
          <a href="tel:+4738271390" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>38 27 13 90</span>
          </a>
          <a href="mailto:firmapost@elektro-sor.no" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <EnvelopeIcon className="w-3.5 h-3.5" />
            <span>firmapost@elektro-sor.no</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img src="/images/elektro_sor_positiv.png" alt="Elektro Sør" className="h-9 sm:h-10 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors rounded">
                      {link.label}
                      <ChevronDownIcon className="w-3.5 h-3.5 mt-0.5" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors text-sm"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors rounded"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/bestilling"
                className="ml-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded transition-colors"
              >
                Bestill elektriker
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-blue-900 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Åpne meny"
            >
              {mobileOpen ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
          <Link href="/tjenester/privat" className="block px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded" onClick={() => setMobileOpen(false)}>Privatmarkedet</Link>
          <Link href="/tjenester/naring" className="block px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded" onClick={() => setMobileOpen(false)}>Butikk / næring / industri</Link>
          <Link href="/referanser" className="block px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded" onClick={() => setMobileOpen(false)}>Referanser</Link>
          <Link href="/om-oss" className="block px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded" onClick={() => setMobileOpen(false)}>Om oss</Link>
          <Link href="/karriere" className="block px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded" onClick={() => setMobileOpen(false)}>Ledig stilling</Link>
          <Link href="/kontakt" className="block px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded" onClick={() => setMobileOpen(false)}>Kontakt oss</Link>
          <Link
            href="/bestilling"
            className="block mt-3 bg-red-600 text-white font-semibold px-4 py-3 rounded text-center"
            onClick={() => setMobileOpen(false)}
          >
            Bestill elektriker
          </Link>
        </div>
      )}
    </header>
  );
}
