import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Kadu Ribeiro",
  description:
    "Política de Privacidade do site kadudev.com — saiba como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: "Política de Privacidade | Kadu Ribeiro",
    description:
      "Saiba como os dados pessoais são tratados no site kadudev.com.",
    url: "/politica-de-privacidade",
    type: "website",
  },
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

export default function PrivacyPolicyPage() {
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
              Política de Privacidade
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Como tratamos os dados pessoais coletados no site{" "}
              <span className="font-medium text-zinc-950 dark:text-white">kadudev.com</span>.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Atualizado em {UPDATED_DATE}
            </span>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-6">
            <PolicySection number="1" title="Visão Geral">
              <p>
                Esta Política de Privacidade descreve como o site kadudev.com (“nós”, “nosso”),
                de propriedade de <strong className="font-medium text-zinc-950 dark:text-white">Kadu Ribeiro</strong>,
                coleta, usa, armazena e protege as informações pessoais dos visitantes e
                usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD —
                Lei nº 13.709/2018).
              </p>
              <p>
                Ao utilizar o site ou enviar mensagens pelo formulário de contato, você
                concorda com as práticas descritas nesta política.
              </p>
            </PolicySection>

            <PolicySection number="2" title="Dados que Coletamos">
              <p className="font-medium text-zinc-950 dark:text-white">Dados fornecidos voluntariamente por você:</p>
              <PolicyList
                items={[
                  "Nome, endereço de e-mail e conteúdo da mensagem enviada pelo formulário de contato.",
                  "Quaisquer informações que você opte por incluir na mensagem.",
                ]}
              />
              <p className="font-medium text-zinc-950 dark:text-white">Dados coletados automaticamente:</p>
              <PolicyList
                items={[
                  "Endereço de IP, tipo de navegador, sistema operacional e páginas visitadas, quando coletados por serviços de terceiros utilizados no site.",
                  "Cookies, conforme detalhado na seção 5.",
                ]}
              />
              <p>
                O site <strong className="font-medium text-zinc-950 dark:text-white">não</strong> coleta dados
                sensíveis ou informações financeiras.
              </p>
            </PolicySection>

            <PolicySection number="3" title="Finalidade e Base Legal">
              <p>Utilizamos os dados coletados para as seguintes finalidades:</p>
              <PolicyList
                items={[
                  "Responder às mensagens enviadas pelo formulário de contato e atender às solicitações dos usuários.",
                  "Garantir a segurança, a estabilidade e a melhoria contínua do site.",
                  "Exibir anúncios contextualizados, quando aplicável (Google AdSense).",
                ]}
              />
              <p>
                As bases legais para o tratamento, nos termos da LGPD, são: o{" "}
                <strong className="font-medium text-zinc-950 dark:text-white">consentimento</strong> (art. 7º, I) para
                o uso do formulário de contato e a{" "}
                <strong className="font-medium text-zinc-950 dark:text-white">publicidade/legítimo interesse</strong>{" "}
                (art. 7º, IX) para segurança e melhorias do site.
              </p>
            </PolicySection>

            <PolicySection number="4" title="Compartilhamento com Terceiros">
              <p>
                Seus dados podem ser compartilhados com prestadores de serviço que atuam em nosso
                nome e são necessários para o funcionamento do site, entre eles:
              </p>
              <PolicyList
                items={[
                  "Formspree — processamento e entrega das mensagens do formulário de contato.",
                  "Vercel — hospedagem e infraestrutura do site.",
                  "Google Fonts — carregamento de tipografia.",
                  "Google AdSense — exibição de anúncios (quando ativo).",
                ]}
              />
              <p>
                <strong className="font-medium text-zinc-950 dark:text-white">
                  Não vendemos, alugamos ou compartilhamos seus dados pessoais
                </strong>{" "}
                com terceiros para fins de marketing sem o seu consentimento.
              </p>
            </PolicySection>

            <PolicySection number="5" title="Cookies e Publicidade do Google">
              <p>
                Cookies são pequenos arquivos armazenados no seu dispositivo para melhorar a
                experiência de navegação. O site pode utilizar cookies próprios e de terceiros.
              </p>
              <p className="font-medium text-zinc-950 dark:text-white">Cookies de publicidade de terceiros:</p>
              <p>
                Quando o Google AdSense está ativo, o Google, como fornecedor terceirizado,
                utiliza cookies para veicular anúncios neste site. Com o cookie DART, o Google
                pode exibir anúncios com base nas suas visitas anteriores a este e a outros
                sites, sem identificar pessoalmente quem você é.
              </p>
              <p>
                Você pode desativar o uso do cookie DART acessando as{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-amber-700 underline-offset-4 transition hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200 hover:underline"
                >
                  Configurações de anúncios do Google
                </a>{" "}
                e a{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-amber-700 underline-offset-4 transition hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200 hover:underline"
                >
                  política de anúncios do Google
                </a>
                . Também é possível optar por não receber publicidade personalizada em{" "}
                <a
                  href="https://www.aboutads.info/choices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-amber-700 underline-offset-4 transition hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200 hover:underline"
                >
                  www.aboutads.info/choices
                </a>
                .
              </p>
              <p>
                Você ainda pode configurar o navegador para bloquear ou excluir cookies. Vale
                notar que algumas funcionalidades do site podem não funcionar corretamente sem
                eles.
              </p>
            </PolicySection>

            <PolicySection number="6" title="Retenção e Segurança">
              <p>
                Os dados são mantidos somente pelo tempo necessário para as finalidades descritas
                nesta política ou para o cumprimento de obrigações legais, e depois são excluídos
                ou anonimizados.
              </p>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger os dados
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </PolicySection>

            <PolicySection number="7" title="Seus Direitos (LGPD)">
              <p>Em conformidade com a LGPD, você pode solicitar, a qualquer momento:</p>
              <PolicyList
                items={[
                  "Confirmação da existência de tratamento de seus dados pessoais.",
                  "Acesso, correção ou atualização dos seus dados.",
                  "Anonimização, bloqueio ou eliminação de dados desnecessários.",
                  "Portabilidade dos dados a outro fornecedor de serviço.",
                  "Informações sobre as entidades com as quais compartilhamos seus dados.",
                  "Revogação do consentimento e eliminação dos dados tratados com base nele.",
                ]}
              />
              <p>
                Para exercer esses direitos, envie um e-mail para{" "}
                <a
                  href="mailto:kaduribeiro@kadudev.com"
                  className="font-medium text-amber-700 underline-offset-4 transition hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200 hover:underline"
                >
                  kaduribeiro@kadudev.com
                </a>
                . Responderemos no prazo legal de até 15 dias.
              </p>
            </PolicySection>

            <PolicySection number="8" title="Menores de Idade">
              <p>
                O site não coleta intencionalmente dados pessoais de crianças menores de 13 anos.
                Caso identifiquemos a coleta de dados de menores, eles serão excluídos imediatamente.
              </p>
            </PolicySection>

            <PolicySection number="9" title="Alterações desta Política">
              <p>
                Esta política pode ser atualizada periodicamente para refletir mudanças legais,
                técnicas ou nos serviços utilizados. A data de atualização no topo desta página
                indica quando o documento foi alterado pela última vez.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Contato">
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos
                seus dados pessoais, entre em contato pelo e-mail{" "}
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
