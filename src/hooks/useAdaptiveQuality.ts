"use client";

import { useEffect } from "react";
import { useSceneStore } from "@/store/scene-store";

export function useAdaptiveQuality() {
  const setQuality = useSceneStore((s) => s.setQuality);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const lowPower = navigator.hardwareConcurrency <= 4;
    setQuality(coarse || lowPower ? "low" : "high");
  }, [setQuality]);
}
