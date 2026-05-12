"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import { Section } from "@/components/layout/Section";

export function AboutSection() {
  return (
    <Section id="about">
      <p className="section-kicker">Profile</p>
      <h2 className="section-title mt-4">About</h2>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 max-w-3xl text-base leading-8 text-muted"
      >
        I design and build immersive, high-performance product experiences with a systems mindset: clean architecture,
        elegant interaction, and measurable reliability in production.
      </motion.p>
      <div className="mt-10 space-y-6">
        {timeline.map((item, index) => (
          <motion.div
            key={item.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass rounded-xl p-5"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{item.period}</p>
            <h3 className="mt-2 font-heading text-2xl font-light">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
