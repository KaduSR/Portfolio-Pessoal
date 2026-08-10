import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kadudev.com"),
  title: "Kadu Ribeiro | Full Stack, IA e Automação",
  description:
    "Desenvolvedor Full Stack focado em IA aplicada, automação e produtos digitais, com visão de negócio e formação em UX Design.",
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
      "Desenvolvimento Full Stack, IA aplicada, automação e UX para criar produtos digitais úteis e escaláveis.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    images: ["/og/portfolio-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadu Ribeiro | Full Stack, IA e Automação",
    description:
      "Desenvolvimento Full Stack, IA aplicada, automação e UX para criar produtos digitais úteis e escaláveis.",
    images: ["/og/portfolio-preview.png"],
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
