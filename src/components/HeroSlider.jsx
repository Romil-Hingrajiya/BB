import React, { useState, useEffect } from "react";
import Banner1 from "../assets/images/app-dwn.jpg"
import Banner2 from "../assets/images/banner-01.png"
import Banner3 from "../assets/images/banner-02.webp"
import Banner4 from "../assets/images/app-dwn.jpg"

const slides = [
  {
    id: 1,
    image: Banner1,
    heading: "Big Deals Await",
    subheading: "Shop the latest trends with up to 50% off!",
  },
  {
    id: 2,
    image: Banner2,
    heading: "Style Your Life",
    subheading: "Explore the freshest styles and new arrivals.",
  },
  {
    id: 3,
    image: Banner3,
    heading: "Tech Upgrades",
    subheading: "Get the best gadgets at unbeatable prices!",
  },
  {
    id: 4,
    image: Banner4,
    heading: "Home Essentials",
    subheading: "Refresh your space with premium collections.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="w-full h-full bg-gray-900/50 flex items-center px-8 md:px-20">
              <div className="text-white max-w-xl space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">{slide.heading}</h1>
                <p className="text-lg md:text-2xl">{slide.subheading}</p>
                <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots / Pagination */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-orange-500" : "bg-white opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
