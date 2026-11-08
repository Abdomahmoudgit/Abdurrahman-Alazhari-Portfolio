import { BlogPost, blogPostMetadata, blogPostParams } from "@/lib/blogPages";

type Props = { params: { slug: string } };

export const dynamicParams = false;
export const generateStaticParams = () => blogPostParams("en");
export const generateMetadata = ({ params }: Props) => blogPostMetadata("en", params.slug);

export default function Page({ params }: Props) {
  return <BlogPost locale="en" slug={params.slug} />;
}
