import RootShell from "../../_shell";
import { inter, plexArabic } from "../../fonts";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("ar");

// Root layout for the Arabic site ("/ar"), right-to-left.
export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="ar" fontClassName={`${plexArabic.variable} ${inter.variable} font-sans`}>
      {children}
    </RootShell>
  );
}
