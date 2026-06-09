"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [err, setErr] = useState("");
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErr("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? "Noe gikk galt.");
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setErr("Nettverksfeil. Prøv igjen.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-gray-200 rounded p-6 text-sm text-gray-700">
        <p className="font-semibold text-gray-900 mb-1">Takk for meldingen.</p>
        <p>Vi tar kontakt så snart vi kan.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Firma (ikke fyll ut)
          <input
            type="text" name="company" tabIndex={-1} autoComplete="off"
            value={fields.company} onChange={change}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm text-gray-700 mb-1">Fornavn</label>
          <input
            id="firstName" name="firstName" type="text" required
            value={fields.firstName} onChange={change}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm text-gray-700 mb-1">Etternavn</label>
          <input
            id="lastName" name="lastName" type="text"
            value={fields.lastName} onChange={change}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">E-post</label>
        <input
          id="email" name="email" type="email" required
          value={fields.email} onChange={change}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Melding</label>
        <textarea
          id="message" name="message" rows={5} required
          value={fields.message} onChange={change}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700 resize-y"
        />
      </div>
      {state === "error" && (
        <p className="text-sm text-red-700">{err}</p>
      )}
      <button
        type="submit"
        disabled={state === "loading"}
        className="bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white font-medium px-5 py-2.5 rounded text-sm"
      >
        {state === "loading" ? "Sender…" : "Send melding"}
      </button>
    </form>
  );
}
