"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Monogram } from "@/components/ui/Monogram";
import { Button } from "@/components/ui/Button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { typingPhrases, siteConfig } from "@/data/site";
import { staggerContainer, fadeInUp, scaleIn } from "@/animations/variants";

export function Hero() {
  const typedText = useTypewriter(typingPhrases, {
    typeSpeed: 75,
    deleteSpeed: 35,
    pauseDuration: 2200,
  });

  const socials = [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: siteConfig.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
      aria-label="Hero section"
    >
      {/* Gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Avatar */}
        <motion.div
          variants={scaleIn}
          className="flex justify-center mb-8"
        >
          <Monogram size="xl" animated />
        </motion.div>

        {/* Label */}
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="section-label">
            🇳🇵 Computer Engineering · Kathmandu University · 2nd Semester
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-4"
        >
          Sudarshan{" "}
          <span className="text-gradient">Rijal</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-zinc-400 font-light tracking-wide mb-4"
        >
          Computer Engineering Student{" "}
          <span className="text-zinc-600 mx-2">•</span>
          Software Builder{" "}
          <span className="text-zinc-600 mx-2">•</span>
          Lifelong Learner
        </motion.p>

        {/* Typewriter */}
        <motion.div variants={fadeInUp} className="h-8 flex items-center justify-center mb-8">
          <span className="font-mono text-sm md:text-base text-brand-blue">
            {typedText}
            <span className="typewriter-cursor" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed mb-10"
        >
          I write code the way I want to live — with care, curiosity, and the conviction that
          the details matter. Every program I build teaches me something the classroom can&apos;t.
          Still early. Always learning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            magnetic
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </Button>
          <Button
            variant="glass"
            size="lg"
            href="#contact"
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/resume.pdf"
            external
          >
            Download Resume ↗
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={17} className="group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-xs font-mono text-zinc-600 tracking-widest">scroll</span>
        <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-zinc-500 scroll-dot" />
        </div>
        <ArrowDown size={12} className="text-zinc-700 animate-bounce" />
      </motion.div>
    </section>
  );
}
