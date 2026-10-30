import type { Metadata } from "next";
import SiteFrame from "../components/SiteFrame";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Elérhetőség",
  description:
    "Membrán Mérnöki Kft., 2800 Tatabánya, Vadász utca 65. Telefon: +36 34 312 339, +36 70 329 1146. E-mail: membran@membran-kft.hu.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        index="05"
        kicker="Elérhetőség"
        serif="Tatabánya"
        bold="Vadász 65."
        lede="Az alábbi elérhetőségeken veheti fel velünk a kapcsolatot."
      />
      <Contact />
    </SiteFrame>
  );
}
