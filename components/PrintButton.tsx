"use client";

import { FaPrint } from "react-icons/fa6";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg bg-purple px-4 py-2 text-sm font-semibold text-white dark:text-black-100 hover:opacity-90"
    >
      <FaPrint />
      {label}
    </button>
  );
}
