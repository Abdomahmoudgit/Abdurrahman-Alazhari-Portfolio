import { ProjectPage, projectMetadata, projectStaticParams } from "@/lib/projectPage";

type Props = { params: { slug: string } };

export const dynamicParams = false;
export const generateStaticParams = () => projectStaticParams("ar");
export const generateMetadata = ({ params }: Props) => projectMetadata("ar", params.slug);

export default function Page({ params }: Props) {
  return <ProjectPage locale="ar" slug={params.slug} />;
}
