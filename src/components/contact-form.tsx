"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const endpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? "",
    [],
  );
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const message = String(data.get("message") ?? "");
      const subject = encodeURIComponent(`Contato do portfólio — ${name}`);
      const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`);
      window.location.href = `mailto:kaduribeiro@kadudev.com?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Seu nome"
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-400/50"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="voce@empresa.com"
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-400/50"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Conte sobre o projeto, objetivo ou vaga."
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-400/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-emerald-300">Mensagem enviada com sucesso.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-rose-300">Não foi possível enviar agora. Tente novamente.</p>
      ) : null}
      <p className="text-xs leading-6 text-zinc-400">
        Se a variável NEXT_PUBLIC_FORMSPREE_ENDPOINT não estiver configurada, o botão abre o email padrão.
      </p>
    </form>
  );
}
