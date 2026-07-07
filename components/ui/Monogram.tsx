"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MonogramProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { container: "w-8 h-8", text: "text-xs", blur: "blur-sm" },
  md: { container: "w-10 h-10", text: "text-sm", blur: "blur-md" },
  lg: { container: "w-16 h-16", text: "text-lg", blur: "blur-lg" },
  xl: { container: "w-32 h-32", text: "text-3xl", blur: "blur-xl" },
};

export function Monogram({ size = "md", animated = true, className }: MonogramProps) {
  const sizes = sizeMap[size];

  return (
    <motion.div
      className={cn("relative flex items-center justify-center", sizes.container, className)}
      whileHover={animated ? { rotateY: 15, rotateX: -10 } : undefined}
      style={{ perspective: 800 }}
    >
      {/* Glow base */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-60",
          sizes.blur
        )}
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(124,58,237,0.3) 60%, transparent 100%)",
        }}
      />

      {/* Glass container */}
      <div
        className="absolute inset-0 rounded-xl glass-strong"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(124,58,237,0.1) 50%, rgba(6,182,212,0.05) 100%)",
          border: "1px solid rgba(59,130,246,0.3)",
        }}
      />

      {/* Geometric accent line */}
      <div
        className="absolute inset-0 rounded-xl overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-0 w-full h-[1px] opacity-60"
          style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.8), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[1px] opacity-30"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)" }}
        />
      </div>

      {/* SR Text */}
      <motion.span
        className={cn(
          "relative z-10 font-mono font-bold tracking-tight select-none",
          sizes.text
        )}
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, rgba(59,130,246,0.9) 50%, rgba(124,58,237,0.8) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.02em",
        }}
        animate={animated ? {
          textShadow: ["0 0 10px rgba(59,130,246,0)", "0 0 20px rgba(59,130,246,0.4)", "0 0 10px rgba(59,130,246,0)"],
        } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        SR
      </motion.span>
    </motion.div>
  );
}
