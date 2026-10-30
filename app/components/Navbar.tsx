"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { nav } from "@/lib/content";
import { scrollToId } from "@/lib/scroll";

const sections = ["fooldal", "cegunkrol", "tevekenyseg", "munkatarsak", "referenciak", "elerhetoseg"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const [activeId, setActiveId] = useState("fooldal");

  function onSectionClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    setOpenPath(null);
    if (pathname !== "/") return;
    event.preventDefault();
    scrollToId(id);
    window.history.pushState(null, "", id === "fooldal" ? "/" : `/#${id}`);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;
    const nodes = sections
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        const current = [...visible.entries()].sort((a, b) => a[1] - b[1])[0]?.[0];
        if (current) setActiveId((prev) => (prev === current ? prev : current));
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[60] h-px origin-left bg-ink" />
      <motion.header
        className="font-nav fixed inset-x-0 top-0 z-50"
        initial={reduced ? false : { y: "-110%" }}
        animate={{ y: 0 }}
        transition={reduced ? { duration: 0 } : { duration: 0.85, ease }}
      >
        <div
          className={`border-b border-black/10 ${open ? "bg-white" : "bg-[#f5f5f3]"}`}
        >
          <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 md:h-[4.5rem] md:px-8">
            <Link href="/" onClick={(event) => onSectionClick(event, "fooldal")} className="flex items-center gap-2.5 text-ink">
              <Image
                src="/hero/mark.png"
                alt=""
                width={2098}
                height={749}
                className="h-7 w-auto brightness-0"
              />
              <span className="text-[1.15rem] font-semibold tracking-[-0.03em]">Membrán</span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex" aria-label="Főmenü">
              {nav.map((item) => {
                const active = pathname === "/" && activeId === item.id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(event) => onSectionClick(event, item.id)}
                    className={`text-[15px] font-medium tracking-[-0.02em] transition-colors ${
                      active ? "text-ink" : "text-ink/45 hover:text-ink"
                    }`}
                    aria-current={active ? "true" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-end gap-2">
              <Link
                href="/#elerhetoseg"
                onClick={(event) => onSectionClick(event, "elerhetoseg")}
                className="rounded-md bg-ink px-3.5 py-2 text-[14px] font-medium tracking-[-0.02em] text-white transition-colors hover:bg-ink/85"
              >
                Elérhetőség
              </Link>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/15 text-ink md:hidden"
                aria-expanded={open}
                aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
                onClick={() => setOpenPath(open ? null : pathname)}
              >
                <span className="sr-only">Menü</span>
                <span className="flex w-4 flex-col gap-1.5">
                  <span className={`block h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                  <span className={`block h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white text-ink md:hidden"
          >
            <nav className="flex h-full flex-col justify-end gap-1 px-6 pb-12" aria-label="Mobil menü">
              {nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => onSectionClick(event, item.id)}
                  className="flex items-baseline gap-4 border-t border-black/10 py-3"
                >
                  <span className="font-nav text-sm font-medium text-ink/35">0{index + 1}</span>
                  <span className="font-nav text-3xl font-medium tracking-[-0.03em]">{item.label}</span>
                </Link>
              ))}
              <Link href="/#elerhetoseg" onClick={(event) => onSectionClick(event, "elerhetoseg")} className="mt-4 text-lg text-ink/60">
                Elérhetőség
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
