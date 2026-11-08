import { BlogIndex, blogIndexMetadata } from "@/lib/blogPages";

export const metadata = blogIndexMetadata("ar");

export default function Page() {
  return <BlogIndex locale="ar" />;
}
