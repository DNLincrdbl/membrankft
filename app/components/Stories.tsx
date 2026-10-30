import Link from "next/link";
import { earthquake, opinion } from "@/lib/content";

const stories = [
  {
    index: "01",
    title: "Statikai szakvélemények",
    text: opinion,
  },
  {
    index: "02",
    title: "Földrengés utáni repedések",
    text: earthquake,
  },
];

export default function Stories() {
  return (
    <section className="bg-mist px-2 py-3 text-ink md:px-3">
      <div className="rounded-[1.75rem] bg-white md:rounded-[2.5rem]">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-16 md:grid-cols-2 md:gap-20 md:px-10 md:py-24">
        {stories.map((story) => (
          <article key={story.index}>
            <p className="font-nav text-sm font-medium tracking-[0.16em] text-ink/40">{story.index}</p>
            <h2 className="font-nav mt-3 max-w-md text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              {story.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{story.text}</p>
          </article>
        ))}
        <p className="md:col-span-2">
          <Link
            href="/tevekenyseg"
            className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink hover:text-brass-ink"
          >
            Tevékenységi kör
            <span aria-hidden>→</span>
          </Link>
        </p>
      </div>
      </div>
    </section>
  );
}
