"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

import { cn } from "@/lib/utils";

/** Sun/moon button that switches between dark (default) and light mode. */
export default function ThemeToggle({
  toLight,
  toDark,
  className,
}: {
  toLight: string;
  toDark: string;
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is only known on the client, so pick the icon after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";
  const label = isDark ? toLight : toDark;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={cn("inline-flex items-center justify-center w-7 h-7 rounded-md text-fg/80 hover:text-purple transition-colors", className)}
    >
      {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
    </button>
  );
}
