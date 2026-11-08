"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import type { Content, Locale } from "@/data/types";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

/** Loads the chat widget only after the page is idle, so it doesn't slow the first render. */
export default function ChatWidgetLoader(props: {
  t: Content["ui"]["chat"];
  locale: Locale;
  projectTitle?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const show = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(show, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(show, 2500);
    return () => clearTimeout(id);
  }, []);

  return ready ? <ChatWidget {...props} /> : null;
}
