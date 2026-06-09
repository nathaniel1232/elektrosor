"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

type Props = {
  positionId: "industri" | "service" | "laerling";
  positionTitle: string;
};

export default function JobApplicationForm({ positionId, positionTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [err, setErr] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
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
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ positionId, positionTitle, ...fields }),
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

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded"
      >
        Søk på stillingen
      </button>
    );
  }

  if (state === "success") {
    return (
      <div className="border border-gray-200 rounded p-4 text-sm">
        <p className="font-semibold text-gray-900 mb-1">Søknad mottatt</p>
        <p className="text-gray-700">Eilef tar kontakt på e-post eller telefon. Takk for at du søker.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-gray-200 rounded p-4 space-y-3 bg-white">
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Firma (ikke fyll ut)
          <input
            type="text" name="company" tabIndex={-1} autoComplete="off"
            value={fields.company} onChange={change}
          />
        </label>
      </div>
      <p className="text-sm text-gray-500">Søk: <span className="text-gray-900 font-medium">{positionTitle}</span></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name" type="text" required placeholder="Navn"
          value={fields.name} onChange={change}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700"
        />
        <input
          name="email" type="email" required placeholder="E-post"
          value={fields.email} onChange={change}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700"
        />
      </div>
      <input
        name="phone" type="tel" placeholder="Telefon (valgfritt)"
        value={fields.phone} onChange={change}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700"
      />
      <textarea
        name="message" rows={4} placeholder="Kort om deg, erfaring og hvorfor du søker"
        value={fields.message} onChange={change}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700 resize-y"
      />
      {state === "error" && <p className="text-sm text-red-700">{err}</p>}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={state === "loading"}
          className="bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded"
        >
          {state === "loading" ? "Sender…" : "Send søknad"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-sm text-gray-500 hover:text-gray-700 px-3 py-2"
        >
          Avbryt
        </button>
      </div>
    </form>
  );
}
