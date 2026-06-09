"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@/components/Icons";

type Child = { label: string; href: string };
type Item = { label: string; href?: string; children?: Child[] };

const NAV: Item[] = [
  {
    label: "Tjenester",
    children: [
      { label: "Privatmarkedet", href: "/tjenester/privat" },
      { label: "Næring og industri", href: "/tjenester/naring" },
      { label: "Termografering", href: "/tjenester/privat#termografi" },
    ],
  },
  { label: "Referanser", href: "/referanser" },
  { label: "Fagartikler", href: "/fagartikler" },
  {
    label: "Om oss",
    children: [
      { label: "Om Elektro Sør", href: "/om-oss" },
      { label: "Sertifiseringer", href: "/sertifiseringer" },
      { label: "ESG og bærekraft", href: "/esg" },
      { label: "Åpenhetsloven", href: "/apenhetsloven" },
    ],
  },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar — desktop only */}
      <div className="hidden md:block bg-blue-900 text-blue-100 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6 h-9">
          <a href="tel:+4738271390" className="flex items-center gap-1.5 hover:text-white">
            <PhoneIcon className="w-3.5 h-3.5" />
            38 27 13 90
          </a>
          <a
            href="mailto:firmapost@elektro-sor.no"
            className="flex items-center gap-1.5 hover:text-white"
          >
            <EnvelopeIcon className="w-3.5 h-3.5" />
            firmapost@elektro-sor.no
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/elektro_sor_positiv.png"
                alt="Elektro Sør"
                className="h-9 sm:h-10 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              {NAV.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDownIcon className="w-3.5 h-3.5" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-1 w-56">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-1.5">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/bestilling"
                className="ml-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Bestill elektriker
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden -mr-2 p-3 text-gray-700 hover:text-blue-900"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 py-2">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-gray-50 last:border-b-0">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((cur) => (cur === item.label ? null : item.label))
                      }
                      className="w-full flex items-center justify-between px-3 py-3 text-gray-800 text-base"
                      aria-expanded={mobileExpanded === item.label}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pb-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-blue-900"
                            onClick={() => setMobileOpen(false)}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="block px-3 py-3 text-gray-800 text-base border-b border-gray-50 last:border-b-0"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/bestilling"
                className="block mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 rounded-full text-center text-base"
                onClick={() => setMobileOpen(false)}
              >
                Bestill elektriker
              </Link>
              <div className="flex flex-col gap-2 pt-3 mt-3 border-t border-gray-100">
                <a
                  href="tel:+4738271390"
                  className="flex items-center gap-2 px-3 py-2 text-blue-900 font-semibold"
                >
                  <PhoneIcon className="w-4 h-4" />
                  38 27 13 90
                </a>
                <a
                  href="mailto:firmapost@elektro-sor.no"
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 text-sm"
                >
                  <EnvelopeIcon className="w-4 h-4" />
                  firmapost@elektro-sor.no
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
