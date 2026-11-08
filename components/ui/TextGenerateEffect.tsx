"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Fades words in one by one; words from `accentFrom` on use the accent color. */
export const TextGenerateEffect = ({
  words,
  accentFrom = 4,
  className,
}: {
  words: string;
  accentFrom?: number;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotion();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      reduceMotion ? { duration: 0 } : { duration: 2, delay: stagger(0.2) }
    );
  }, [animate, reduceMotion, words]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        {/* letter-spacing breaks Arabic letter joining, so it's LTR-only */}
        <div className="text-fg leading-snug tracking-wide rtl:tracking-normal rtl:leading-normal">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className={cn(idx >= accentFrom ? "text-purple" : "text-fg", "opacity-0")}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
