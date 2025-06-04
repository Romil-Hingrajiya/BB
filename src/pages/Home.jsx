// import "./App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import HeadlineNews from "../components/HeadlineNews";
import ProductSection from "../components/ProductSection";
import ServicesSection from "../components/ServicesSection";
import BestDeals from "../components/BestDeals";
import StoreLaunch from "../components/StoreLaunch";
import LatestNews from "../components/LatestNews";
import WhatsappStore from "../components/WhatsappStore";
import PartnerBenefit from "../components/PartnerBenefit";
import AppDownload from "../components/AppDownload";
import BrandSection from "../components/BrandSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <HeadlineNews />
      <ProductSection />
      <BrandSection />
      <ServicesSection />
      <BestDeals />
      <StoreLaunch />
      <LatestNews />
      <WhatsappStore />
      <PartnerBenefit />
      <AppDownload />
      <Footer />
    </>
  );
}

export default Home;
