"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, CheckCircle2, BarChart3, Flame } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { axonProject, jetsonProject } from "@/data/site";
import { staggerContainer, fadeInUp, fadeInRight } from "@/animations/variants";

function MockupWindow() {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="ml-3 flex-1 h-5 rounded bg-white/5 max-w-[200px]" />
      </div>

      {/* Sidebar + Content mockup */}
      <div className="flex h-64 md:h-80">
        {/* Sidebar */}
        <div className="w-44 border-r border-white/5 p-3 space-y-1 shrink-0 bg-white/1">
          <div className="px-3 py-2 rounded-lg bg-brand-blue/20 text-xs text-brand-blue font-mono">
            Dashboard
          </div>
          {["Patients", "Doctors", "Appointments", "Reports", "Settings"].map((item) => (
            <div key={item} className="px-3 py-2 rounded-lg text-xs text-zinc-500 hover:text-zinc-400 transition-colors">
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Patients", value: "1,284", color: "#3B82F6" },
              { label: "Doctors", value: "48", color: "#7C3AED" },
              { label: "Today's Appt.", value: "32", color: "#06B6D4" },
            ].map(({ label, value, color }) => (
              <div key={label} className="glass rounded-xl p-3">
                <p className="text-[10px] text-zinc-500 mb-1">{label}</p>
                <p className="text-base font-bold" style={{ color }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Table mockup */}
          <div className="glass rounded-xl overflow-hidden">
            <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-medium">Recent Patients</span>
              <BarChart3 size={12} className="text-zinc-600" />
            </div>
            {[
              { name: "Patient #1042", dept: "Cardiology", status: "Active" },
              { name: "Patient #1041", dept: "Neurology", status: "Discharged" },
              { name: "Patient #1040", dept: "General", status: "Pending" },
            ].map(({ name, dept, status }) => (
              <div key={name} className="flex items-center gap-3 px-3 py-2 border-b border-white/3 last:border-0">
                <div className="w-6 h-6 rounded-full bg-white/5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-300 truncate">{name}</p>
                  <p className="text-[10px] text-zinc-600">{dept}</p>
                </div>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full"
                  style={{
                    color: status === "Active" ? "#10B981" : status === "Discharged" ? "#6B7280" : "#F59E0B",
                    background: status === "Active" ? "rgba(16,185,129,0.1)" : status === "Discharged" ? "rgba(107,114,128,0.1)" : "rgba(245,158,11,0.1)",
                  }}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Axon() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [jetsonRef, jetsonInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="axon" className="section-padding relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Featured Project"
          title={axonProject.name}
          subtitle={axonProject.tagline}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Project info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p variants={fadeInUp} className="text-zinc-300 text-base leading-relaxed">
              {axonProject.description}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-zinc-500 text-sm leading-relaxed">
              {axonProject.longDescription}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-3"
            >
              {axonProject.stats.map(({ label, value }) => (
                <div key={label} className="glass rounded-xl px-4 py-3">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono mb-1">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp}>
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-3">Features</p>
              <ul className="space-y-2">
                {axonProject.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-zinc-400">
                    <CheckCircle2 size={14} className="text-brand-blue shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={fadeInUp}>
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {axonProject.techStack.map(({ name, color }) => (
                  <span
                    key={name}
                    className="text-xs px-3 py-1 rounded-full border font-mono"
                    style={{ color, borderColor: color + "40", background: color + "10" }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                href={axonProject.repo}
                external
                magnetic
              >
                <Github size={15} />
                View on GitHub
              </Button>
              <Button variant="glass" size="md" disabled>
                <ExternalLink size={14} />
                Live Demo (Coming Soon)
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Visual mockup */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Glow behind mockup */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.3), transparent)" }}
              aria-hidden="true"
            />

            <MockupWindow />

            {/* AXON badge overlay */}
            <motion.div
              className="absolute -top-3 -right-3 glass-strong rounded-xl px-3 py-2 text-center border border-brand-blue/30"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[10px] text-zinc-500 font-mono">Built with</p>
              <p className="text-xs font-bold text-white">C++ + Qt</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Second project — Jetson Fire/Smoke Detection */}
        <motion.div
          ref={jetsonRef}
          variants={staggerContainer}
          initial="hidden"
          animate={jetsonInView ? "visible" : "hidden"}
          className="mt-24 pt-16 border-t border-white/5"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">Also Built</span>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
              <Flame size={22} className="text-orange-400" />
              {jetsonProject.name}
            </h3>
            <p className="mt-3 text-zinc-400 text-sm md:text-base leading-relaxed">
              {jetsonProject.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto glass rounded-2xl p-6 md:p-8 gradient-border">
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              {jetsonProject.longDescription}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {jetsonProject.stats.map(({ label, value }) => (
                <div key={label} className="glass rounded-xl px-3 py-2.5">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono mb-1">{label}</p>
                  <p className="text-white font-semibold text-xs">{value}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {jetsonProject.techStack.map(({ name, color }) => (
                <span
                  key={name}
                  className="text-xs px-3 py-1 rounded-full border font-mono"
                  style={{ color, borderColor: color + "40", background: color + "10" }}
                >
                  {name}
                </span>
              ))}
            </div>

            <Button
              variant="glass"
              size="md"
              href={jetsonProject.repo}
              external
              magnetic
            >
              <Github size={15} />
              View on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
