import React from "react";

import { cn } from "@/lib/utils";

/**
 * Card with a glow that travels around its border.
 * Pure CSS: a rotating conic-gradient behind a 1px gap (GPU-only transform,
 * no JavaScript per frame). Reduced-motion users get a static border.
 */
export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 12000,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  /** one full lap, in milliseconds */
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  const innerRadius = `calc(${borderRadius} * 0.96)`;

  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {/* Rotating glow, larger than the card so the sweep covers every edge */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2",
          "bg-[conic-gradient(from_0deg,transparent_0deg,#CBACF9_25deg,transparent_60deg)] opacity-80",
          "animate-border-spin motion-reduce:animate-none",
          borderClassName
        )}
        style={{ ["--border-duration" as string]: `${duration}ms` }}
      />

      <div
        className={cn(
          "relative border border-line/10 card-surface text-fg flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: innerRadius }}
      >
        {children}
      </div>
    </Component>
  );
}
