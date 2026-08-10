import React, { useMemo, useState } from "react";
import "./kadu-dev-brand-library.css";

type Category =
  | "all"
  | "lockup"
  | "symbol"
  | "wordmark"
  | "descriptor"
  | "contact"
  | "element"
  | "overlay";

type BrandAsset = {
  slug: string;
  title: string;
  category: Exclude<Category, "all">;
  usage: string;
  src: string;
  alt: string;
};

const assets: BrandAsset[] = [
  {
    "slug": "kadu-dev-logo-composicao-completa-transparente",
    "title": "Logo - Composição completa",
    "category": "lockup",
    "usage": "Composição integral com símbolo, wordmark, descriptor, contato e moldura.",
    "src": "/assets/kadu-dev-logo-composicao-completa-transparente.png",
    "alt": "Logo - Composição completa da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-logo-lockup-principal-transparente",
    "title": "Logo - Lockup principal",
    "category": "lockup",
    "usage": "Símbolo, Kadu Dev e Software Engineer & UX/UI Designer.",
    "src": "/assets/kadu-dev-logo-lockup-principal-transparente.png",
    "alt": "Logo - Lockup principal da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-simbolo-k-codigo-transparente",
    "title": "Símbolo - K com código",
    "category": "symbol",
    "usage": "Avatar, ícone de aplicativo, favicon ampliado e selo.",
    "src": "/assets/kadu-dev-simbolo-k-codigo-transparente.png",
    "alt": "Símbolo - K com código da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-monograma-k-transparente",
    "title": "Monograma K",
    "category": "symbol",
    "usage": "Marca reduzida sem o glifo de código.",
    "src": "/assets/kadu-dev-monograma-k-transparente.png",
    "alt": "Monograma K da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-glifo-codigo-transparente",
    "title": "Glifo de código",
    "category": "symbol",
    "usage": "Elemento técnico decorativo e ícone secundário.",
    "src": "/assets/kadu-dev-glifo-codigo-transparente.png",
    "alt": "Glifo de código da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-wordmark-transparente",
    "title": "Wordmark Kadu Dev",
    "category": "wordmark",
    "usage": "Cabeçalhos, navegação, assinaturas e rodapés.",
    "src": "/assets/kadu-dev-wordmark-transparente.png",
    "alt": "Wordmark Kadu Dev da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-descriptor-software-engineer-ux-ui-transparente",
    "title": "Descriptor profissional",
    "category": "descriptor",
    "usage": "Complemento textual: Software Engineer & UX/UI Designer.",
    "src": "/assets/kadu-dev-descriptor-software-engineer-ux-ui-transparente.png",
    "alt": "Descriptor profissional da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-contatos-transparente",
    "title": "Linha de contatos",
    "category": "contact",
    "usage": "Site, usuário social e LinkedIn presentes na composição original.",
    "src": "/assets/kadu-dev-contatos-transparente.png",
    "alt": "Linha de contatos da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-moldura-geometrica-transparente",
    "title": "Moldura geométrica dourada",
    "category": "element",
    "usage": "Recurso decorativo para capas, cards e seções técnicas.",
    "src": "/assets/kadu-dev-moldura-geometrica-transparente.png",
    "alt": "Moldura geométrica dourada da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-logo-solucoes-digitais-transparente",
    "title": "Logo alternativo - Soluções Digitais",
    "category": "lockup",
    "usage": "Versão extraída do header premium com o texto Soluções Digitais.",
    "src": "/assets/kadu-dev-logo-solucoes-digitais-transparente.png",
    "alt": "Logo alternativo - Soluções Digitais da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-assinatura-linkedin-transparente",
    "title": "Assinatura para LinkedIn",
    "category": "lockup",
    "usage": "KADU DEV, profissão e frase institucional da capa.",
    "src": "/assets/kadu-dev-assinatura-linkedin-transparente.png",
    "alt": "Assinatura para LinkedIn da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-banner-linkedin-overlay-transparente",
    "title": "Overlay transparente do banner LinkedIn",
    "category": "overlay",
    "usage": "Composição gráfica sem o campo escuro do banner.",
    "src": "/assets/kadu-dev-banner-linkedin-overlay-transparente.png",
    "alt": "Overlay transparente do banner LinkedIn da identidade visual Kadu Dev"
  },
  {
    "slug": "kadu-dev-header-email-overlay-transparente",
    "title": "Overlay transparente do header de e-mail",
    "category": "overlay",
    "usage": "Circuitos, halo, código e marca sem o campo escuro.",
    "src": "/assets/kadu-dev-header-email-overlay-transparente.png",
    "alt": "Overlay transparente do header de e-mail da identidade visual Kadu Dev"
  }
];

const filters: { value: Category; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "lockup", label: "Logos" },
  { value: "symbol", label: "Símbolos" },
  { value: "wordmark", label: "Wordmark" },
  { value: "descriptor", label: "Descriptor" },
  { value: "contact", label: "Contato" },
  { value: "element", label: "Elementos" },
  { value: "overlay", label: "Overlays" },
];

export default function KaduDevBrandLibrary() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const visibleAssets = useMemo(
    () =>
      assets.filter(
        (asset) =>
          activeCategory === "all" || asset.category === activeCategory,
      ),
    [activeCategory],
  );

  return (
    <main className="kd-library">
      <nav className="kd-nav" aria-label="Navegação principal">
        <a className="kd-nav-brand" href="#inicio">
          Kadu Dev
        </a>
        <a className="kd-primary-button" href="#assets">
          Ver assets
        </a>
      </nav>

      <header className="kd-hero" id="inicio">
        <p className="kd-label">GOLD STANDARD ENGINEERING</p>
        <h1>Precisão técnica. Identidade pronta para produto.</h1>
        <p className="kd-hero-copy">
          Arquivos transparentes e elementos separados sem redesenho,
          recoloração ou vetorização automática.
        </p>
      </header>

      <section className="kd-spotlight" aria-labelledby="integridade">
        <div>
          <p className="kd-label">INTEGRIDADE</p>
          <h2 id="integridade">O raster original permanece como referência.</h2>
        </div>
        <p>
          As versões SVG incorporam o PNG transparente. Os elementos foram
          isolados por máscara de pixels, preservando a geometria do arquivo.
        </p>
      </section>

      <section className="kd-assets" id="assets" aria-labelledby="assets-title">
        <div className="kd-section-heading">
          <div>
            <p className="kd-label">BIBLIOTECA</p>
            <h2 id="assets-title">Elementos separados</h2>
          </div>

          <div className="kd-filters" aria-label="Filtrar assets">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className="kd-filter"
                aria-pressed={activeCategory === filter.value}
                onClick={() => setActiveCategory(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="kd-grid">
          {visibleAssets.map((asset) => (
            <article className="kd-card" key={asset.slug}>
              <div className="kd-preview">
                <img src={asset.src} alt={asset.alt} />
              </div>
              <div className="kd-card-content">
                <p className="kd-label">{asset.category.toUpperCase()}</p>
                <h3>{asset.title}</h3>
                <p>{asset.usage}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
