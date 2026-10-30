import type { Metadata } from "next";
import SiteFrame from "../components/SiteFrame";
import PageHero from "../components/PageHero";
import References from "../components/References";
import Archive from "../components/Archive";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenciák",
  description:
    "A Membrán Mérnöki Kft. referenciái: Grundfos, Millenium lakópark, Réti úti lakópark, hidak, iskolák, ipari épületek Tatabányán és országosan.",
};

export default function ReferencesPage() {
  return (
    <SiteFrame>
      <PageHero
        index="04"
        kicker="Referenciák"
        serif="amit"
        bold="megáll"
        lede={profile}
      />
      <References linked={false} />
      <Archive />
    </SiteFrame>
  );
}
