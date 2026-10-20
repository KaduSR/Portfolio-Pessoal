import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateDemo } from "@/components/template-demo";
import { siteTemplates } from "@/lib/templates";

type TemplatePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return siteTemplates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = siteTemplates.find((item) => item.slug === slug);

  if (!template) {
    return { title: "Template não encontrado | Kadu Dev" };
  }

  return {
    title: `${template.name} — Template demonstrativo | Kadu Dev`,
    description: template.description,
    alternates: { canonical: `/templates/${template.slug}` },
    openGraph: {
      title: `${template.name} — Template demonstrativo`,
      description: template.tagline,
      type: "website",
      url: `/templates/${template.slug}`,
    },
  };
}

export default async function TemplateDetailPage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = siteTemplates.find((item) => item.slug === slug);

  if (!template) notFound();

  return <TemplateDemo template={template} />;
}
