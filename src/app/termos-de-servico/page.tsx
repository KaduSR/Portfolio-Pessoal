import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Termos de Serviço | Kadu Ribeiro",
  description:
    "Termos de Serviço do site kadudev.com — regras de uso, propriedade intelectual e limitação de responsabilidade.",
  robots: { index: true, follow: true },
};

const UPDATED_DATE = "10 de agosto de 2026";

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="rounded-3xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5 p-6 shadow-2xl shadow-zinc-300/30 dark:shadow-black/20 backdrop-blur sm:p-8">
        <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
          <span className="font-space text-sm font-bold text-amber-700 dark:text-amber-300/80">{number}</span>
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-amber-700 dark:marker:text-amber-300/80">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300/80">
              Documentos
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
              Termos de Serviço
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Regras e condições para o uso do site{" "}
              <span className="font-medium text-zinc-950 dark:text-white">kadudev.com</span>.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Atualizado em {UPDATED_DATE}
            </span>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-6">
            <PolicySection number="1" title="Aceitação dos Termos">
              <p>
                Ao acessar ou utilizar o site kadudev.com (“site”), você concorda em cumprir
                e estar vinculado a estes Termos de Serviço (“Termos”). Se não concordar com
                qualquer parte destes Termos, não utilize o site.
              </p>
            </PolicySection>

            <PolicySection number="2" title="Descrição do Serviço">
              <p>
                O site é um portfólio pessoal de <strong className="font-medium text-zinc-950 dark:text-white">Kadu Ribeiro</strong>,{" "}
                que exibe projetos, habilidades, trajetória profissional e um formulário de contato.
                O conteúdo é informativo e não constitui oferta de serviços profissionais.
              </p>
            </PolicySection>

            <PolicySection number="3" title="Condições de Uso">
              <p>Você concorda em:</p>
              <PolicyList
                items={[
                  "Utilizar o site de forma lícita e de acordo com a legislação aplicável.",
                  "Não enviar conteúdo ofensivo, difamatório ou ilegal pelo formulário de contato.",
                  "Não tentar acessar áreas restritas, interferir no funcionamento do site ou utilizar meios automatizados (scripts, bots) para coleta de dados.",
                  "Respeitar os direitos de propriedade intelectual relacionados ao conteúdo do site.",
                ]}
              />
            </PolicySection>

            <PolicySection number="4" title="Propriedade Intelectual">
              <p>
                Todo o conteúdo exibido no site — incluindo textos, código, layout, imagens e
                marca — é de propriedade de <strong className="font-medium text-zinc-950 dark:text-white">Kadu Ribeiro</strong>{" "}
                ou licenciado para uso neste site, e está protegido por leis de direitos autorais
                e propriedade intelectual.
              </p>
              <p>
                É permitido visualizar, compartilhar o link ou citar trechos com atribuição.
                A reprodução, distribuição ou criação de obras derivadas sem autorização prévia
                expressa é proibida.
              </p>
            </PolicySection>

            <PolicySection number="5" title="Isenção de Responsabilidade">
              <p>
                O conteúdo do site é fornecido “como está” e para fins informativos. Não
                garantimos que o site será ininterrupto, livre de erros ou atualizado em tempo
                real.
              </p>
              <p>
                Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou
                da impossibilidade de uso do site, incluindo perda de dados ou lucros cessantes.
              </p>
            </PolicySection>

            <PolicySection number="6" title="Links Externos">
              <p>
                O site pode conter links para sites de terceiros (por exemplo, projetos
                hospedados externamente, redes sociais). Não controlamos nem endossamos o
                conteúdo desses sites e não nos responsabilizamos por suas práticas de
                privacidade ou termos de uso.
              </p>
            </PolicySection>

            <PolicySection number="7" title="Modificações dos Termos">
              <p>
                Reservamo-nos o direito de alterar estes Termos a qualquer momento. A data de
                atualização no topo desta página indica quando o documento foi revisado pela
                última vez. O uso contínuo do site após alterações implica aceitação dos novos
                Termos.
              </p>
            </PolicySection>

            <PolicySection number="8" title="Encerramento">
              <p>
                Podemos suspender ou encerrar o acesso ao site, no todo ou em parte, a qualquer
                momento, sem aviso prévio, por motivos legais, técnicos ou operacionais.
              </p>
            </PolicySection>

            <PolicySection number="9" title="Lei Aplicável">
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica
                eleito o foro da comarca de São Paulo/SP, com renúncia expressa a qualquer outro,
                por mais privilegiado que seja.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Contato">
              <p>
                Para dúvidas sobre estes Termos de Serviço, entre em contato pelo e-mail{" "}
                <a
                  href="mailto:kaduribeiro@kadudev.com"
                  className="font-medium text-amber-700 underline-offset-4 transition hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200 hover:underline"
                >
                  kaduribeiro@kadudev.com
                </a>
                .
              </p>
            </PolicySection>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
