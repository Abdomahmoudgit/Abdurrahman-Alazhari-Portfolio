"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaLocationArrow, FaDownload } from "react-icons/fa6";

import type { Content } from "@/data";
import { cvPath } from "@/data/shared";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = ({
  ui,
  cvLabel,
  base,
}: {
  ui: Content["ui"];
  /** "View CV online" link text */
  cvLabel: string;
  /** locale prefix ("" or "/ar") */
  base: string;
}) => {
  const typedStrings = ui.heroTyped;

  useEffect(() => {
    const el = document.getElementById("element");
    if (el) el.textContent = typedStrings[0]; // visible immediately, before typing starts

    // Respect "reduce motion": keep the static title instead of the typing loop.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Typed.js is loaded on demand so it isn't part of the first-load bundle.
    let typed: { destroy: () => void } | undefined;
    let cancelled = false;
    import("typed.js").then(({ default: Typed }) => {
      if (cancelled) return;
      typed = new Typed("#element", {
        strings: typedStrings,
        smartBackspace: true,
        loop: true,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 500,
      });
    });
    return () => {
      cancelled = true;
      typed?.destroy();
    };
  }, [typedStrings]);

  return (
    <div id="home" className="pt-[110px] md:pt-[130px] pb-6 md:pb-16">
      {/* Spotlights (https://ui.aceternity.com/components/spotlight) */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background with a radial fade into the page color */}
      <div className="h-screen w-full bg-page bg-grid-slate-900/[0.05] dark:bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 bg-page [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/mineImage.webp"
          alt="Abdurrahman Al-Azhari"
          width={150}
          height={150}
          priority
          className="m-2 md:m-4 w-[150px] h-[150px] rounded-full border-4 border-line/20 shadow-lg object-cover transition-transform hover:scale-110 relative z-50"
        />
        {/* The page's single <h1> */}
        <h1 className="text-center relative md:tracking-wider rtl:tracking-normal mb-4 text-sm md:text-lg lg:text-2xl font-normal">
          {ui.heroGreeting}
          <br />
          <span id="element" className="font-semibold text-purple" />
        </h1>
      </div>

      <div className="flex justify-center relative mt-4 mb-4 md:mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase rtl:normal-case tracking-widest rtl:tracking-normal text-xs rtl:text-sm text-center text-blue-100 max-w-md">
            {ui.heroTagline}
          </p>

          <TextGenerateEffect
            words={ui.heroHeadline}
            accentFrom={ui.heroHeadlineAccentFrom}
            className="text-center text-[34px] sm:text-[40px] md:text-4xl lg:text-5xl"
          />

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10 w-full items-center justify-center">
            <MagicButton
              title={ui.showWork}
              icon={<FaLocationArrow className="rtl:-scale-x-100" />}
              position="right"
              href="#projects"
              className="shadow-lg"
            />
            <MagicButton
              title={ui.downloadCv}
              icon={<FaDownload />}
              position="left"
              href={cvPath}
              download
              className="shadow-lg"
            />
          </div>
          <Link
            href={`${base}/cv`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-fg-muted hover:text-purple transition-colors"
          >
            {cvLabel}
            <FaArrowRight className="h-3 w-3 rtl:-scale-x-100" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
