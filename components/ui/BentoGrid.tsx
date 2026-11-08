"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";

import type { Content, GridItem } from "@/data";
import { contactEmail } from "@/data/shared";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

/** One bento tile. Special content is keyed on id (2 globe, 3 stack, 5 image, 6 email). */
export const BentoGridItem = ({
  item,
  ui,
}: {
  item: GridItem;
  ui: Content["ui"];
}) => {
  const { id, title, description, className, img, imgClassName, titleClassName, spareImg } = item;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
  };

  // Tiles 1 (photo) and 6 (gradient) always have dark artwork behind the text.
  const onDarkArt = id === 1 || id === 6;

  const chipClass =
    "lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-chip text-fg-muted";

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-line/10 group/bento card-surface",
        "hover:shadow-xl transition duration-200 shadow-sm dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt=""
              width={1000}
              height={785}
              sizes="(max-width: 768px) 100vw, 60vw"
              // Tile 1 is in the first screen on phones (esp. Arabic) — load it right away (LCP).
              priority={id === 1}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className={cn("absolute end-0 -bottom-5", id === 5 && "w-full opacity-80")}>
          {spareImg && (
            <Image
              src={spareImg}
              alt=""
              width={800}
              height={410}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            "group-hover/bento:translate-x-2 rtl:group-hover/bento:-translate-x-2"
          )}
        >
          <div className="font-light md:max-w-32 md:text-xs lg:text-base text-sm text-fg-soft z-10">
            {description}
          </div>
          <div
            className={cn(
              "text-lg lg:text-3xl max-w-96 font-bold z-10 rtl:leading-snug",
              onDarkArt ? "text-white drop-shadow" : "text-fg",
              // tile 3: keep the title clear of the chip columns on the other side
              id === 3 && "md:max-w-[45%]"
            )}
          >
            {title}
          </div>

          {/* 3D globe (lazy-mounted when scrolled into view, desktop only) */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack lists */}
          {id === 3 && (
            <div className="hidden md:flex gap-1 lg:gap-5 w-fit absolute -end-3 lg:-end-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {ui.stackLeft.map((s) => (
                  <span key={s} className={chipClass}>
                    {s}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg bg-chip" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg bg-chip" />
                {ui.stackRight.map((s) => (
                  <span key={s} className={chipClass}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? ui.emailCopied : ui.copyEmail}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
