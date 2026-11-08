import { ProjectPage, projectMetadata, projectStaticParams } from "@/lib/projectPage";

type Props = { params: { slug: string } };

export const dynamicParams = false;
export const generateStaticParams = () => projectStaticParams("en");
export const generateMetadata = ({ params }: Props) => projectMetadata("en", params.slug);

export default function Page({ params }: Props) {
  return <ProjectPage locale="en" slug={params.slug} />;
}
