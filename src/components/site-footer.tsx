import { contactLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 text-sm text-zinc-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Kadu Ribeiro. Todos os direitos reservados.</p>
        <div className="flex items-center gap-5">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noreferrer" : undefined}
              className="transition hover:text-amber-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
