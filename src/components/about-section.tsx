import Image from "next/image";
import {
  Award,
  Briefcase,
  Code,
  TrendingUp,
  Users,
  Lightbulb,
  MessagesSquare,
  Target,
  Wrench,
} from "lucide-react";
import { hardSkills, journey, siteContent, softSkills } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.03] p-6 sm:p-8 shadow-2xl shadow-zinc-300/30 dark:shadow-black/20 backdrop-blur-sm transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:hover:border-white/20 dark:hover:bg-white/[0.05]">
      {children}
    </div>
  );
}

function HardSkillCard({
  name,
  category,
  description,
}: {
  name: string;
  category: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-100/80 p-4 transition-all hover:border-amber-400/30 hover:bg-zinc-50 dark:border-white/[0.06] dark:bg-black/20 dark:hover:bg-white/[0.03]">
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300/80">
        {category}
      </span>
      <p className="mt-1 text-sm font-semibold text-zinc-950 dark:text-white">{name}</p>
      <p className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

export function AboutSection() {
  const softSkillIcons = [Lightbulb, MessagesSquare, Users, Target, Wrench, TrendingUp];

  return (
    <section id="sobre" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Código, automação e UX conectados ao negócio."
          description="Uno desenvolvimento Full Stack, IA aplicada e experiência em telecom para transformar processos em produtos digitais. No UX Unicórnio, amplio esse repertório com pesquisa, estratégia e design centrado nas pessoas."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <div className="flex h-full flex-col items-center gap-6">
              <div className="relative h-80 w-72 overflow-hidden rounded-[2.5rem] border border-zinc-200 shadow-xl shadow-zinc-300/40 dark:border-white/10 dark:shadow-black/30">
                <Image
                  src="/images/profile-suit.jpg"
                  alt="Retrato profissional de Kadu Ribeiro usando terno"
                  fill
                  sizes="(max-width: 640px) 288px, 288px"
                  className="object-cover object-center transition-all duration-700 hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">{siteContent.name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 font-mono tracking-tight">
                  {siteContent.role}
                </p>
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-100/80 dark:border-white/[0.06] dark:bg-black/20 p-4 transition-all hover:border-zinc-300 dark:hover:border-white/10">
                  <Award className="h-5 w-5 shrink-0 text-amber-400" />
                  <div>
                    <p className="text-sm font-medium text-zinc-950 dark:text-white">Formação</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Engenharia de Software • Anhanguera (2024–2027)</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Administração • Estácio (Concluído em 2024)</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">UX Design • UX Unicórnio (Cursando)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-100/80 dark:border-white/[0.06] dark:bg-black/20 p-4 transition-all hover:border-zinc-300 dark:hover:border-white/10">
                  <Briefcase className="h-5 w-5 shrink-0 text-amber-400" />
                  <div>
                    <p className="text-sm font-medium text-zinc-950 dark:text-white">Experiência</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Tech Lead • Nexus Flow Tech • Mai/2026 — Atualmente</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Analista de Sistemas Jr. • Telecom Fiber NET • Dez/2024 — Atualmente</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Consultor em Tecnologia • Telecom Fiber NET • Ago/2020 — Dez/2024</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Técnico em Telecomunicações • Telecom Fiber NET • Nov/2015 — Ago/2020</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10">
                <Code className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-zinc-950 dark:text-white">Hard Skills</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Competências técnicas demonstradas na experiência em software, telecom, automação e produto.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {hardSkills.map((skill) => (
                <HardSkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h4 className="mb-6 text-lg font-semibold text-zinc-950 dark:text-white flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-400" />
              Soft Skills
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {softSkills.map((skill, index) => {
                const Icon = softSkillIcons[index];

                return (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-zinc-200 bg-zinc-100/80 p-4 transition-all hover:border-amber-400/30 dark:border-white/[0.06] dark:bg-black/20 dark:hover:border-white/10"
                  >
                    <Icon className="mb-3 h-5 w-5 text-amber-400" />
                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">{skill.name}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard>
            <h4 className="mb-6 text-lg font-semibold text-zinc-950 dark:text-white">Trajetória</h4>
            <div className="space-y-4">
              {journey.map((item, idx) => (
                <div key={item.title} className="flex gap-4 border-b border-zinc-200 dark:border-white/[0.06] pb-4 last:border-b-0 last:pb-0">
                  <div className="relative flex flex-col items-center">
                    <div className="mt-1.5 h-3 w-3 rounded-full bg-amber-400 ring-2 ring-amber-400/20" />
                    {idx < journey.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-amber-400/30 to-transparent" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h5 className="text-[15px] font-semibold text-zinc-950 dark:text-white">{item.title}</h5>
                      <span className="text-[11px] text-amber-800 dark:text-amber-300/60 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/10">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
