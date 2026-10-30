import Image from "next/image";
import Frame from "./Frame";
import Reveal from "./Reveal";
import { archive, clients, wideShots } from "@/lib/content";

export default function Archive() {
  return (
    <section className="bg-mist py-8 text-ink">
      <Reveal className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">Helyszínek</p>
        <h2 className="font-nav mt-3 max-w-xl text-3xl font-medium tracking-[-0.03em] md:text-4xl">
          Archív képek a munkáinkról.
        </h2>
      </Reveal>

      <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
        {wideShots.map((shot) => (
          <Frame
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            caption={shot.caption}
            ratio="aspect-[12/5]"
            className="w-[min(78vw,640px)] shrink-0"
            sizes="640px"
          />
        ))}
        {archive.map((shot) => (
          <Frame
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            caption={shot.caption}
            ratio="aspect-[4/3]"
            className="w-[min(70vw,280px)] shrink-0"
            sizes="280px"
          />
        ))}
      </div>

      <div className="mt-16 pb-12">
        <p className="mx-auto max-w-[1400px] px-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45 md:px-10">
          Megbízóink, a teljesség igénye nélkül
        </p>
        <div className="logo-mask mt-5 overflow-hidden">
          <div className="flex w-max marquee-ltr">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center py-4">
                {clients.map((client) => (
                  <li key={`${copy}-${client.src}`} className="flex items-center px-6 md:px-8">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={140}
                      height={40}
                      className="h-7 w-auto max-w-[6.5rem] object-contain opacity-80 md:h-8"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
