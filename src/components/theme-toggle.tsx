"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/components/use-mounted";

export function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-amber-400/40 hover:text-amber-300"
      aria-label="Alternar tema"
    >
      {mounted && resolvedTheme === "dark" ? (
        <SunMedium className="h-5 w-5" />
      ) : (
        <MoonStar className="h-5 w-5" />
      )}
    </button>
  );
}
