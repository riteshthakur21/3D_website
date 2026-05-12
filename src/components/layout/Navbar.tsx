"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { useUiStore } from "@/store/ui-store";

export function Navbar() {
  const active = useUiStore((s) => s.activeSection);
  const mode = useUiStore((s) => s.mode);
  const toggleTheme = useUiStore((s) => s.toggleTheme);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-30 pt-6">
      <div className="container-safe flex items-center justify-between">
        <button
          type="button"
          className="pointer-events-auto font-heading text-base tracking-[0.22em] text-gold uppercase"
          onClick={() => scrollTo("home")}
          aria-label="Go to home section"
        >
          Liquid Geometry
        </button>
        <nav aria-label="Main navigation" className="pointer-events-auto flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`text-[0.68rem] uppercase tracking-[0.2em] transition ${
                active === item.id ? "text-gold" : "text-muted hover:text-text"
              }`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-gold/40 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-gold min-w-[80px]"
            aria-label="Toggle color theme"
          >
            {mode}
          </button>
        </nav>
      </div>
    </header>
  );
}
