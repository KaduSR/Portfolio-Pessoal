import { ArrowRight, MessageCircle } from "lucide-react";
import { contactLinks } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { GlassCard, SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos construir algo forte"
          description="Aberto a projetos freelance, oportunidades full-time e colaborações com times que valorizam qualidade e clareza."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                  <MessageCircle className="h-4 w-4" />
                  Resposta rápida
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">Envie uma mensagem</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Prefere algo direto? Envie um e-mail ou conecte no LinkedIn. Se o projeto pedir uma conversa, eu retorno com contexto e próxima etapa.
                </p>
              </div>

              <div className="space-y-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel={item.label !== "Email" ? "noreferrer" : undefined}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-white transition hover:border-amber-400/40 hover:bg-white/5"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-amber-300" />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <ContactForm />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
