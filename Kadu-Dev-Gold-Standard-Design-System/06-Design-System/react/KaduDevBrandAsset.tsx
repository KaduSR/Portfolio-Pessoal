import React from "react";

export type KaduDevAssetVariant =
  | "full-composition"
  | "primary-lockup"
  | "symbol"
  | "monogram"
  | "code-glyph"
  | "wordmark"
  | "descriptor"
  | "contact"
  | "frame"
  | "digital-solutions";

const assetSources: Record<KaduDevAssetVariant, string> = {
  "full-composition": "/assets/kadu-dev-logo-composicao-completa-transparente.png",
  "primary-lockup": "/assets/kadu-dev-logo-lockup-principal-transparente.png",
  symbol: "/assets/kadu-dev-simbolo-k-codigo-transparente.png",
  monogram: "/assets/kadu-dev-monograma-k-transparente.png",
  "code-glyph": "/assets/kadu-dev-glifo-codigo-transparente.png",
  wordmark: "/assets/kadu-dev-wordmark-transparente.png",
  descriptor:
    "/assets/kadu-dev-descriptor-software-engineer-ux-ui-transparente.png",
  contact: "/assets/kadu-dev-contatos-transparente.png",
  frame: "/assets/kadu-dev-moldura-geometrica-transparente.png",
  "digital-solutions": "/assets/kadu-dev-logo-solucoes-digitais-transparente.png",
};

type Props = {
  variant?: KaduDevAssetVariant;
  className?: string;
  alt?: string;
  loading?: "eager" | "lazy";
};

export function KaduDevBrandAsset({
  variant = "primary-lockup",
  className = "",
  alt = "Kadu Dev",
  loading = "eager",
}: Props) {
  return (
    <img
      src={assetSources[variant]}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
}
