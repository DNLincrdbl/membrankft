"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function KineticBand({
  top,
  bottom,
}: {
  top: string;
  bottom: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);

  return (
    <section ref={ref} aria-hidden className="overflow-hidden bg-mist py-10 text-ink md:py-16">
      <motion.p
        style={{ x: left }}
        className="whitespace-nowrap font-display text-[15vw] italic leading-none tracking-[-0.04em] md:text-[9vw]"
      >
        {top.repeat(4)}
      </motion.p>
      <motion.p
        style={{ x: right }}
        className="text-outline mt-2 whitespace-nowrap text-[13vw] font-black uppercase leading-none tracking-[-0.055em] md:text-[8vw]"
      >
        {bottom.repeat(4)}
      </motion.p>
    </section>
  );
}
