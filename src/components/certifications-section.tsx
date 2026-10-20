import { Award, GraduationCap } from "lucide-react";
import { certifications } from "@/lib/content";
import { SectionHeading, GlassCard } from "@/components/section-heading";

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Formação contínua"
          title="Formação e certificações"
          description="Pós-graduações e cursos complementares em inteligência artificial, desenvolvimento de software, dados, design e gestão. As cargas horárias são exibidas conforme os certificados enviados."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => {
            const isPostgraduate = item.type === "Pós-graduação";
            const Icon = isPostgraduate ? GraduationCap : Award;

            return (
              <GlassCard key={item.title}>
                <article className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-800 dark:text-amber-200">
                      {item.category}
                    </span>
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-amber-500" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-6 text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.issuer}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-5 text-xs text-zinc-600 dark:text-zinc-400">
                    <span>{item.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.workload}</span>
                  </div>
                </article>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
