"use client";

import { useState } from "react";

const serviceOptions = [
  "Velg type arbeid...",
  "Ny installasjon / uttak",
  "Sikringsskap / oppgradering",
  "EL-bil ladeanlegg",
  "Smarthus / automasjon",
  "Feilsøking / reparasjon",
  "Næringsprosjekt",
  "Utebelysning",
  "Annet",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function BestillingForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    serviceType: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/bestilling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Noe gikk galt. Prøv igjen.");
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setErrorMsg("Nettverksfeil. Sjekk forbindelsen din og prøv igjen.");
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-xl font-extrabold text-green-800 mb-2">Bestilling mottatt!</h2>
        <p className="text-green-700 text-sm">
          Takk for din henvendelse. Vi tar kontakt innen kort tid for å bekrefte og planlegge.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
          Navn <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={fields.name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Ola Nordmann"
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            E-post <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="deg@epost.no"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-1">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            value={fields.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="+47 000 00 000"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
          Adresse (der jobben skal utføres)
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={fields.address}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Gateveien 1"
        />
      </div>

      {/* City + PostalCode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-700 mb-1">
            Postnummer
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            value={fields.postalCode}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="4600"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
            By / sted
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={fields.city}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Kristiansand"
          />
        </div>
      </div>

      {/* Service type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-1">
          Type arbeid
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={fields.serviceType}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
        >
          {serviceOptions.map((o) => (
            <option key={o} value={o === serviceOptions[0] ? "" : o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
          Beskrivelse av oppdraget <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          value={fields.description}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
          placeholder="Beskriv hva som skal gjøres, type bygg, eventuelle spesielle forhold..."
        />
      </div>

      {/* Error */}
      {formState === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full transition-colors text-base"
      >
        {formState === "loading" ? "Sender bestilling..." : "Send bestilling"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Vi tar kontakt innen 1 virkedag. Ingen bindende avtale ved innsending.
      </p>
    </form>
  );
}
