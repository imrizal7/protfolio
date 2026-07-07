"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetic?: boolean;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  magnetic = false,
  external = false,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer select-none rounded-xl overflow-hidden",
    {
      "px-3 py-1.5 text-sm": size === "sm",
      "px-5 py-2.5 text-sm": size === "md",
      "px-7 py-3.5 text-base": size === "lg",
    },
    {
      "bg-brand-blue text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20": variant === "primary",
      "glass text-white hover:bg-white/10": variant === "secondary",
      "text-zinc-400 hover:text-white": variant === "ghost",
      "glass text-white border border-white/10 hover:border-white/20 hover:bg-white/8": variant === "glass",
    },
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      style={magnetic ? { x: springX, y: springY } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseStyles}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {/* Shimmer effect for primary */}
      {variant === "primary" && (
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <motion.div
            className="absolute inset-0 w-[200%] h-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          />
        </div>
      )}
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="appearance-none bg-transparent border-0 p-0">
      {content}
    </button>
  );
}
