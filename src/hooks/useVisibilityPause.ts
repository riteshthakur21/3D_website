"use client";

import { useEffect } from "react";
import { useSceneStore } from "@/store/scene-store";

export function useVisibilityPause() {
  const setPaused = useSceneStore((s) => s.setPaused);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [setPaused]);
}
