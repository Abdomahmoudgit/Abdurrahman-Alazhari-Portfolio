"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import type { Content } from "@/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export const FloatingNav = ({
  navItems,
  ui,
  otherLocaleHref,
  className,
}: {
  /** desktopOnly items are hidden on phones so the bar still fits */
  navItems: (Content["nav"][number] & { desktopOnly?: boolean })[];
  ui: Content["ui"];
  /** Link to the same site in the other language */
  otherLocaleHref: string;
  className?: string;
}) => {
  // Visible near the top; hides while scrolling down, shows when scrolling up.
  // Plain scroll listener + CSS transition (no animation library on first load).
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const nearTop = y < window.innerHeight * 0.3;
        setVisible(nearTop || y < lastY.current);
        lastY.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
        className={cn(
          "transition-[transform,opacity] duration-200 motion-reduce:transition-none",
          visible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0 pointer-events-none",
          "flex w-[calc(100%-1.5rem)] max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-4 md:top-10 inset-x-0 mx-auto",
          "px-3 py-3 sm:px-6 md:px-10 md:py-5 rounded-xl border border-line/10 items-center justify-center gap-3 sm:gap-5",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgb(var(--nav-bg))",
        }}
      >
        {navItems.map((navItem) => (
          <Link
            key={navItem.link}
            href={navItem.link}
            className={cn(
              "text-xs sm:text-sm whitespace-nowrap text-fg/80 hover:text-purple transition-colors",
              navItem.desktopOnly && "hidden sm:inline"
            )}
          >
            {navItem.name}
          </Link>
        ))}

        <span aria-hidden="true" className="h-5 w-px bg-line/15" />

        <a
          href={otherLocaleHref}
          aria-label={ui.switchLangAria}
          title={ui.switchLangAria}
          className="inline-flex items-center justify-center min-w-7 h-7 rounded-md text-xs sm:text-sm font-semibold text-fg/80 hover:text-purple transition-colors"
        >
          {ui.switchLangLabel}
        </a>

        <ThemeToggle toLight={ui.themeToLight} toDark={ui.themeToDark} />
    </nav>
  );
};
