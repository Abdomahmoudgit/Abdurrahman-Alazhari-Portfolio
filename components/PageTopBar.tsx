import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

import type { Content } from "@/data";
import ThemeToggle from "./ui/ThemeToggle";

/** Back link + language switch + theme toggle, for inner pages (blog). */
export default function PageTopBar({
  ui,
  backHref,
  backLabel,
  otherLocaleHref,
}: {
  ui: Content["ui"];
  backHref: string;
  backLabel: string;
  otherLocaleHref: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-purple transition-colors"
      >
        <FaArrowLeft className="rtl:-scale-x-100" />
        {backLabel}
      </Link>
      <div className="flex items-center gap-4 rounded-xl border border-line/10 px-4 py-2 card-surface">
        <a
          href={otherLocaleHref}
          aria-label={ui.switchLangAria}
          title={ui.switchLangAria}
          className="inline-flex min-w-7 h-7 items-center justify-center text-sm font-semibold text-fg/80 hover:text-purple transition-colors"
        >
          {ui.switchLangLabel}
        </a>
        <ThemeToggle toLight={ui.themeToLight} toDark={ui.themeToDark} />
      </div>
    </div>
  );
}
