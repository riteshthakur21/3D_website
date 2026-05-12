"use client";

import { useEffect } from "react";
import { useSceneStore } from "@/store/scene-store";

export function useMouseLerp() {
  const setMouse = useSceneStore((s) => s.setMouse);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse(x, y);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [setMouse]);
}
