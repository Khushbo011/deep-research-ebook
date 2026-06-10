"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  delay = 0,
  hoverEffect = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow: "0 10px 30px -10px rgba(198,169,114,0.15)",
              borderColor: "rgba(198,169,114,0.3)",
            }
          : {}
      }
      className={cn(
        "relative overflow-hidden rounded-xl bg-espresso/50 border border-border-gold p-8 glass transition-colors duration-500",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
