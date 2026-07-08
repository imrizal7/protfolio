"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/animations/variants";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "#3B82F6",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "imrizal7",
    href: siteConfig.github,
    color: "#7C3AED",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sudarshan-rijal",
    href: siteConfig.linkedin,
    color: "#06B6D4",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "rizal0.7",
    href: siteConfig.instagram,
    color: "#EC4899",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass text-white text-sm placeholder-zinc-600 border border-white/6 focus:border-brand-blue/40 focus:outline-none focus:ring-1 focus:ring-brand-blue/20 transition-all duration-200 bg-transparent";

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's talk"
          subtitle="I'm always open to conversations — whether you're a recruiter, a fellow student, or someone who wants to collaborate."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left — Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-white font-semibold mb-2">Get in touch</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you&apos;re interested in my work, want to give feedback on AXON,
                or just want to say hello from Nepal — my inbox is always open.
              </p>
            </motion.div>

            <motion.div variants={fadeInLeft} className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 rounded-xl glass hover:bg-white/6 transition-all duration-200 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all"
                    style={{ background: color + "15", border: `1px solid ${color}30` }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono">{label}</p>
                    <p className="text-zinc-300 text-sm group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-4 gradient-border">
              <p className="text-xs text-zinc-500 font-mono mb-1">Response time</p>
              <p className="text-sm text-zinc-300">
                Usually within <span className="text-brand-blue font-medium">24–48 hours</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-2xl p-6 md:p-8 gradient-border">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Status feedback */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 rounded-xl px-4 py-3"
                  >
                    <CheckCircle size={15} />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3"
                  >
                    <AlertCircle size={15} />
                    Something went wrong. Try emailing me directly.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  disabled={status === "sending"}
                  magnetic
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
