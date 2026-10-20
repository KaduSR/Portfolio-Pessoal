import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kadudev.com"),
  title: "Kadu Ribeiro | AI Engineer, AI Integration e Full Stack",
  description:
    "AI Engineer com foco em integração de IA, aplicações LLM, RAG, desenvolvimento Full Stack, APIs, automação e sistemas inteligentes.",
  keywords: [
    "Kadu Ribeiro",
    "Desenvolvedor Full Stack",
    "Inteligência Artificial",
    "Automação",
    "Integrações",
    "UX Design",
    "Design de Produto",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfólio",
    "Brasil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kadu Ribeiro | Full Stack, IA e Automação",
    description:
      "AI Engineering, integração de IA, aplicações Full Stack, APIs e automação para resolver problemas reais de negócio.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Kadu Dev",
    images: [
      {
        url: "/og/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Kadu Dev — AI Engineering, integração de IA e desenvolvimento Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadu Ribeiro | Full Stack, IA e Automação",
    description:
      "AI Engineering, integração de IA, aplicações Full Stack, APIs e automação para resolver problemas reais de negócio.",
    images: [
      {
        url: "/og/portfolio-preview.png",
        alt: "Kadu Dev — desenvolvimento Full Stack, IA e automação",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
