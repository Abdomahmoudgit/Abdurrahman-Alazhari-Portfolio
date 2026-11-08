import { BlogIndex, blogIndexMetadata } from "@/lib/blogPages";

export const metadata = blogIndexMetadata("en");

export default function Page() {
  return <BlogIndex locale="en" />;
}
