import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
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
          {projects.map((project) => (
            <GlassCard key={project.title}>
              {project.image ? (
                <div className={`rounded-[1.25rem] border border-zinc-200 dark:border-white/10 bg-gradient-to-br ${project.accent} p-3`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1280px) calc(50vw - 4rem), 576px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ) : (
                <div className={`flex aspect-[16/10] items-end rounded-[1.25rem] border border-zinc-200 bg-gradient-to-br ${project.accent} p-5 dark:border-white/10`}>
                  <span className="text-lg font-bold text-zinc-950 dark:text-white">{project.title}</span>
                </div>
              )}
              <div className="mt-5 flex h-full flex-col">
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 px-3 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-950 dark:text-white transition hover:border-amber-400/40 hover:text-amber-700 dark:hover:text-amber-300"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.ctaLabel ?? "Demo"}
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
