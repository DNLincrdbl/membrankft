"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  as = "div",
  delay = 0,
  y = 22,
  className,
  children,
}: {
  as?: "div" | "li" | "article";
  delay?: number;
  y?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  const Tag = as === "li" ? motion.li : as === "article" ? motion.article : motion.div;

  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduced ? { duration: 0 } : { duration: 0.75, delay, ease }}
    >
      {children}
    </Tag>
  );
}
