import Link from "next/link";
import { references } from "@/lib/content";
import Reveal from "./Reveal";

export default function References({ linked = true }: { linked?: boolean }) {
  return (
    <section id="referenciak" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">
              Fontosabb referenciák
            </p>
            <h2 className="font-nav mt-3 text-[clamp(2.3rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em]">
              Korábbi
              <span className="block">
                munkáink.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/55">
            Engedélyezési és kiviteli tervek, átalakítások, megerősítések. Ipari csarnoktól a lakóparkig.
          </p>
        </Reveal>

        <ol className="mt-14 border-t border-ink/10">
          {references.map((item, index) => (
            <Reveal
              as="li"
              key={item}
              delay={Math.min(index * 0.04, 0.28)}
              className="group grid grid-cols-[auto_1fr] gap-5 border-b border-ink/10 py-5 md:gap-10 md:py-7"
            >
              <span className="pt-1 font-display text-xl italic text-brass-ink md:text-2xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-xl leading-snug tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                {item}
              </p>
            </Reveal>
          ))}
        </ol>

        {linked ? (
          <Link
            href="/referenciak"
            className="mt-8 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] hover:text-brass-ink"
          >
            Archív képek
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
