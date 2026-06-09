"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Ny installasjon eller uttak",
  "Sikringsskap / oppgradering",
  "Elbillader",
  "Smarthus / styring",
  "Feilsøking eller reparasjon",
  "Næring eller industri",
  "Utebelysning",
  "Annet",
];

type State = "idle" | "loading" | "success" | "error";

const field = "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700";

export default function BestillingForm() {
  const [state, setState] = useState<State>("idle");
  const [err, setErr] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    serviceType: "",
    description: "",
    company: "", // honeypot — must stay empty
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((p) => ({ ...p, [e.target.name]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErr("");
    try {
      const res = await fetch("/api/bestilling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? "Noe gikk galt. Prøv igjen.");
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setErr("Nettverksfeil. Sjekk forbindelsen og prøv igjen.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-gray-200 rounded p-6">
        <p className="font-semibold text-gray-900 mb-1">Bestilling mottatt.</p>
        <p className="text-gray-700 text-sm">
          Vi tar kontakt så snart vi får sett på det — vanligvis innen én virkedag.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Honeypot — hidden from humans, bots fill it */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Firma (ikke fyll ut)
          <input
            type="text" name="company" tabIndex={-1} autoComplete="off"
            value={fields.company} onChange={change}
          />
        </label>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
          Navn <span className="text-red-600">*</span>
        </label>
        <input id="name" name="name" type="text" required
               value={fields.name} onChange={change} className={field} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
            E-post <span className="text-red-600">*</span>
          </label>
          <input id="email" name="email" type="email" required
                 value={fields.email} onChange={change} className={field} />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm text-gray-700 mb-1">
            Telefon <span className="text-red-600">*</span>
          </label>
          <input id="phoneNumber" name="phoneNumber" type="tel" required
                 value={fields.phoneNumber} onChange={change} className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm text-gray-700 mb-1">
          Adresse der jobben skal utføres <span className="text-red-600">*</span>
        </label>
        <input id="address" name="address" type="text" required
               value={fields.address} onChange={change} className={field} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="postalCode" className="block text-sm text-gray-700 mb-1">Postnr. <span className="text-red-600">*</span></label>
          <input id="postalCode" name="postalCode" type="text" required
                 value={fields.postalCode} onChange={change} className={field} />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm text-gray-700 mb-1">Sted <span className="text-red-600">*</span></label>
          <input id="city" name="city" type="text" required
                 value={fields.city} onChange={change} className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm text-gray-700 mb-1">Type arbeid</label>
        <select id="serviceType" name="serviceType"
                value={fields.serviceType} onChange={change} className={`${field} bg-white`}>
          <option value="">Velg…</option>
          {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm text-gray-700 mb-1">
          Beskriv oppdraget <span className="text-red-600">*</span>
        </label>
        <textarea id="description" name="description" rows={5} required
                  value={fields.description} onChange={change}
                  className={`${field} resize-y`}
                  placeholder="Hva skal gjøres, type bygg, eventuelle spesielle forhold…" />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-700">{err}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white font-medium px-5 py-2.5 rounded text-sm"
      >
        {state === "loading" ? "Sender…" : "Send bestilling"}
      </button>

      <p className="text-xs text-gray-500">Ingen bindende avtale ved innsending.</p>
    </form>
  );
}
