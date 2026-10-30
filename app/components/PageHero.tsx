import Heading from "./Heading";

export default function PageHero({
  index,
  kicker,
  serif,
  bold,
  lede,
}: {
  index: string;
  kicker: string;
  serif: string;
  bold: string;
  lede: string;
}) {
  return (
    <header className="relative overflow-hidden bg-mist pt-32 pb-20 text-ink md:pt-40 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">
          {index} — {kicker}
        </p>
        <Heading as="h1" onMount serif={serif} bold={bold} className="mt-6" />
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">{lede}</p>
      </div>
    </header>
  );
}
