"use client";

import { motion } from "framer-motion";
import { LoaderArc } from "@/components/ui/LoaderArc";
import { fadeUp, sectionTransition } from "@/lib/motion";

export function HeroOverlay() {
  return (
    <div className="pointer-events-none relative z-10 min-h-screen px-6 pb-10 pt-28 md:px-10">
      <div className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-between">
        <header className="flex items-start justify-between">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ ...sectionTransition, delay: 0.2 }}
            className="section-kicker"
          >
            Spatial · Interactive · Living
          </motion.p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ ...sectionTransition, delay: 0.35 }}
            className="max-w-xl"
          >
            <h1 className="font-heading text-5xl font-light leading-[0.95] md:text-7xl">
              Beyond
              <br />
              <em className="text-gold not-italic">the</em> flat
              <br />
              surface.
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              A premium full-stack portfolio where real-time geometry, cinematic motion, and architecture-first
              engineering converge.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ ...sectionTransition, delay: 0.5 }}
            className="ml-auto flex flex-col items-end gap-8"
          >
            <Stat value="∞" label="Permutations" />
            <Stat value="3D" label="Real-time render" />
            <Stat value="60" label="Target FPS" />
          </motion.div>
        </div>

        <motion.footer
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ ...sectionTransition, delay: 0.65 }}
          className="flex items-end justify-between"
        >
          <p className="text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            Move mouse · Scroll to zoom · Switch forms
          </p>
          <LoaderArc />
        </motion.footer>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right">
      <p className="font-heading text-5xl font-light leading-none text-gold">{value}</p>
      <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-muted">{label}</p>
    </div>
  );
}
