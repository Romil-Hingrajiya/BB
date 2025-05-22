import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import ProductSection from "./components/ProductSection";
import ServicesSection from "./components/ServicesSection";
import BestDeals from "./components/BestDeals";
import LatestNews from "./components/LatestNews";
import PartnerBenefit from "./components/PartnerBenefit";
import AppDownload from "./components/AppDownload";

function App() {

  return (
    <>
      
      <Navbar />

      <HeroSlider />
      <ProductSection />
      <ServicesSection />
      <BestDeals />
      <LatestNews />
      <PartnerBenefit />
      <AppDownload />

      <Footer />

    </>
  );
}

export default App;
