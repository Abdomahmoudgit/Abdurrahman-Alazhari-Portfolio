import { cn } from "@/lib/utils";

/**
 * Fades the words in one after another (pure CSS — no animation library, so it
 * costs nothing on first load). Words from `accentFrom` on use the accent color.
 * Reduced-motion users see the text immediately.
 */
export const TextGenerateEffect = ({
  words,
  accentFrom = 4,
  className,
}: {
  words: string;
  accentFrom?: number;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        {/* letter-spacing breaks Arabic letter joining, so it's LTR-only */}
        <div className="text-fg leading-snug tracking-wide rtl:tracking-normal rtl:leading-normal">
          {wordsArray.map((word, idx) => (
            <span
              key={word + idx}
              className={cn(
                idx >= accentFrom ? "text-purple" : "text-fg",
                "animate-word-in motion-reduce:animate-none"
              )}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
