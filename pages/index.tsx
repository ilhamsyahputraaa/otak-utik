
import Footer from "@/components/general/Footer";
import HeaderNavigations from "@/components/general/HeaderNavigation";
import Companies from "@/components/home/Companies";
import DigitalBrandingTrivia from "@/components/home/DigitalBrandingTrivia";
import HeroHome from "@/components/home/HeroHome";
import KolManagement from "@/components/home/KolManagement";
import Services from "@/components/home/Services";
import Testimonies from "@/components/home/Testimonies";
import Head from "next/head";


export default function Home() {
  return (
    <>
          <Head>
        <title>OtakUtik</title>
        <meta
          name="description"
          content="OtakUtik"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href=""
        />
      </Head>
    <main
      className={``}

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
    </>
  );
}
