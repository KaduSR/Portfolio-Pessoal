"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Code2, Search, Sparkles } from "lucide-react";
import { siteTemplates, templateCategories } from "@/lib/templates";

export function TemplateCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof templateCategories)[number]>("Todos");

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    return siteTemplates.filter((template) => {
      const matchesCategory = category === "Todos" || template.category === category;
      const searchable = [template.name, template.brand, template.category, template.tagline, ...template.stack]
        .join(" ")
        .toLocaleLowerCase("pt-BR");
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [query, category]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-zinc-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.13),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Kadu Dev · Lab de templates
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
            Modelos digitais prontos para ganhar forma.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Uma coleção de conceitos para sites institucionais, landing pages, lojas e aplicações web.
            Cada demonstração usa uma marca fictícia e serve como ponto de partida para um projeto sob medida.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-amber-500/30 bg-amber-400/10 px-4 py-2 font-medium text-amber-800 dark:text-amber-200">
              {siteTemplates.length} conceitos de template
            </span>
            <span className="rounded-full border border-zinc-300 bg-white/70 px-4 py-2 text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              Marcas e dados demonstrativos
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">Biblioteca</p>
            <h2 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">Explore os templates</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Abra uma demonstração para ver a estrutura e as interações previstas para cada tipo de produto.
            </p>
          </div>
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Buscar templates</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nome, categoria ou tecnologia..."
              className="w-full rounded-2xl border border-zinc-300 bg-white py-3 pl-11 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </label>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar templates por categoria">
          {templateCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 ${
                category === item
                  ? "border-amber-400 bg-amber-400 text-zinc-950"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-amber-500/50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400" aria-live="polite">
          {filteredTemplates.length} {filteredTemplates.length === 1 ? "template encontrado" : "templates encontrados"}
        </p>

        {filteredTemplates.length ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTemplates.map((template, index) => (
              <article
                key={template.slug}
                className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl hover:shadow-zinc-300/30 dark:border-white/10 dark:bg-zinc-900 dark:hover:shadow-black/20"
              >
                <div className={`relative overflow-hidden bg-gradient-to-br p-5 ${template.accent}`}>
                  <div className="flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 p-4 text-white shadow-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-300 font-bold text-zinc-950">{template.mark}</span>
                        <span className="text-xs font-bold tracking-[0.18em]">{template.brand}</span>
                      </div>
                      <span className="rounded-full border border-white/15 px-2 py-1 text-[9px] uppercase tracking-wider text-zinc-300">Preview</span>
                    </div>
                    <div className="max-w-[85%]">
                      <div className="mb-2 h-1.5 w-12 rounded-full bg-amber-300" />
                      <p className="line-clamp-2 text-lg font-semibold leading-tight sm:text-xl">{template.tagline}</p>
                      <div className="mt-4 flex gap-2">
                        <span className="h-2 w-14 rounded-full bg-white/80" />
                        <span className="h-2 w-9 rounded-full bg-white/20" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="h-7 rounded-lg border border-white/10 bg-white/5" />
                      <span className="h-7 rounded-lg border border-white/10 bg-white/5" />
                      <span className="h-7 rounded-lg border border-white/10 bg-white/5" />
                    </div>
                  </div>
                  <span className="absolute right-7 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur">
                    <Code2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">
                      {template.category}
                    </span>
                    <span className="text-[11px] text-zinc-500">Conceito</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-zinc-950 dark:text-white">{template.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{template.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {template.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/templates/${template.slug}`}
                    className="mt-5 inline-flex items-center justify-between rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-400 hover:text-zinc-950 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-300"
                  >
                    Ver demonstração
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-zinc-300 px-6 py-16 text-center dark:border-white/15">
            <p className="font-semibold text-zinc-900 dark:text-white">Nenhum template encontrado</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Tente outro termo ou selecione outra categoria.</p>
            <button
              type="button"
              onClick={() => { setQuery(""); setCategory("Todos"); }}
              className="mt-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-300"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>
    </>
  );
}
