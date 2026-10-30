import { company } from "@/lib/content";

export default function Contact() {
  const map = `https://www.openstreetmap.org/export/embed.html?bbox=18.368%2C47.572%2C18.410%2C47.592&layer=mapnik&marker=${company.lat}%2C${company.lng}`;

  return (
    <section id="elerhetoseg" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-ink">Elérhetőség</p>
          <h2 className="font-nav mt-4 text-[clamp(2.3rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em]">
            Keressen minket.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Az alábbi elérhetőségeken veheti fel velünk a kapcsolatot.
          </p>
          <address className="mt-10 not-italic">
            <p className="text-2xl tracking-[-0.03em] md:text-3xl">
              {company.postal}
              <br />
              {company.street}
            </p>
            <ul className="mt-8 space-y-2 text-lg">
              {company.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="hover:text-brass-ink">
                    <span className="mr-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                      {phone.label}
                    </span>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="text-xl font-medium tracking-[-0.03em] hover:text-brass-ink">
                  {company.email}
                </a>
              </li>
            </ul>
          </address>
          <a
            href={company.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex text-[12px] font-semibold uppercase tracking-[0.22em] hover:text-brass-ink"
          >
            Megnyitás térképen →
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink/5">
            <iframe
              title="Membrán Mérnöki Kft., Tatabánya, Vadász utca 65."
              src={map}
              className="h-[420px] w-full grayscale contrast-125 md:h-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
