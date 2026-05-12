"use client";

import { create } from "zustand";

type Theme = "dark" | "light";

type UiState = {
  activeSection: string;
  theme: Theme;
  setActiveSection: (section: string) => void;
  toggleTheme: () => void;
};

export const useUiStore = create<UiState>((set, get) => ({
  activeSection: "home",
  theme: "dark",
  setActiveSection: (section) => set({ activeSection: section }),
  toggleTheme: () => {
    const nextTheme = get().theme === "dark" ? "light" : "dark";
    set({ theme: nextTheme });
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", nextTheme);
    }
  }
}));
