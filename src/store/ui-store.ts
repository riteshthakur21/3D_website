import { create } from 'zustand'

export type ThemeMode = "spiderman" | "cyberpunk" | "naruto" | "matrix"

interface UiStore {
  mode: ThemeMode
  activeSection: string
  setActiveSection: (section: string) => void
  setMode: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const THEMES: ThemeMode[] = ["spiderman", "cyberpunk", "naruto", "matrix"]

export const useUiStore = create<UiStore>((set) => ({
  mode: "spiderman",
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
  setMode: (mode) => set({ mode }),
  toggleTheme: () =>
    set((state) => {
      const currentIndex = THEMES.indexOf(state.mode)
      const nextIndex = (currentIndex + 1) % THEMES.length
      return { mode: THEMES[nextIndex] }
    }),
}))
