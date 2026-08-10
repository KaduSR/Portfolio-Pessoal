import Link from "next/link";
import { contactLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 text-sm text-zinc-600 dark:text-zinc-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Kadu Ribeiro. Todos os direitos reservados.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/politica-de-privacidade" className="transition hover:text-amber-700 dark:hover:text-amber-300">
            Política de Privacidade
          </Link>
          <Link href="/termos-de-servico" className="transition hover:text-amber-700 dark:hover:text-amber-300">
            Termos de Serviço
          </Link>
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noreferrer" : undefined}
              className="transition hover:text-amber-700 dark:hover:text-amber-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
