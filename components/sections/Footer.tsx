"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import { Monogram } from "@/components/ui/Monogram";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: siteConfig.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/5 pt-12 pb-8 px-4">
      {/* Gradient top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(124,58,237,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Monogram size="sm" />
              <span className="text-white font-semibold">Sudarshan Rijal</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Computer Engineering student at Kathmandu University.
              Building software with curiosity and care.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">Status</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-zinc-400 text-sm">Open to opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span className="text-zinc-500 text-sm">2nd Semester, KU</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                <span className="text-zinc-500 text-sm">Building AXON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs font-mono">
            © {currentYear} Sudarshan Rijal · Nepal 🇳🇵
          </p>
          <p className="text-zinc-600 text-xs flex items-center gap-1.5">
            Built with <Heart size={10} className="text-red-500/60" /> and Next.js 15
          </p>
        </div>
      </div>
    </footer>
  );
}
