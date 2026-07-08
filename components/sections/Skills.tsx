"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/site";
import { staggerContainer, fadeInUp } from "@/animations/variants";

interface SkillCardProps {
  name: string;
  icon: string;
  description: string;
  variant: "tools" | "learning" | "future";
}

const variantStyles = {
  tools: {
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
    iconBg: "rgba(124,58,237,0.12)",
    label: "#7C3AED",
  },
  learning: {
    bg: "rgba(6,182,212,0.06)",
    border: "rgba(6,182,212,0.15)",
    iconBg: "rgba(6,182,212,0.1)",
    label: "#06B6D4",
  },
  future: {
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
    iconBg: "rgba(16,185,129,0.1)",
    label: "#10B981",
  },
};

function SkillCard({ name, icon, description, variant }: SkillCardProps) {
  const styles = variantStyles[variant];

  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-xl p-4 card-hover overflow-hidden"
      style={{
        background: styles.bg,
        border: `1px solid ${styles.border}`,
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
          style={{ background: styles.iconBg }}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-white font-medium text-sm mb-0.5">{name}</h4>
          <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface SkillGroupProps {
  title: string;
  badge: string;
  items: { name: string; icon: string; description: string }[];
  variant: "tools" | "learning" | "future";
  description: string;
}

function SkillGroup({ title, badge, items, variant, description }: SkillGroupProps) {
  const styles = variantStyles[variant];

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="text-white font-semibold text-base">{title}</h3>
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full"
            style={{ color: styles.label, background: styles.iconBg, border: `1px solid ${styles.border}` }}
          >
            {badge}
          </span>
        </div>
        <p className="text-zinc-500 text-xs">{description}</p>
      </div>
      <div className="space-y-2.5">
        {items.map((skill) => (
          <SkillCard key={skill.name} {...skill} variant={variant} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const groups: SkillGroupProps[] = [
    {
      title: "Still Learning",
      badge: "In Progress",
      variant: "learning",
      description: "What I'm actively working through right now — nothing here is mastered yet",
      items: skills.learning,
    },
    {
      title: "Tools",
      badge: "Workflow",
      variant: "tools",
      description: "The environment I work in every day",
      items: skills.tools,
    },
    {
      title: "Future Interests",
      badge: "Horizon",
      variant: "future",
      description: "Where I'm heading over the next few years",
      items: skills.future,
    },
  ];

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Skills"
          title="What I'm learning, where I'm going"
          subtitle="An honest map of my abilities — no inflated claims, no buzzword bingo. I'm still learning everything here."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {groups.map((group) => (
            <motion.div key={group.title} variants={fadeInUp}>
              <SkillGroup {...group} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
