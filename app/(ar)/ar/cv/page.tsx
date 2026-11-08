import { CvRoute, cvMetadata } from "@/lib/cvPage";

export const metadata = cvMetadata("ar");

export default function Page() {
  return <CvRoute locale="ar" />;
}
