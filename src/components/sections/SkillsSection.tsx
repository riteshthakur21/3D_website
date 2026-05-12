"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Section } from "@/components/layout/Section";

export function SkillsSection() {
  return (
    <Section id="skills">
      <p className="section-kicker">Capabilities</p>
      <h2 className="section-title mt-4">Skills</h2>
      <div className="mt-10 space-y-5">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.2em] text-muted">
              <span>{skill.name}</span>
              <span className="text-gold">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="h-2 rounded-full bg-gradient-to-r from-gold-dim to-gold shadow-glow"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
