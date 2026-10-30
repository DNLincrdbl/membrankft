import { serviceDisclaimer, serviceGroups, serviceIntro } from "@/lib/content";

export default function Services({ narrative = false }: { narrative?: boolean }) {
  return (
    <section id="tevekenyseg" className="bg-mist text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">Tevékenység</p>
          <h2 className="font-nav mt-4 max-w-3xl text-[clamp(2.3rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em]">
            Tervezéstől a kulcsátadásig.
          </h2>

          {narrative ? (
            <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/70">
              {serviceIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">{serviceIntro[3]}</p>
          )}

          <div className="mt-16 divide-y divide-black/10 border-y border-black/10">
            {serviceGroups.map((group) => (
              <article key={group.index} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <p className="font-display text-3xl italic text-ink/35">{group.index}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{group.title}</h3>
                </div>
                <ul className="md:col-span-8 md:columns-2 md:gap-x-10">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-black/10 py-3 text-[15px] leading-snug break-inside-avoid text-ink/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/50">{serviceDisclaimer}</p>
        </div>
    </section>
  );
}
