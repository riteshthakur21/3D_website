import { create } from 'zustand'
import { type SceneMode } from '@/lib/constants'

type Quality = "low" | "high"

interface SceneStore {
  targetZoom: number
  setTargetZoom: (zoom: number) => void
  paused: boolean
  setPaused: (paused: boolean) => void
  quality: Quality
  setQuality: (quality: Quality) => void
  mouseX: number
  mouseY: number
  setMouse: (x: number, y: number) => void
  scrollProgress: number
  setScrollProgress: (progress: number) => void
  activeSection: string
  setActiveSection: (section: string) => void
  isLoaded: boolean
  setIsLoaded: (loaded: boolean) => void
  mode: SceneMode
  setMode: (mode: SceneMode) => void
}

export const useSceneStore = create<SceneStore>((set) => ({
  targetZoom: 5,
  setTargetZoom: (zoom) => set({ targetZoom: zoom }),
  paused: false,
  setPaused: (paused) => set({ paused }),
  quality: "high",
  setQuality: (quality) => set({ quality }),
  mouseX: 0,
  mouseY: 0,
  setMouse: (x, y) => set({ mouseX: x, mouseY: y }),
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
  isLoaded: false,
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
  mode: "icosahedron",
  setMode: (mode) => set({ mode }),
}))
