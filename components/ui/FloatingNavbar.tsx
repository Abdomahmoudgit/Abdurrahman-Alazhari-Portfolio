"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
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
  navItems: Content["nav"];
  ui: Content["ui"];
  /** Link to the same site in the other language */
  otherLocaleHref: string;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Visible at the top; hides while scrolling down, shows when scrolling up.
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
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
            className="text-xs sm:text-sm whitespace-nowrap text-fg/80 hover:text-purple transition-colors"
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
      </motion.nav>
    </AnimatePresence>
  );
};
