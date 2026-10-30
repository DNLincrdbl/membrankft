"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Heading({
  serif,
  bold,
  boldFirst = false,
  as = "h2",
  onMount = false,
  className = "",
}: {
  serif: ReactNode;
  bold: ReactNode;
  boldFirst?: boolean;
  as?: "h1" | "h2";
  onMount?: boolean;
  className?: string;
}) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const serifLine = {
    key: "serif",
    content: serif,
    className: "font-nav font-medium tracking-[-0.03em] text-[clamp(2.6rem,6.5vw,5.2rem)]",
  };
  const boldLine = {
    key: "bold",
    content: bold,
    className: "font-nav font-medium tracking-[-0.03em] text-[clamp(2.6rem,6.5vw,5.2rem)] text-ink/55",
  };
  const lines = boldFirst ? [boldLine, serifLine] : [serifLine, boldLine];

  return (
    <Tag
      initial="hidden"
      {...(onMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.5 } })}
      className={`leading-[0.88] ${className}`}
    >
      {lines.map((line, index) => (
        <span
          key={line.key}
          className="-mb-[0.18em] -mt-[0.28em] block overflow-hidden pb-[0.22em] pt-[0.32em]"
        >
          <motion.span
            variants={{
              hidden: { y: "40%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.7, delay: index * 0.06, ease } },
            }}
            className={`block ${line.className}`}
          >
            {line.content}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
