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
          title="Casos reais, interfaces reais, aprendizado real"
          description="Três projetos que mostram evolução de layout, componentes, integração com APIs e foco em experiência do usuário."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <GlassCard key={project.title}>
              <div className={`rounded-[1.25rem] border border-white/10 bg-gradient-to-br ${project.accent} p-3`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-5 flex h-full flex-col">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:text-amber-300"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
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
