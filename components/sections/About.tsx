"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Heart, Lightbulb, Target } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Monogram } from "@/components/ui/Monogram";
import { staggerContainer, fadeInUp, fadeInLeft } from "@/animations/variants";

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I care about readability as much as functionality. Code is read more than it's written.",
  },
  {
    icon: Lightbulb,
    title: "Curious Mind",
    description: "Every bug is a puzzle. Every new concept is an invitation. I lean into what I don't know.",
  },
  {
    icon: Target,
    title: "Long-term Vision",
    description: "I'm building foundations, not shortcuts. Four years from now, this portfolio will look very different.",
  },
  {
    icon: Heart,
    title: "Craft-Driven",
    description: "I believe great software is built by people who care — about users, about quality, about the details.",
  },
];

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About Me"
          title="A student who builds things and breaks them to understand why"
          subtitle="Currently in my second semester of Computer Engineering at Kathmandu University, Nepal."
          align="left"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Monogram + visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              {/* Outer glow rings */}
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    inset: `-${i * 20}px`,
                    border: `1px solid rgba(59,130,246,${0.15 / i})`,
                  }}
                  animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
                  transition={{ duration: 20 * i, repeat: Infinity, ease: "linear" }}
                />
              ))}
              <Monogram size="xl" />
            </div>

            {/* Nepal badge */}
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-1">Based in</p>
              <p className="text-white font-semibold flex items-center gap-2 justify-center">
                <span>🇳🇵</span> Nepal — Dhulikhel
              </p>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-5"
          >
            <motion.p variants={fadeInUp} className="text-zinc-300 text-base md:text-lg leading-relaxed">
              I&apos;m Sudarshan — a second-semester Computer Engineering student at Kathmandu University with
              a genuine passion for building software that actually works. Not just runs, but works well
              and is written in a way someone else could read and maintain.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-zinc-400 leading-relaxed">
              My programming journey started with C++ and Object-Oriented Programming — and the experience
              of building AXON, a real desktop Hospital Management System, showed me what software engineering
              actually means in practice. Not just syntax, but design decisions, edge cases, and the
              responsibility of writing code that does something meaningful.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-zinc-400 leading-relaxed">
              I&apos;m not trying to seem more experienced than I am. I&apos;m a student. But I take this craft
              seriously, I learn fast, and I&apos;m building toward something. Right now, that something is
              becoming an engineer who writes thoughtful, clean, maintainable software — and gets better
              at it every single day.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-2">
              <p className="text-sm text-zinc-500 font-mono">
                <span className="text-brand-cyan">const</span>{" "}
                <span className="text-white">sudarshan</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-brand-blue">{`{ student: true, curious: true, improving: always }`}</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Trait cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {traits.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="glass rounded-2xl p-5 card-hover gradient-border"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-3">
                <Icon size={18} className="text-brand-blue" />
              </div>
              <h3 className="text-white font-semibold mb-1.5 text-sm">{title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
