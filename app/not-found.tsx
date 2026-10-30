import Link from "next/link";
import SiteFrame from "./components/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame>
      <section className="flex min-h-svh flex-col justify-end bg-mist px-6 pt-32 pb-20 text-ink md:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">404</p>
        <h1 className="font-nav mt-4 text-[clamp(2.6rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em]">
          Nincs ilyen oldal.
        </h1>
        <Link href="/" className="mt-8 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink/60 hover:text-ink">
          Vissza a főoldalra →
        </Link>
      </section>
    </SiteFrame>
  );
}
