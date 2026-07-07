"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Loader, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { journeySteps } from "@/data/site";
import { staggerContainer, fadeInUp } from "@/animations/variants";

function TimelineStep({ step, index }: { step: (typeof journeySteps)[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const isCompleted = step.status === "completed";
  const isCurrent = step.status === "current";
  const isFuture = step.status === "future";

  const dotColor = isCompleted
    ? "#3B82F6"
    : isCurrent
    ? "#06B6D4"
    : "rgba(255,255,255,0.1)";

  const Icon = isCompleted ? Check : isCurrent ? Loader : Sparkles;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-start gap-6 ${
        index % 2 === 0 ? "flex-row" : "flex-row md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 glass rounded-2xl p-5 card-hover gradient-border ${
          step.highlight ? "border-brand-blue/30" : ""
        }`}
        style={step.highlight ? { boxShadow: "0 0 30px rgba(59,130,246,0.08)" } : {}}
      >
        {step.highlight && (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[10px] font-mono text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full border border-brand-blue/20">
              ⭐ Flagship Project
            </span>
          </div>
        )}

        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className={`font-semibold text-base ${
              isCompleted
                ? "text-white"
                : isCurrent
                ? "text-brand-cyan"
                : "text-zinc-500"
            }`}
          >
            {step.title}
          </h3>
          {step.year && (
            <span className="text-xs font-mono text-zinc-600 shrink-0 mt-0.5">
              {step.year}
            </span>
          )}
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed">
          {step.description}
        </p>

        {step.items && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {step.items.map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-1 rounded-lg bg-white/5 text-zinc-400 border border-white/5"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Timeline dot — only visible on md+ */}
      <div className="hidden md:flex flex-col items-center shrink-0 w-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center border"
          style={{
            background: dotColor + "20",
            borderColor: dotColor,
            boxShadow: isCurrent ? `0 0 16px ${dotColor}40` : "none",
          }}
        >
          <Icon
            size={16}
            style={{ color: dotColor }}
            className={isCurrent ? "animate-spin" : ""}
          />
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export function Journey() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="journey" className="section-padding relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Engineering Journey"
          title="Every line of code is a step forward"
          subtitle="Not a career timeline — a learning timeline. The story of how a student becomes an engineer."
        />

        {/* Vertical line */}
        <div className="relative mt-16">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 timeline-line"
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {journeySteps.map((step, i) => (
              <TimelineStep key={step.id} step={step} index={i} />
            ))}
          </motion.div>
        </div>

        {/* End quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 text-lg italic font-light">
            &ldquo;The journey is just beginning.&rdquo;
          </p>
          <div className="mt-4 w-20 h-[1px] mx-auto bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
