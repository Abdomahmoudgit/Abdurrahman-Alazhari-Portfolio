import { BlogPost, blogPostMetadata, blogPostParams } from "@/lib/blogPages";

type Props = { params: { slug: string } };

export const dynamicParams = false;
export const generateStaticParams = () => blogPostParams("ar");
export const generateMetadata = ({ params }: Props) => blogPostMetadata("ar", params.slug);

export default function Page({ params }: Props) {
  return <BlogPost locale="ar" slug={params.slug} />;
}
