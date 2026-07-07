"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Star, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { githubStats } from "@/data/site";
import { staggerContainer, fadeInUp } from "@/animations/variants";

function ContributionGrid() {
  const weeks = 26;
  const days = 7;

  const getIntensity = (week: number, day: number) => {
    const seed = week * 7 + day;
    const val = Math.sin(seed * 0.37) * 0.5 + 0.5;
    if (val > 0.85) return 4;
    if (val > 0.65) return 3;
    if (val > 0.45) return 2;
    if (val > 0.25) return 1;
    return 0;
  };

  const colors = [
    "rgba(255,255,255,0.05)",
    "rgba(59,130,246,0.15)",
    "rgba(59,130,246,0.3)",
    "rgba(59,130,246,0.55)",
    "rgba(59,130,246,0.85)",
  ];

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-1 min-w-max">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, d) => {
              const intensity = getIntensity(w, d);
              return (
                <div
                  key={d}
                  className="w-3 h-3 rounded-[2px] transition-colors"
                  style={{ background: colors[intensity] }}
                  title={`${intensity} contributions`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function RepoCard({ repo }: { repo: (typeof githubStats.repos)[0] }) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      className="glass rounded-2xl p-5 card-hover gradient-border flex flex-col gap-3 group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: repo.color }}
          />
          <h4 className="text-white font-mono text-sm font-medium group-hover:text-brand-blue transition-colors">
            {repo.name}
          </h4>
        </div>
        <ExternalLink size={13} className="text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0 mt-0.5" />
      </div>
      <p className="text-zinc-500 text-xs leading-relaxed">{repo.description}</p>
      <div className="flex items-center gap-3 mt-auto pt-1">
        <span className="flex items-center gap-1 text-[10px] text-zinc-600">
          <div className="w-2 h-2 rounded-full" style={{ background: repo.color }} />
          {repo.lang}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-zinc-600">
          <Star size={10} />
          {repo.stars}
        </span>
      </div>
    </motion.a>
  );
}

export function GitHubSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="GitHub"
          title="Open source & version control"
          subtitle="All my projects are public. I believe in learning in the open."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 space-y-8"
        >
          {/* Stats */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {githubStats.stats.map(({ label, value }) => (
              <div
                key={label}
                className="glass rounded-2xl p-5 text-center gradient-border"
              >
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-xs text-zinc-500 font-mono">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Contribution graph */}
          <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 gradient-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-zinc-300">Contributions</h3>
              <span className="text-xs text-zinc-600 font-mono">Last 6 months</span>
            </div>
            <ContributionGrid />
            <p className="mt-3 text-xs text-zinc-600 text-right font-mono">
              * Placeholder visualization — connect GitHub API to show real data
            </p>
          </motion.div>

          {/* Repos */}
          <div>
            <motion.h3 variants={fadeInUp} className="text-sm font-medium text-zinc-400 mb-4 font-mono">
              Pinned repositories
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {githubStats.repos.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="flex justify-center pt-4">
            <Button
              variant="glass"
              size="lg"
              href={githubStats.profileUrl}
              external
              magnetic
            >
              <Github size={16} />
              View Full GitHub Profile
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
