import type { Metadata } from "next";
import SiteFrame from "../components/SiteFrame";
import PageHero from "../components/PageHero";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Tevékenység",
  description:
    "Statikai és építészeti tervezés, engedélyezési és kiviteli tervek, szakértői vélemény, műszaki ellenőrzés, felelős műszaki vezetés.",
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero
        index="02"
        kicker="Tevékenység"
        serif="mérnöki"
        bold="tevékenység"
        lede="Engedélyezési és kiviteli tervek, meglévő építmények felülvizsgálata, és jelenlét a kivitelezésen. A tervezéstől a kulcsátadásig."
      />
      <Services narrative />
    </SiteFrame>
  );
}
