"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { highlights, siteContent } from "@/lib/content";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-24 min-h-[calc(100vh-80px)] flex items-center">
      {/* Premium Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-100 px-4 py-2 text-sm text-emerald-700 backdrop-blur-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {siteContent.role} • {siteContent.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl leading-[1.1] dark:text-white"
          >
            {siteContent.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            {siteContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950 transition-all hover:bg-amber-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            >
              Ver projetos e cases
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-6 py-3 font-semibold text-zinc-950 transition-all hover:scale-105 hover:border-amber-600/50 hover:bg-zinc-100 active:scale-95 backdrop-blur-sm dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-amber-400/40 dark:hover:bg-white/10"
            >
              Falar comigo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/KaduSR"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 text-zinc-800 transition-all hover:-translate-y-1 hover:border-amber-600/50 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-amber-400/40 dark:hover:text-amber-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaduesr/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 text-zinc-800 transition-all hover:-translate-y-1 hover:border-amber-600/50 hover:text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-amber-400/40 dark:hover:text-amber-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {highlights.map((item, idx) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-zinc-200 bg-white px-4 py-5 backdrop-blur-sm transition-all hover:border-amber-600/30 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-amber-400/30 dark:hover:bg-white/[0.08]"
              >
                <p className="text-2xl font-bold text-amber-700 transition-colors group-hover:text-amber-600 dark:text-amber-300 dark:group-hover:text-amber-400">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-[100px] animate-pulse" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-[2.5rem] border border-zinc-200 bg-white/80 p-4 shadow-2xl shadow-zinc-300/40 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/40"
          >
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-zinc-950/80">
              <Image
                src="/images/hero-icon.png"
                alt="Dragão e guitarra"
                width={900}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
            <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-100/90 p-4 text-sm text-zinc-700 backdrop-blur-sm dark:border-white/10 dark:bg-black/40 dark:text-zinc-300">
              <p className="flex items-center gap-2 font-semibold text-zinc-950 dark:text-white">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Foco de atuação
              </p>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">Full Stack • IA aplicada • Automação • UX de produto</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
