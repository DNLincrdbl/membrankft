"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const logoY = useTransform(scrollYProgress, [0, 0.72], ["78vh", "12vh"]);
  const houseY = useTransform(scrollYProgress, [0, 0.72], ["2vh", "16vh"]);
  const line = useTransform(scrollYProgress, [0.35, 0.72], [0, 1]);

  return (
    <section id="fooldal" ref={ref} className="hero-pin relative h-[240vh] bg-[#f3f3f1]">
      <div className="hero-sticky sticky top-0 h-svh overflow-hidden">
        <motion.div
          style={{ y: reduced ? "17vh" : logoY }}
          className="absolute inset-x-0 top-0 z-10 flex flex-col items-center px-5"
        >
          <Image
            src="/hero/mark.png"
            alt=""
            width={2098}
            height={749}
            priority
            className="h-auto w-[min(46vw,420px)] brightness-0"
          />
          <h1 className="mt-1 text-center text-[clamp(3.2rem,11vw,8.8rem)] font-black leading-[0.86] tracking-[-0.07em] text-[#1c1c1c]">
            MEMBRÁN
          </h1>
          <motion.p
            style={{ opacity: reduced ? 1 : line }}
            className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5c5c59]"
          >
            Mérnöki Kft. · Tatabánya · 1990
          </motion.p>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
          <motion.div style={{ y: reduced ? "2vh" : houseY }}>
            <Image
              src="/hero/house-base.png"
              alt="Többlakásos társasház látványképe"
              width={1653}
              height={854}
              priority
              className="h-[72vh] w-auto max-w-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
