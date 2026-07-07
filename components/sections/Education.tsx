"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/data/site";
import { staggerContainer, fadeInUp } from "@/animations/variants";

export function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Education"
          title="The academic foundation"
          subtitle="From the hills of Pokhara to the engineering halls of Dhulikhel — a path shaped by curiosity."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              variants={fadeInUp}
              className={`relative glass rounded-2xl p-6 card-hover gradient-border overflow-hidden ${
                i === 0 ? "md:col-span-1 border-blue-500/20" : ""
              }`}
            >
              {/* Active glow for current institution */}
              {i === 0 && (
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }}
                  aria-hidden="true"
                />
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl" aria-hidden="true">{edu.icon}</span>
                {i === 0 && (
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full border border-brand-blue/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-white font-semibold text-base leading-tight mb-1">{edu.level}</h3>
              <p className="text-brand-blue text-sm font-medium mb-3">{edu.field}</p>
              <p className="text-zinc-300 text-sm font-medium mb-4">{edu.institution}</p>

              <div className="space-y-1.5 mt-auto">
                <div className="flex items-center gap-2 text-zinc-500 text-xs">
                  <MapPin size={11} />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-xs">
                  <Calendar size={11} />
                  <span>{edu.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
