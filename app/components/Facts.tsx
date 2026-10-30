import Reveal from "./Reveal";

const facts = [
  ["1990", "Alapítva"],
  ["6 fő", "Az irodában"],
  ["2002", "ISO 9001"],
  ["Tatabánya", "Vadász utca 65."],
];

export default function Facts() {
  return (
    <section className="border-y border-black/10 bg-white text-ink">
      <dl className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {facts.map(([value, label], index) => (
          <Reveal
            key={label}
            delay={index * 0.08}
            className={`flex flex-col px-6 py-8 md:px-10 md:py-10 ${
              index % 2 === 1 ? "border-l border-black/10" : ""
            } ${index >= 2 ? "border-t border-black/10 md:border-t-0" : ""} ${
              index > 0 ? "md:border-l" : ""
            }`}
          >
            <dd className="order-1 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.045em]">
              {value}
            </dd>
            <dt className="order-2 mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
              {label}
            </dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
