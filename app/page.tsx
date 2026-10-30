import SiteFrame from "./components/SiteFrame";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import ScrollStatement from "./components/ScrollStatement";
import Stories from "./components/Stories";
import Services from "./components/Services";
import References from "./components/References";
import Archive from "./components/Archive";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { manifesto } from "@/lib/content";

export default function HomePage() {
  return (
    <SiteFrame>
      <Hero />
      <Facts />
      <ScrollStatement eyebrow="Biztonság, pontosság, szakértelem" tokens={manifesto} />
      <Stories />
      <Services />
      <References />
      <Archive />
      <About />
      <Team />
      <Contact />
    </SiteFrame>
  );
}
