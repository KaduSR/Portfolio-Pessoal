import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contactLinks, siteContent } from "@/lib/content";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kadudev.com/#person",
      name: siteContent.name,
      url: "https://kadudev.com",
      image: "https://kadudev.com/images/profile-suit.jpg",
      jobTitle: "Desenvolvedor Full Stack",
      description: siteContent.description,
      email: `mailto:${siteContent.email}`,
      sameAs: contactLinks
        .filter((link) => link.label !== "Email")
        .map((link) => link.href),
      knowsAbout: [
        "Desenvolvimento Full Stack",
        "Inteligência Artificial aplicada",
        "Automação de processos",
        "Integração de sistemas",
        "UX Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kadudev.com/#website",
      url: "https://kadudev.com",
      name: "Kadu Dev",
      description: siteContent.description,
      inLanguage: "pt-BR",
      publisher: { "@id": "https://kadudev.com/#person" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main className="overflow-hidden">
        <Reveal>
          <Hero />
        </Reveal>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
