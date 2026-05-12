"use client";

import { create } from "zustand";
import type { SceneMode } from "@/lib/constants";

type SceneState = {
  mode: SceneMode;
  targetZoom: number;
  mouse: { x: number; y: number };
  paused: boolean;
  quality: "high" | "low";
  setMode: (mode: SceneMode) => void;
  setMouse: (x: number, y: number) => void;
  setTargetZoom: (z: number) => void;
  setPaused: (paused: boolean) => void;
  setQuality: (quality: "high" | "low") => void;
};

export const useSceneStore = create<SceneState>((set) => ({
  mode: "icosahedron",
  targetZoom: 5,
  mouse: { x: 0, y: 0 },
  paused: false,
  quality: "high",
  setMode: (mode) => set({ mode }),
  setMouse: (x, y) => set({ mouse: { x, y } }),
  setTargetZoom: (z) => set({ targetZoom: z }),
  setPaused: (paused) => set({ paused }),
  setQuality: (quality) => set({ quality })
}));
