import React from "react";
import { FaTools } from "react-icons/fa";
import pr1 from '../assets/images/pr-1-square-pipe.png';
import pr2 from '../assets/images/pr-2-round-pipe.png';
import pr3 from '../assets/images/pr-3-ss-plates.png';
import pr4 from '../assets/images/pr-4-ss-rod.png';
import pr5 from '../assets/images/pr-5-erw-pipe.png';
import pr6 from '../assets/images/pr-6-erw-pipes.png';
import svg1 from '../assets/images/pr-1-svg.png';
import svg2 from '../assets/images/pr-2-svg.png';
import svg3 from '../assets/images/pr-3-svg.png';
import svg4 from '../assets/images/pr-4-svg.png';
import svg5 from '../assets/images/pr-5-svg.png';
import svg6 from '../assets/images/pr-6-svg.png';

const products = [
  { name: "MS Square Pipe", image: pr1, icon: svg1 },
  { name: "Round Pipe", image: pr2, icon: svg2 },
  { name: "SS Plates", image: pr3, icon: svg3 },
  { name: "SS Rod", image: pr4, icon: svg4 },
  { name: "ERW Round Pipe", image: pr5, icon: svg5 },
  { name: "ERW Rectangle & Square", image: pr6, icon: svg6 },
];

const brands = [
  { name: "SAIL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/SAIL_India_logo.svg/2560px-SAIL_India_logo.svg.png" },
  { name: "Jindal", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Jindal_Steel_%26_Power_logo.svg/2560px-Jindal_Steel_%26_Power_logo.svg.png" },
  { name: "SKS", logo: "https://via.placeholder.com/80x40?text=SKS" },
  { name: "MSI", logo: "https://via.placeholder.com/80x40?text=MSI" },
];

const ProductSection = () => {
  return (
    <section className="bg-white w-full">
      {/* Top Product Row */}
      <div className="flex justify-between items-center px-6 md:px-10 pt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          <span className="border-l-4 border-orange-500 pl-2">Leading Flat Products</span>
        </h2>
        <a href="#" className="text-orange-500 font-semibold hover:underline">
          View More
        </a>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-2 my-8">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="relative min-w-[225px] h-[225px] bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group mx-auto"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gray-900/40"></div>

              {/* Content on Image */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-4 text-center">
                <img src={item.icon} alt="icon" className="w-12 h-12 mb-2 bg-white p-1 rounded-full" />
                <h4 className="text-lg font-bold">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 mt-6 py-6 px-4 md:px-10 rounded-t">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-bold text-lg">
            <span className="border-l-4 border-white pl-2">Explore With TOP</span> <br />
            <span className="text-3xl">BRANDS</span>
          </h3>
          <a href="#" className="text-white font-medium hover:underline">
            View More
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {brands.map((brand, idx) => (
            <img
              key={idx}
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
