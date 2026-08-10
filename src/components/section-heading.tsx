import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">{description}</p>
    </div>
  );
}

export function GlassCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl shadow-zinc-300/30 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
      {children}
    </div>
  );
}
