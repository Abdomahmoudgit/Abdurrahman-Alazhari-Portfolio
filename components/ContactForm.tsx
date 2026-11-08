"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

import type { Content } from "@/data";
import { contactEmail, web3formsKey } from "@/data/shared";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-line/10 bg-chip px-4 py-3 text-sm md:text-base text-fg placeholder:text-fg-soft/70 outline-none focus:border-purple transition-colors";

// Sends messages to the owner's inbox through Web3Forms (no backend needed).
const ContactForm = ({ t }: { t: Content["form"] }) => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: web3formsKey,
          subject: `Portfolio message from ${data.name}`,
          from_name: "Portfolio contact form",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mt-6 flex flex-col gap-4 rounded-3xl border border-line/10 p-5 md:p-8 card-surface"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <label className="flex-1">
          <span className="sr-only">{t.name}</span>
          <input name="name" required placeholder={t.name} className={inputClass} />
        </label>
        <label className="flex-1">
          <span className="sr-only">{t.email}</span>
          <input
            name="email"
            type="email"
            dir="ltr"
            required
            placeholder={t.email}
            className={`${inputClass} rtl:text-right`}
          />
        </label>
      </div>
      <label>
        <span className="sr-only">{t.message}</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </label>
      {/* Honeypot: bots fill this hidden field, Web3Forms drops those submissions */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-center inline-flex items-center justify-center gap-2 h-12 w-full md:w-60 rounded-lg bg-purple text-white dark:text-black-100 font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.send}
        <FaPaperPlane className="rtl:-scale-x-100" />
      </button>

      <p aria-live="polite" className="text-center text-sm min-h-5">
        {status === "sent" && <span className="text-green-600 dark:text-green-400">{t.sent}</span>}
        {status === "error" && (
          <span className="text-red-600 dark:text-red-400">
            {t.error}{" "}
            <a href={`mailto:${contactEmail}`} className="underline" dir="ltr">
              {contactEmail}
            </a>
          </span>
        )}
      </p>
    </form>
  );
};

export default ContactForm;
