"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useSceneStore } from "@/store/scene-store";
import { useUiStore } from "@/store/ui-store";
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then((m) => m.ProjectsSection));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then((m) => m.AboutSection));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection").then((m) => m.SkillsSection));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then((m) => m.ContactSection));

export function PortfolioApp() {
  useScrollProgress();
  const reducedMotion = useReducedMotion();
  const mode = useUiStore((s) => s.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (reducedMotion) return;
      const state = useSceneStore.getState();
      const next = Math.max(3, Math.min(9, state.targetZoom + event.deltaY * 0.01));
      state.setTargetZoom(next);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [reducedMotion]);

  return (
    <PageTransition>
      <CustomCursor />
      <Navbar />
      <Hero />
      <main className="relative z-10 bg-gradient-to-b from-transparent via-background/90 to-background">
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </PageTransition>
  );
}
