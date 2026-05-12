"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <p className="section-kicker">Selected work</p>
      <h2 className="section-title mt-4">Projects</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ rotateX: 2.5, rotateY: -2.5, y: -3 }}
          >
            <Card className="h-full">
              <h3 className="font-heading text-2xl font-light">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
              <p className="mt-5 text-[0.62rem] uppercase tracking-[0.16em] text-gold">
                {project.techStack.join(" · ")}
              </p>
              <div className="mt-6 flex gap-5 text-xs uppercase tracking-[0.18em]">
                <a className="text-gold hover:text-text" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
                {project.repoUrl ? (
                  <a className="text-muted hover:text-text" href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source
                  </a>
                ) : null}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
