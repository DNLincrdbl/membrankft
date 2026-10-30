import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="munkatarsak" className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">Munkatársak</p>
        <h2 className="font-nav mt-4 max-w-3xl text-[clamp(2.3rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em]">
          Hat fő, több évtized.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
          Irodánkban 6 fővel végezzük mérnöki tevékenységünket. Statikus tervezőink, szakértőink több
          évtizedes tapasztalattal rendelkeznek.
        </p>

        <ul className="mt-14 border-t border-black/10">
          {team.map((person, index) => (
            <li
              key={person.name}
              className="grid items-baseline gap-2 border-b border-black/10 py-6 md:grid-cols-[4rem_1.4fr_1fr_auto] md:gap-8"
            >
              <span className="font-display text-2xl italic text-ink/35">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl tracking-[-0.04em] md:text-3xl">{person.name}</h3>
              <p className="text-ink/55">{person.roles.join(" · ")}</p>
              {person.href ? (
                <a href={person.href} className="text-ink/80 hover:text-ink md:text-right">
                  {person.phone}
                </a>
              ) : (
                <span />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
