import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kadudev.com"),
  title: "Kadu Ribeiro | Full Stack Developer",
  description:
    "Desenvolvedor Full Stack especializado em React, Next.js, Node.js e TypeScript, com 9 anos de experiência em Telecomunicações no Brasil.",
  keywords: [
    "Kadu Ribeiro",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfólio",
    "Brasil",
  ],
  openGraph: {
    title: "Kadu Ribeiro | Full Stack Developer",
    description:
      "9 anos em Telecom. Full Stack Developer com React, Next.js, Node.js e TypeScript.",
    type: "website",
    images: ["/og/portfolio-preview.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-zinc-950 text-white antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
