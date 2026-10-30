"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, company } from "@/lib/content";

export default function Footer() {
  const pathname = usePathname();

  function onSectionClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    if (pathname !== "/") return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduced ? "auto" : "smooth";
    if (id === "fooldal") window.scrollTo({ top: 0, behavior });
    else document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
    window.history.pushState(null, "", id === "fooldal" ? "/" : `/#${id}`);
  }

  return (
    <footer className="border-t border-black/10 bg-[#f3f3f1] text-ink">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 md:px-12 md:pt-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-nav text-sm font-medium tracking-[-0.02em] text-ink/45">
              Membrán Mérnöki Kft. · Tatabánya
            </p>
            <h2 className="font-nav mt-6 max-w-4xl text-[clamp(3.2rem,6.4vw,6.2rem)] font-medium leading-[0.92] tracking-[-0.045em]">
              Biztonság,
              <br />
              pontosság,
              <br />
              szakértelem.
            </h2>
          </div>
          <Image
            src="/hero/mark-outline.png"
            alt=""
            width={2098}
            height={749}
            className="h-auto w-[min(72vw,280px)] shrink-0 md:w-[min(32vw,340px)]"
          />
        </div>

        <div className="mt-20 grid gap-12 border-t border-black/10 pt-10 md:grid-cols-3">
          <nav aria-label="Lábléc menü">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">Menü</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(event) => onSectionClick(event, item.id)}
                    className="text-lg tracking-[-0.02em] text-ink/80 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#elerhetoseg"
                  onClick={(event) => onSectionClick(event, "elerhetoseg")}
                  className="text-lg tracking-[-0.02em] text-ink/80 hover:text-ink"
                >
                  Elérhetőség
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">Iroda</p>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              {company.postal}
              <br />
              {company.street}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">Kapcsolat</p>
            <ul className="mt-4 space-y-2 text-lg">
              {company.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="text-ink/80 hover:text-ink">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="text-ink hover:text-ink/60">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-6 text-[12px] tracking-[0.04em] text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2012–2026 Membrán Mérnöki Kft. Minden jog fenntartva.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="uppercase tracking-[0.18em] hover:text-ink"
          >
            Vissza a tetejére
          </button>
        </div>
      </div>
    </footer>
  );
}
