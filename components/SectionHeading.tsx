import type { Heading } from "@/data";
import { cn } from "@/lib/utils";

/** Section title (h2) with the accent part highlighted. */
const SectionHeading = ({
  heading,
  className,
}: {
  heading: Heading;
  className?: string;
}) => (
  <h2 className={cn("heading", className)}>
    {heading.before}
    <span className="text-purple">{heading.accent}</span>
    {heading.after}
  </h2>
);

export default SectionHeading;
