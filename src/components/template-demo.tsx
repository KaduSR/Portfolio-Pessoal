"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CircleHelp, Code2, ExternalLink, Search, ShoppingBag, Sparkles } from "lucide-react";
import type { SiteTemplate } from "@/lib/templates";

type Props = { template: SiteTemplate };

const shopItems = [
  { id: 1, name: "Luminária Arco", category: "Casa", price: 189.9, label: "Design" },
  { id: 2, name: "Mochila Urbana", category: "Acessórios", price: 249.9, label: "Mais vendido" },
  { id: 3, name: "Garrafa Térmica", category: "Acessórios", price: 89.9, label: "Novo" },
  { id: 4, name: "Caderno Essencial", category: "Papelaria", price: 39.9, label: "Minimalista" },
];

const articles = [
  { title: "Como planejar um projeto digital com clareza", category: "Estratégia", read: "6 min" },
  { title: "Experiência do usuário começa antes da interface", category: "Design", read: "4 min" },
  { title: "Organizando conteúdo para crescer com consistência", category: "Conteúdo", read: "8 min" },
  { title: "O que avaliar antes de integrar uma nova API", category: "Tecnologia", read: "5 min" },
];

const catalogItems = [
  { name: "Lumina", group: "Floresta", detail: "Espécie noturna · Nível 02" },
  { name: "Aquarel", group: "Oceano", detail: "Espécie costeira · Nível 04" },
  { name: "Brasaul", group: "Montanha", detail: "Espécie vulcânica · Nível 07" },
  { name: "Nébora", group: "Floresta", detail: "Espécie crepuscular · Nível 03" },
  { name: "Ventor", group: "Montanha", detail: "Espécie de altitude · Nível 06" },
  { name: "Maris", group: "Oceano", detail: "Espécie de águas profundas · Nível 05" },
];

const rates: Record<string, number> = { BRL: 1, USD: 5.2, EUR: 5.65, GBP: 6.6 };

const currency = (value: number, code = "BRL") =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: code }).format(value);

