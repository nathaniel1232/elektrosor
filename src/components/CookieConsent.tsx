"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie_consent");
    if (!choice) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "all");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informasjonskapsler"
      className="fixed bottom-0 left-0 right-0 z-[100] animate-fade-in-up"
    >
      <div className="bg-white border-t border-gray-150 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm">Personvern og informasjonskapsler</p>
            <p className="text-gray-500 text-xs leading-relaxed mt-0.5">
              Vi bruker nødvendige informasjonskapsler for at nettsiden skal fungere. Med ditt samtykke bruker vi også analytiske kapsler for å forbedre opplevelsen.{" "}
              <a href="/apenhetsloven" className="text-blue-700 hover:text-blue-900 underline underline-offset-2">
                Les mer
              </a>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 px-5 py-2.5 rounded-full transition-all duration-150"
            >
              Kun nødvendige
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 px-5 py-2.5 rounded-full transition-all duration-150"
            >
              Godta alle
            </button>
          </div>

          {/* Close */}
          <button
            onClick={decline}
            aria-label="Lukk"
            className="hidden sm:flex flex-shrink-0 text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
