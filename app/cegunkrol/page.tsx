import type { Metadata } from "next";
import SiteFrame from "../components/SiteFrame";
import PageHero from "../components/PageHero";
import About from "../components/About";

export const metadata: Metadata = {
  title: "Cégünkről",
  description:
    "A Membrán Mérnöki Kft. 1990-ben alakult Tatabányán. Statikai, építőmérnöki és építészeti tervek, szakvélemények, ISO 9001 minőségirányítás.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        index="01"
        kicker="Cégünkről"
        serif="tervezőiroda"
        bold="1990 óta"
        lede="Két főből indultunk, egy panelház fogadószintjéről. Ma hatan dolgozunk a saját irodánkban, Tatabányán."
      />
      <About full />
    </SiteFrame>
  );
}