export function TemplateDemo({ template }: Props) {
  const [notice, setNotice] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [city, setCity] = useState("Valença, RJ");

  const darkDesign = ["fintech", "ai-saas", "tech", "collectibles", "crypto", "industrial", "directory"].includes(template.kind);
  const filteredArticles = useMemo(() => articles.filter((article) =>
    (filter === "Todos" || article.category === filter) &&
    article.title.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))
  ), [filter, query]);
  const filteredCatalog = useMemo(() => catalogItems.filter((item) =>
    (filter === "Todos" || item.group === filter) &&
    item.name.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))
  ), [filter, query]);
  const cartTotal = cart.reduce((sum, id) => sum + (shopItems.find((item) => item.id === id)?.price ?? 0), 0);
  const convertedValue = (Number(amount) || 0) * rates[from] / rates[to];

  return (
    <main className={darkDesign ? "min-h-screen bg-zinc-950 text-white" : "min-h-screen bg-stone-50 text-zinc-900"}>
      <div className={darkDesign ? "border-b border-white/10 bg-zinc-950/90" : "border-b border-zinc-200 bg-white/90"}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/templates" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-amber-500">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Todos os templates
          </Link>
          <span className="hidden rounded-full border border-amber-500/30 bg-amber-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-200 sm:inline-flex">
            Demonstração de conceito
          </span>
          <Link href="/#contato" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">
            Solicitar projeto
          </Link>
        </div>
      </div>

      <section className={`relative overflow-hidden border-b ${darkDesign ? "border-white/10" : "border-zinc-200"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${template.accent}`} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 dark:text-amber-200">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {template.category}
            </div>
            <p className={`mt-6 text-sm font-bold tracking-[0.25em] ${darkDesign ? "text-zinc-300" : "text-zinc-600"}`}>{template.brand}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{template.tagline}</h1>
            <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${darkDesign ? "text-zinc-300" : "text-zinc-600"}`}>{template.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experiencia" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-300">
                Explorar demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button type="button" onClick={() => setNotice("Esta é uma demonstração conceitual. Nenhum pedido, cadastro ou mensagem foi enviado.")} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${darkDesign ? "border-white/15 text-white hover:border-amber-300" : "border-zinc-300 text-zinc-800 hover:border-amber-500"}`}>
                Como funciona
              </button>
            </div>
          </div>

          <div className={`rounded-3xl border p-4 shadow-2xl ${darkDesign ? "border-white/10 bg-zinc-900/80 shadow-black/30" : "border-white/80 bg-white/80 shadow-zinc-300/30"}`}>
            <div className={`rounded-2xl p-5 sm:p-7 ${darkDesign ? "bg-zinc-950" : "bg-white"}`}>
              <div className="flex items-center justify-between gap-3 border-b border-current/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-300 font-bold text-zinc-950">{template.mark}</span>
                  <span className="text-sm font-bold tracking-wide">{template.brand}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Preview UI</span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-3 w-1/3 rounded-full bg-current/15" />
                <div className="h-5 w-5/6 rounded-full bg-current/80" />
                <div className="h-5 w-2/3 rounded-full bg-current/60" />
                <div className="h-2 w-4/5 rounded-full bg-current/15" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-xl border border-current/10 bg-current/[0.03] p-2"><div className="h-2 w-8 rounded-full bg-amber-300" /></div>
                  <div className="h-20 rounded-xl border border-current/10 bg-current/[0.03] p-2"><div className="h-2 w-10 rounded-full bg-current/20" /></div>
                  <div className="h-20 rounded-xl border border-current/10 bg-current/[0.03] p-2"><div className="h-2 w-6 rounded-full bg-current/20" /></div>
                </div>
              </div>
              <p className="mt-5 text-xs leading-5 text-zinc-500">Marca e conteúdo fictícios para demonstrar estrutura visual. Os dados não representam uma operação real.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">Dentro do template</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Estrutura pronta para personalizar</h2>
            <p className={`mt-4 text-sm leading-7 ${darkDesign ? "text-zinc-400" : "text-zinc-600"}`}>
              Esta página apresenta uma direção visual e algumas interações locais. Identidade, conteúdo, integrações e regras de negócio são ajustados conforme o projeto contratado.
            </p>
            <div className={`mt-6 rounded-2xl border p-4 ${darkDesign ? "border-white/10 bg-white/[0.03]" : "border-zinc-200 bg-white"}`}>
              <div className="flex items-center gap-2 text-sm font-semibold"><Code2 className="h-4 w-4 text-amber-500" aria-hidden="true" /> Tecnologias indicativas</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {template.stack.map((tech) => <span key={tech} className="rounded-full border border-current/10 px-3 py-1.5 text-xs opacity-80">{tech}</span>)}
              </div>
            </div>
          </div>

          <div>
            {template.kind === "shop" ? (
              <div className={`rounded-3xl border p-5 sm:p-7 ${darkDesign ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white"}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div><p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Vitrine demonstrativa</p><h3 className="mt-1 text-xl font-bold">Produtos selecionados</h3></div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-sm"><ShoppingBag className="h-4 w-4" aria-hidden="true" /> {cart.length} item(ns)</div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {shopItems.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-current/10 p-4">
                      <div className="flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/30 to-orange-500/10"><ShoppingBag className="h-8 w-8 opacity-70" aria-hidden="true" /></div>
                      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-amber-600">{item.label} · {item.category}</p>
                      <h4 className="mt-1 font-semibold">{item.name}</h4>
                      <div className="mt-3 flex items-center justify-between gap-2"><span className="text-sm font-bold">{currency(item.price)}</span><button type="button" onClick={() => { setCart((items) => [...items, item.id]); setNotice(item.name + " foi adicionado à sacola demonstrativa."); }} className="rounded-full bg-amber-400 px-3 py-2 text-xs font-bold text-zinc-950 hover:bg-amber-300">Adicionar</button></div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-current/[0.04] p-4 text-sm"><div className="flex items-center justify-between"><span>Total de demonstração</span><strong>{currency(cartTotal)}</strong></div><p className="mt-2 text-xs opacity-60">Não há pagamento ou pedido real nesta demonstração.</p><button type="button" onClick={() => { setCart([]); setNotice("Sacola demonstrativa limpa."); }} className="mt-3 text-xs font-semibold text-amber-600 hover:underline">Limpar sacola</button></div>
              </div>
            ) : template.kind === "currency" ? (
              <div className={`rounded-3xl border p-5 sm:p-7 ${darkDesign ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white"}`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Conversor interativo</p><h3 className="mt-1 text-xl font-bold">Simule uma conversão</h3>
                <label className="mt-5 block text-sm font-medium">Valor<input inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value)} className="mt-2 w-full rounded-xl border border-current/15 bg-transparent px-4 py-3" /></label>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="text-sm font-medium">De<select value={from} onChange={(event) => setFrom(event.target.value)} className="mt-2 w-full rounded-xl border border-current/15 bg-transparent px-4 py-3">{Object.keys(rates).map((code) => <option key={code} value={code} className="text-zinc-900">{code}</option>)}</select></label>
                  <label className="text-sm font-medium">Para<select value={to} onChange={(event) => setTo(event.target.value)} className="mt-2 w-full rounded-xl border border-current/15 bg-transparent px-4 py-3">{Object.keys(rates).map((code) => <option key={code} value={code} className="text-zinc-900">{code}</option>)}</select></label>
                </div>
                <div className="mt-5 rounded-2xl bg-amber-400/10 p-5"><p className="text-sm opacity-70">Resultado aproximado</p><p className="mt-1 text-3xl font-bold">{currency(convertedValue, to)}</p></div>
                <p className="mt-3 text-xs leading-5 text-zinc-500">Taxas fixas ilustrativas. Não são cotações em tempo real nem orientação financeira.</p>
              </div>
            ) : template.kind === "weather" ? (
              <div className={`rounded-3xl border p-5 sm:p-7 ${darkDesign ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white"}`}>
                <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Clima de demonstração</p><h3 className="mt-1 text-xl font-bold">Condições ilustrativas</h3></div><select aria-label="Selecionar cidade" value={city} onChange={(event) => setCity(event.target.value)} className="rounded-xl border border-current/15 bg-transparent px-3 py-2 text-sm"><option className="text-zinc-900">Valença, RJ</option><option className="text-zinc-900">Rio de Janeiro, RJ</option><option className="text-zinc-900">São Paulo, SP</option></select></div>
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-500/10 p-6"><p className="text-sm opacity-70">{city}</p><div className="mt-4 flex items-end justify-between"><div><p className="text-5xl font-bold">{city.startsWith("Valença") ? "26°" : city.startsWith("Rio") ? "29°" : "22°"}</p><p className="mt-2 text-sm">Parcialmente nublado · exemplo</p></div><span className="text-5xl" aria-hidden="true">☀</span></div></div>
                <div className="mt-4 grid grid-cols-3 gap-3">{["Hoje · 26°","Amanhã · 24°","Depois · 27°"].map((day) => <div key={day} className="rounded-xl border border-current/10 p-3 text-center text-xs">{day}</div>)}</div>
                <p className="mt-4 text-xs text-zinc-500">Condições e temperaturas fictícias. Conectar uma API é necessário para dados atuais.</p>
              </div>
            ) : template.kind === "blog" ? (
              <div className={`rounded-3xl border p-5 sm:p-7 ${darkDesign ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white"}`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Área editorial</p><h3 className="mt-1 text-xl font-bold">Notas e artigos</h3>
                <div className="relative mt-4"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar artigo..." className="w-full rounded-xl border border-current/15 bg-transparent py-3 pl-10 pr-3 text-sm" /></div>
                <div className="mt-3 flex flex-wrap gap-2">{["Todos","Estratégia","Design","Conteúdo","Tecnologia"].map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full border px-3 py-1.5 text-xs ${filter === item ? "border-amber-400 bg-amber-400 text-zinc-950" : "border-current/15"}`}>{item}</button>)}</div>
                <div className="mt-4 space-y-3">{filteredArticles.map((article) => <article key={article.title} className="rounded-xl border border-current/10 p-4"><div className="flex items-center justify-between gap-3 text-xs text-amber-600"><span>{article.category}</span><span>{article.read}</span></div><h4 className="mt-2 font-semibold">{article.title}</h4></article>)}{!filteredArticles.length && <p className="py-6 text-center text-sm opacity-60">Nenhum artigo encontrado.</p>}</div>
                <p className="mt-4 text-xs text-zinc-500">Artigos fictícios. A integração com CMS não está ativa nesta demonstração.</p>
              </div>
            ) : template.kind === "catalog" || template.kind === "directory" ? (
              <div className={`rounded-3xl border p-5 sm:p-7 ${darkDesign ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white"}`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Catálogo interativo</p><h3 className="mt-1 text-xl font-bold">Explore os registros</h3>
                <div className="relative mt-4"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nome..." className="w-full rounded-xl border border-current/15 bg-transparent py-3 pl-10 pr-3 text-sm" /></div>
                <div className="mt-3 flex flex-wrap gap-2">{["Todos","Floresta","Oceano","Montanha"].map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full border px-3 py-1.5 text-xs ${filter === item ? "border-amber-400 bg-amber-400 text-zinc-950" : "border-current/15"}`}>{item}</button>)}</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">{filteredCatalog.map((item) => <article key={item.name} className="rounded-xl border border-current/10 p-4"><div className="flex h-20 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-emerald-400/10 text-2xl font-bold">{item.name.slice(0,1)}</div><h4 className="mt-3 font-semibold">{item.name}</h4><p className="mt-1 text-xs opacity-60">{item.group} · {item.detail}</p></article>)}</div>
                {!filteredCatalog.length && <p className="py-6 text-center text-sm opacity-60">Nenhum registro encontrado.</p>}
                <p className="mt-4 text-xs text-zinc-500">Registros fictícios para testar busca e filtros.</p>
              </div>
            ) : template.kind === "crypto" || template.kind === "industrial" || template.kind === "learning" ? (
              <div className={`rounded-3xl border p-5 sm:p-7 ${darkDesign ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white"}`}>
                <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Painel de demonstração</p><h3 className="mt-1 text-xl font-bold">Visão geral</h3></div><span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-600">Demo</span></div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">{(template.kind === "crypto" ? [["Ativos","12"],["Variação","+2,4%"],["Mercado","Simulado"]] : template.kind === "industrial" ? [["Equipamentos","24"],["Disponibilidade","98,2%"],["Alertas","03"]] : [["Cursos","08"],["Progresso","64%"],["Horas","12 h"]]).map(([label,value]) => <div key={label} className="rounded-2xl border border-current/10 p-4"><p className="text-xs opacity-60">{label}</p><p className="mt-2 text-xl font-bold">{value}</p></div>)}</div>
                <div className="mt-4 rounded-2xl border border-current/10 p-4"><p className="text-sm font-semibold">Atividade recente</p><div className="mt-4 space-y-3">{template.features.map((feature, index) => <div key={feature} className="flex items-center gap-3 text-sm"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/15 text-amber-600"><Check className="h-4 w-4" aria-hidden="true" /></span><span>{feature}</span><span className="ml-auto text-xs opacity-50">0{index + 1}</span></div>)}</div></div>
                <p className="mt-4 text-xs text-zinc-500">Indicadores simulados. Sem integração com equipamentos, contas ou mercados reais.</p>
              </div>
            ) : (
              <div className={`rounded-3xl border p-5 sm:p-7 ${darkDesign ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white"}`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Conteúdo da página</p><h3 className="mt-1 text-xl font-bold">Componentes incluídos</h3>
                <div className="mt-5 space-y-3">{template.features.map((feature, index) => <div key={feature} className="flex items-start gap-3 rounded-2xl border border-current/10 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-sm font-bold text-amber-600">0{index + 1}</span><div><p className="font-semibold">{feature}</p><p className="mt-1 text-xs leading-5 opacity-60">Bloco ilustrativo preparado para receber conteúdo e identidade visual personalizados.</p></div></div>)}</div>
                <div className="mt-5 rounded-2xl bg-current/[0.04] p-4"><div className="flex items-center gap-2 text-sm font-semibold"><CircleHelp className="h-4 w-4 text-amber-600" aria-hidden="true" /> Prévia funcional</div><p className="mt-2 text-sm leading-6 opacity-70">Os links e formulários externos são demonstrativos. Para uso real, definimos os destinos, integrações e conteúdo junto ao cliente.</p></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-current/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Próximo passo</p><h2 className="mt-2 text-2xl font-bold">Adapte este conceito ao seu negócio.</h2><p className="mt-2 max-w-xl text-sm leading-6 opacity-70">Identidade, conteúdo, responsividade e regras específicas são definidos para cada projeto.</p></div>
          <Link href="/#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-zinc-950 hover:bg-amber-300">Conversar sobre um projeto <ExternalLink className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      {notice ? (
        <div role="status" className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-xl items-start gap-3 rounded-2xl border border-amber-500/30 bg-zinc-950 p-4 text-sm text-white shadow-2xl">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="flex-1 leading-6">{notice}</p>
          <button type="button" onClick={() => setNotice("")} className="rounded-full px-2 py-1 text-zinc-300 hover:bg-white/10">Fechar</button>
        </div>
      ) : null}
    </main>
  );
}
