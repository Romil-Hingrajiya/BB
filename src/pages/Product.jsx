import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSidebar from "../components/ProductSidebar";
import AvailableStock from "../components/AvailableStock";
import HeadlineNews from "../components/HeadlineNews";

function Product() {
  return (
    <>
      <Navbar />

      <div
        className="mt-[3.5rem] relative h-[50dvh] w-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('./src/assets/images/banner-02.webp')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Centered Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
            Our Products
          </h1>
        </div>
      </div>

      <HeadlineNews />

      <div className="w-dvw md:max-w-[90dvw] md:flex md:justify-center md:items-start my-12 mx-auto">
        <ProductSidebar />
        <AvailableStock />
      </div>

      <Footer />
    </>
  );
}

export default Product;
