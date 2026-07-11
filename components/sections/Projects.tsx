"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, CheckCircle2, Flame, HeartPulse, Plus, LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/site";
import { staggerContainer, fadeInUp } from "@/animations/variants";

type Project = (typeof projects)[number];

const projectIcons: Record<string, LucideIcon> = {
  axon: HeartPulse,
  jetson: Flame,
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.icon] ?? HeartPulse;

  return (
    <motion.div
      variants={fadeInUp}
      className="glass rounded-2xl p-6 md:p-7 gradient-border flex flex-col h-full card-hover"
      whileHover={{ scale: 1.01 }}
    >
      {project.flagship && (
        <span className="self-start mb-3 text-[10px] font-mono text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full border border-brand-blue/20">
          ⭐ Flagship Project
        </span>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-brand-blue" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{project.name}</h3>
          <p className="text-zinc-500 text-xs">{project.tagline}</p>
        </div>
      </div>

      {/* Description — unchanged copy, just reflowed for the card layout */}
      <p className="text-zinc-300 text-sm leading-relaxed mb-3">{project.description}</p>
      <p className="text-zinc-500 text-xs leading-relaxed mb-5">{project.longDescription}</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {project.stats.map(({ label, value }) => (
          <div key={label} className="glass rounded-lg px-3 py-2">
            <p className="text-[9px] text-zinc-600 uppercase tracking-widest font-mono mb-0.5">{label}</p>
            <p className="text-white font-semibold text-xs">{value}</p>
          </div>
        ))}
      </div>

      {/* Features (AXON only — omitted automatically when not present) */}
      {"features" in project && project.features && (
        <ul className="space-y-1.5 mb-5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 size={12} className="text-brand-blue shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map(({ name, color }) => (
          <span
            key={name}
            className="text-[10px] px-2.5 py-0.5 rounded-full border font-mono"
            style={{ color, borderColor: color + "40", background: color + "10" }}
          >
            {name}
          </span>
        ))}
      </div>

      {/* Action */}
      <div className="mt-auto pt-2">
        <Button variant="primary" size="sm" href={project.repo} external magnetic>
          <Github size={14} />
          View on GitHub
        </Button>
      </div>
    </motion.div>
  );
}

function MoreProjectsCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-dashed border-white/15 flex flex-col items-center justify-center text-center p-8 gap-3 min-h-[280px] hover:border-brand-blue/30 transition-colors"
    >
      <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
        <Plus size={20} className="text-zinc-500" />
      </div>
      <p className="text-zinc-400 text-sm font-medium">More projects coming soon</p>
      <p className="text-zinc-600 text-xs max-w-[200px]">
        This spot&apos;s reserved for whatever I build next.
      </p>
    </motion.div>
  );
}

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Things I've built"
          subtitle="Real projects, real lessons — from a hospital management system to an edge-AI fire detector."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <MoreProjectsCard />
        </motion.div>
      </div>
    </section>
  );
}
