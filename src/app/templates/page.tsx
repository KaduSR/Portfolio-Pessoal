import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TemplateCatalog } from "@/components/template-catalog";

export const metadata: Metadata = {
  title: "Templates demonstrativos | Kadu Dev",
  description:
    "Explore conceitos demonstrativos de landing pages, sites institucionais, lojas e aplicações web com marcas fictícias.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Templates demonstrativos | Kadu Dev",
    description: "Uma biblioteca de conceitos digitais para personalizar conforme as necessidades do negócio.",
    url: "/templates",
    type: "website",
  },
};

export default function TemplatesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <TemplateCatalog />
      </main>
      <SiteFooter />
    </>
  );
}
