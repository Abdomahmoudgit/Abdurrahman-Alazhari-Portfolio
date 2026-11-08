"use client";

import { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaWhatsapp, FaXmark } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

import type { Content, Locale } from "@/data/types";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";

type Msg = { role: "user" | "assistant"; content: string };

const MAX_CHARS = 800;
const MAX_MESSAGES = 12;

/**
 * Floating AI assistant (answers from the portfolio via /api/chat) with a
 * WhatsApp hand-off. Loaded lazily (next/dynamic, ssr:false) from the pages.
 */
export default function ChatWidget({
  t,
  locale,
  projectTitle,
}: {
  t: Content["ui"]["chat"];
  locale: Locale;
  /** Set on a project page so the WhatsApp message names the project. */
  projectTitle?: string;
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const waText = projectTitle
    ? t.whatsappProjectMessage.replace("{project}", projectTitle)
    : t.whatsappMessage;

  // Focus the input on open; Esc closes.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Keep the newest message in view.
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, busy]);

  async function send(text: string) {
    const question = text.trim().slice(0, MAX_CHARS);
    if (!question || busy) return;
    // Keep the request within the server's limit (drop the oldest pair).
    let history: Msg[] = [...messages, { role: "user", content: question }];
    while (history.length > MAX_MESSAGES) history = history.slice(2);

    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    setNotice(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, messages: history }),
      });
      if (!res.ok || !res.body) {
        const msg = res.status === 503 ? t.unavailable : res.status === 429 ? await res.text() : t.error;
        throw new Error(msg);
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) throw new Error(t.error);
    } catch (e) {
      // Drop the empty assistant bubble and show the notice with WhatsApp.
      setMessages(history.slice(0, -1));
      setInput(question);
      setNotice(e instanceof Error && e.message ? e.message : t.error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Floating launcher (bottom end; respects RTL) */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.open}
          className="print:hidden fixed bottom-5 end-5 z-[5001] flex items-center gap-2 rounded-full bg-purple px-4 py-3 text-sm font-semibold text-white dark:text-black-100 shadow-lg shadow-purple/30 transition hover:scale-105 motion-reduce:transition-none"
        >
          <HiSparkles className="h-5 w-5" />
          <span className="hidden sm:inline">{t.open}</span>
        </button>
      )}

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label={t.title}
          className="print:hidden fixed bottom-0 end-0 sm:bottom-5 sm:end-5 z-[5001] flex h-[min(620px,100dvh)] w-full sm:w-[380px] flex-col overflow-hidden sm:rounded-2xl border border-line/15 bg-page shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-line/10 px-4 py-3 card-surface">
            <div className="min-w-0">
              <p className="flex items-center gap-2 font-bold text-fg">
                <HiSparkles className="h-4 w-4 text-purple" />
                {t.title}
              </p>
              <p className="truncate text-xs text-fg-soft">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-fg/70 hover:bg-chip hover:text-fg"
            >
              <FaXmark />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            <Bubble role="assistant">{t.greeting}</Bubble>
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {t.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-purple/40 px-3 py-1.5 text-xs text-purple hover:bg-purple/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) =>
              m.role === "assistant" && !m.content ? (
                <Bubble key={i} role="assistant">
                  <span className="animate-pulse text-fg-soft">{t.thinking}</span>
                </Bubble>
              ) : (
                <Bubble key={i} role={m.role}>
                  {m.content}
                </Bubble>
              )
            )}
            {notice && <p className="rounded-lg bg-chip px-3 py-2 text-xs text-fg-muted">{notice}</p>}
          </div>

          {/* WhatsApp hand-off (always visible) */}
          <a
            href={whatsappLink(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 mb-2 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            <FaWhatsapp className="h-4 w-4" />
            {t.whatsapp}
          </a>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t border-line/10 px-3 py-3"
          >
            <label className="sr-only" htmlFor="chat-input">
              {t.placeholder}
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder={t.placeholder}
              className="max-h-28 min-h-[40px] flex-1 resize-none rounded-lg border border-line/10 bg-chip px-3 py-2 text-sm text-fg placeholder:text-fg-soft/70 outline-none focus:border-purple"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label={t.send}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple text-white dark:text-black-100 disabled:opacity-50"
            >
              <FaPaperPlane className="h-4 w-4 rtl:-scale-x-100" />
            </button>
          </form>
          <p className="px-4 pb-2 text-center text-[10px] text-fg-soft">{t.disclaimer}</p>
        </div>
      )}
    </>
  );
}

function Bubble({ role, children }: { role: Msg["role"]; children: React.ReactNode }) {
  return (
    <div className={cn("flex", role === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed",
          role === "user" ? "bg-purple text-white dark:text-black-100" : "bg-chip text-fg"
        )}
      >
        {children}
      </div>
    </div>
  );
}
