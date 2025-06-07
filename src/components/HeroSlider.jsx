import React, { useState, useEffect } from "react";
import { getBanners } from "../api/api"; // Adjust path if needed

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const json = await getBanners();

        if (json.response && json.data?.banner?.length) {
          const bannerData = json.data.banner.map((item, index) => ({
            id: index + 1,
            image: `${json.data.driUrl}/${item.image}`,
            heading: item.name || "Welcome!",
            subheading: "Discover great deals every day.",
          }));
          setSlides(bannerData);
        }
      } catch (error) {
        console.error("Failed to load banners:", error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  if (slides.length === 0) {
    return <div className="h-screen w-full flex items-center justify-center text-gray-500">Loading banners...</div>;
  }

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
