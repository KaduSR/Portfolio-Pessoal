import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/content";
import { GlassCard, SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projetos" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projetos"
          title="Produtos, automações e experiências digitais"
          description="Projetos que conectam desenvolvimento Full Stack, APIs, fluxos apoiados por IA e decisões de UX orientadas a problemas reais."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <GlassCard key={project.title}>
              <article className="flex h-full flex-col">
                <div className={`rounded-[1.25rem] border border-zinc-200 bg-gradient-to-br p-3 dark:border-white/10 ${project.accent}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-zinc-950">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1280px) calc(50vw - 4rem), 576px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-zinc-950/85 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 dark:text-amber-300">
                    <span>{project.category}</span>
                    <span className="text-zinc-500 dark:text-zinc-500">{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-zinc-950 dark:text-white">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">{project.summary}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                      >
                        {project.ctaLabel ?? "Ver projeto"}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:border-amber-400/40 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-amber-300"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </GlassCard>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/KaduSR?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:border-amber-500/50 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-amber-300"
          >
            Ver todos os projetos no GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
