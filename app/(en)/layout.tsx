import RootShell from "../_shell";
import { inter } from "../fonts";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en");

// Root layout for the English site ("/").
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="en" fontClassName={`${inter.variable} font-sans`}>
      {children}
    </RootShell>
  );
}
