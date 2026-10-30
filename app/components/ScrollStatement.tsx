"use client";

import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useRef } from "react";
import type { Token } from "@/lib/content";

function Word({
  token,
  index,
  total,
  progress,
}: {
  token: Token;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);

  return (
    <motion.span
      style={{ opacity: reduced ? 1 : opacity }}
      className={`mr-[0.28em] inline-block ${token.strong ? "font-semibold" : ""}`}
    >
      {token.text}
    </motion.span>
  );
}

export default function ScrollStatement({
  eyebrow,
  tokens,
}: {
  eyebrow: string;
  tokens: Token[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const reveal = useTransform(scrollYProgress, [0.08, 0.9], [0, 1]);

  return (
    <section ref={ref} className="pin-section bg-paper text-ink">
      <div className="pin-sticky sticky top-0 flex min-h-svh items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">{eyebrow}</p>
          <p className="font-nav mt-8 text-[clamp(1.7rem,3.6vw,3.15rem)] font-medium leading-[1.35] tracking-[-0.03em]">
            {tokens.map((token, index) => (
              <Word key={`${token.text}-${index}`} token={token} index={index} total={tokens.length} progress={reveal} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
