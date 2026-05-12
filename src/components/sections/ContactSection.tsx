"use client";

import { FormEvent, useState } from "react";
import { contactSchema } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0]
      });
      return;
    }

    setErrors({});
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form)
    });
    if (!response.ok) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact" className="pb-20">
      <p className="section-kicker">Connect</p>
      <h2 className="section-title mt-4">Contact</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto]">
        <form className="glass rounded-2xl p-6 md:p-8" onSubmit={onSubmit} noValidate>
          <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-muted" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="mb-2 w-full rounded-md border border-gold/25 bg-black/20 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring"
          />
          {errors.name ? <p className="mb-4 text-xs text-red-300">{errors.name}</p> : <div className="mb-4" />}

          <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-muted" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="mb-2 w-full rounded-md border border-gold/25 bg-black/20 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring"
          />
          {errors.email ? <p className="mb-4 text-xs text-red-300">{errors.email}</p> : <div className="mb-4" />}

          <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-muted" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="mb-2 w-full rounded-md border border-gold/25 bg-black/20 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring"
          />
          {errors.message ? <p className="mb-4 text-xs text-red-300">{errors.message}</p> : <div className="mb-4" />}

          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>
          {status === "sent" ? <p className="mt-4 text-xs uppercase tracking-[0.14em] text-gold">Sent.</p> : null}
          {status === "error" ? <p className="mt-4 text-xs uppercase tracking-[0.14em] text-red-300">Failed.</p> : null}
        </form>
        <aside className="space-y-4 text-sm text-muted">
          <a href="mailto:hello@example.com" className="block hover:text-text">
            hello@example.com
          </a>
          <a href="https://github.com/example" target="_blank" rel="noreferrer" className="block hover:text-text">
            GitHub
          </a>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noreferrer" className="block hover:text-text">
            LinkedIn
          </a>
          <a href="https://x.com/example" target="_blank" rel="noreferrer" className="block hover:text-text">
            X / Twitter
          </a>
        </aside>
      </div>
    </Section>
  );
}
