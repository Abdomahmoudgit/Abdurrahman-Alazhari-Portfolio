"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

import { contactEmail, web3formsKey } from "@/data";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-white/[0.1] bg-[#10132E] px-4 py-3 text-sm md:text-base text-white placeholder:text-white-200/60 outline-none focus:border-purple transition-colors";

// Sends messages to the owner's inbox through Web3Forms (no backend needed).
const ContactForm = () => {
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
      className="w-full max-w-xl mt-6 flex flex-col gap-4 rounded-3xl border border-white/[0.1] p-5 md:p-8"
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <label className="flex-1">
          <span className="sr-only">Name</span>
          <input name="name" required placeholder="Your name" className={inputClass} />
        </label>
        <label className="flex-1">
          <span className="sr-only">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className={inputClass}
          />
        </label>
      </div>
      <label>
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project…"
          className={`${inputClass} resize-y`}
        />
      </label>
      {/* Honeypot: bots fill this hidden field, Web3Forms drops those submissions */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-center inline-flex items-center justify-center gap-2 h-12 w-full md:w-60 rounded-lg bg-purple text-black-100 font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <FaPaperPlane />
      </button>

      <p aria-live="polite" className="text-center text-sm min-h-5">
        {status === "sent" && (
          <span className="text-green-400">
            Thanks! Your message was sent — I&apos;ll reply soon.
          </span>
        )}
        {status === "error" && (
          <span className="text-red-400">
            Something went wrong. Please email me at{" "}
            <a href={`mailto:${contactEmail}`} className="underline">
              {contactEmail}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
};

export default ContactForm;
