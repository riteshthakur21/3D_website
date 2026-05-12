"use client";

import { useEffect } from "react";
import { useUiStore } from "@/store/ui-store";
import { NAV_ITEMS } from "@/lib/constants";

export function useScrollProgress() {
  const setActiveSection = useUiStore((s) => s.setActiveSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { threshold: 0.4 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);
}
