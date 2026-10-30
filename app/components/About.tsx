import Link from "next/link";
import Frame from "./Frame";
import { aboutParagraphs, timeline } from "@/lib/content";

export default function About({ full = false }: { full?: boolean }) {
  return (
    <section id="cegunkrol" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">Cégünkről</p>
          <h2 className="font-nav mt-4 text-[clamp(2.3rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em]">
            Iroda 1990 óta.
          </h2>
          <Frame
            src="/media/millenium.jpg"
            alt="Millenium lakópark Tatabánya, a cég statikai tervezésében"
            caption="Millenium lakópark"
            className="mt-8"
            sizes="(min-width: 1024px) 36vw, 100vw"
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5 text-lg leading-relaxed text-ink/75">
            {(full ? aboutParagraphs : aboutParagraphs.slice(0, 1)).map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <ol className="mt-12 space-y-8 border-t border-ink/10 pt-8">
            {timeline.map((item) => (
              <li key={item.year} className="grid grid-cols-[4.5rem_1fr] gap-4">
                <span className="font-display text-2xl italic text-brass-ink">{item.year}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-1 text-ink/65">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          {full ? null : (
            <Link
              href="/cegunkrol"
              className="mt-10 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] hover:text-brass-ink"
            >
              A történet
              <span aria-hidden>→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
