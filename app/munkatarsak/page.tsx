import type { Metadata } from "next";
import SiteFrame from "../components/SiteFrame";
import PageHero from "../components/PageHero";
import Team from "../components/Team";
import Frame from "../components/Frame";

export const metadata: Metadata = {
  title: "Munkatársak",
  description:
    "A Membrán Mérnöki Kft. munkatársai: okleveles építőmérnökök, eurotervező szakmérnök, statikus tervezők és szakértők.",
};

export default function TeamPage() {
  return (
    <SiteFrame>
      <PageHero
        index="03"
        kicker="Munkatársak"
        serif="a műhely"
        bold="hat fő"
        lede="Statikus tervezőink és szakértőink több évtizedes tapasztalattal dolgoznak az irodában."
      />
      <div className="bg-mist px-6 pb-4 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2">
          <Frame
            src="/media/industrial.jpg"
            alt="Ipari épületek statikai tervezése, műszaki ellenőrzés"
            caption="Ipari épület"
            ratio="aspect-[4/3]"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
          <Frame
            src="/media/drawings.jpg"
            alt="Statikai tervezés, statikus Tatabánya"
            caption="Statikai terv"
            ratio="aspect-[4/3]"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </div>
      </div>
      <Team />
    </SiteFrame>
  );
}
