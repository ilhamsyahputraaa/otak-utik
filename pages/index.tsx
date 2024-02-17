
import Footer from "@/components/general/Footer";
import HeaderNavigations from "@/components/general/HeaderNavigation";
import Companies from "@/components/home/Companies";
import DigitalBrandingTrivia from "@/components/home/DigitalBrandingTrivia";
import HeroHome from "@/components/home/HeroHome";
import KolManagement from "@/components/home/KolManagement";
import Services from "@/components/home/Services";
import Testimonies from "@/components/home/Testimonies";


export default function Home() {
  return (
    <main
      className={` `}
    >
      <HeaderNavigations />
      <HeroHome />
      <Companies />
      <DigitalBrandingTrivia />
      <KolManagement />
      <Services />
      <Testimonies />
      <Footer />
    </main>
  );
}
