"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export default function StudioPage() {
  if (!projectId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Sanity CMS ikke konfigurert</h1>
          <p className="text-gray-500 text-sm mb-6">
            Legg til disse miljøvariablene for å aktivere innholdsredigering:
          </p>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="font-bold text-blue-900 w-5 flex-shrink-0">1.</span>
              <span>Gå til <a href="https://sanity.io" target="_blank" rel="noopener" className="text-blue-600 underline">sanity.io</a> og opprett gratis konto</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-900 w-5 flex-shrink-0">2.</span>
              <span>Opprett et nytt prosjekt og kopier prosjekt-ID</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-900 w-5 flex-shrink-0">3.</span>
              <span>Legg til <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID=din-id</code> i Vercel</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-900 w-5 flex-shrink-0">4.</span>
              <span>Deploy på nytt – da lastes Studio her automatisk</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
