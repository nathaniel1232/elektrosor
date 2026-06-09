"use client";

import { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@/components/Icons";

type Message = { role: "user" | "assistant"; content: string };

function SendIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  );
}

function ChatBubbleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.12 2.99 2.71 3.22 1.09.16 2.18.28 3.29.37V21l4.18-4.18a1.14 1.14 0 0 1 .78-.33 48.3 48.3 0 0 0 5.83-.5c1.59-.23 2.71-1.63 2.71-3.23V6.74c0-1.6-1.12-3-2.71-3.23A48.4 48.4 0 0 0 12 3c-2.39 0-4.74.18-7.04.51C3.37 3.75 2.25 5.14 2.25 6.74v6.02Z" />
    </svg>
  );
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Hei. Spør gjerne om tjenester, ledige stillinger eller noe annet — så svarer jeg så godt jeg kan.",
};

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  const KEY = "es_chat_sid";
  let id = sessionStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(KEY, id);
  }
  return id;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: getSessionId(),
          messages: updated
            .filter((m, i) => !(i === 0 && m === INITIAL_MESSAGE))
            .map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? data.error ?? "Beklager, prøv igjen." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Noe gikk galt. Ring oss på 38 27 13 90." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Lukk chat" : "Åpne chat"}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-blue-900 hover:bg-blue-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        {open ? <XMarkIcon className="w-5 h-5" /> : <ChatBubbleIcon className="w-5 h-5" />}
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-5 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ maxHeight: "70vh" }}
        >
          <div className="bg-blue-900 text-white px-4 py-3 flex items-center justify-between">
            <p className="font-semibold text-sm">Spør Elektro Sør</p>
            <button onClick={() => setOpen(false)} className="text-blue-200 hover:text-white">
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : ""}>
                <div
                  className={`inline-block max-w-[85%] px-3 py-2 text-sm leading-relaxed rounded ${
                    m.role === "user"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div>
                <div className="inline-block bg-gray-100 rounded px-3 py-2.5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="px-3 py-2.5 border-t border-gray-200 flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv en melding…"
              className="flex-1 text-sm border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-700"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-9 h-9 bg-blue-900 hover:bg-blue-800 disabled:opacity-40 text-white rounded flex items-center justify-center"
            >
              <SendIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
