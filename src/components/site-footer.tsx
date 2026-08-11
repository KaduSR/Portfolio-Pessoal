import Link from "next/link";
import { GitCommitHorizontal } from "lucide-react";
import { contactLinks } from "@/lib/content";

const commitCount = process.env.NEXT_PUBLIC_BUILD_COMMIT_COUNT ?? "—";
const commitHash = process.env.NEXT_PUBLIC_BUILD_COMMIT_HASH ?? "indisponível";
const commitDate = process.env.NEXT_PUBLIC_BUILD_COMMIT_DATE;
const formattedCommitDate = commitDate
  ? new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
      new Date(`${commitDate}T00:00:00Z`),
    )
  : "data indisponível";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 text-sm text-zinc-600 dark:text-zinc-400 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
        <a
          href={`https://github.com/KaduSR/Portfolio-Pessoal/commit/${commitHash}`}
          target="_blank"
          rel="noreferrer"
          className="group flex w-fit flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-zinc-200 bg-white px-4 py-2 font-mono text-xs text-zinc-600 transition hover:border-amber-500/40 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-amber-300"
          aria-label={`${commitCount} commits publicados, revisão ${commitHash}, atualizada em ${formattedCommitDate}`}
        >
          <GitCommitHorizontal className="h-4 w-4 text-amber-600 dark:text-amber-300" />
          <span>{commitCount} commits publicados</span>
          <span aria-hidden="true">·</span>
          <span>revisão {commitHash}</span>
          <span aria-hidden="true">·</span>
          <span>atualizado em {formattedCommitDate}</span>
        </a>
      </div>
    </footer>
  );
}
