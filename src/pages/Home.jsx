import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import ProductSection from "./components/ProductSection";
import ServicesSection from "./components/ServicesSection";
import BestDeals from "./components/BestDeals";

function Home() {

  return (
    <>
      
      <Navbar />

      <HeroSlider />
      <ProductSection />
      <ServicesSection />
      <BestDeals />

      <Footer />

    </>
  );
}

export default Home;
