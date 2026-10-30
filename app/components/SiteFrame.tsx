import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="tartalom">{children}</main>
      <Footer />
    </>
  );
}
