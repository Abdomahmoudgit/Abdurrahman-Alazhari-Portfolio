import { CvRoute, cvMetadata } from "@/lib/cvPage";

export const metadata = cvMetadata("en");

export default function Page() {
  return <CvRoute locale="en" />;
}
