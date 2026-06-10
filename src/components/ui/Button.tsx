"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-champagne to-soft-gold text-obsidian hover:from-soft-gold hover:to-champagne shadow-[0_0_15px_rgba(198,169,114,0.3)] hover:shadow-[0_0_25px_rgba(198,169,114,0.5)]",
    secondary:
      "bg-espresso text-champagne hover:bg-espresso/80 border border-champagne/20 hover:border-champagne/50",
    outline:
      "border border-champagne/30 text-champagne hover:bg-champagne/10",
    ghost: "text-ivory hover:text-champagne hover:bg-white/5",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg uppercase tracking-wider",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
