"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Monogram } from "@/components/ui/Monogram";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px -50% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-[500] flex justify-center px-4"
      >
        <div
          className={cn(
            "flex items-center gap-2 rounded-2xl transition-all duration-500",
            scrolled
              ? "glass-strong px-4 py-2.5 shadow-2xl shadow-black/30"
              : "glass px-5 py-3",
            "w-full max-w-5xl"
          )}
          style={{
            borderColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Go to top"
          >
            <Monogram size="sm" />
            <span
              className={cn(
                "font-semibold text-sm text-white/90 transition-opacity duration-300 hidden sm:block",
                scrolled ? "opacity-100" : "opacity-70"
              )}
            >
              Sudarshan
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 ml-auto" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={cn(
                  "relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 cursor-pointer",
                  activeSection === href
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {activeSection === href && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(59,130,246,0.12)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto md:ml-3">
            <ThemeToggle />
            <motion.a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white/80 glass hover:text-white transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Download resume"
            >
              <Download size={13} />
              <span>Resume</span>
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden w-9 h-9 rounded-xl glass flex items-center justify-center text-zinc-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-[499] rounded-2xl glass-strong p-4 shadow-2xl shadow-black/50 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(href)}
                  className="text-left px-4 py-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {label}
                </motion.button>
              ))}
              <div className="border-t border-white/5 mt-2 pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
