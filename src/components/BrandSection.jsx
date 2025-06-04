import React, { useState, useEffect } from "react";

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("https://backend.buildbazar.in/public/api/get-brands");
        const json = await res.json();

        if (json.response && json.data?.brand) {
          const imageBase = json.data.driUrl;
          const brandData = json.data.brand.map((item) => ({
            id: item.id,
            name: item.name,
            logo: `${imageBase}/${item.logo}`,
            image: `${json.data.driUrl}/${item.image}`,
          }));
          setBrands(brandData);
        }
      } catch (error) {
        console.error("Error loading brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-400 mt-6 py-6 px-4 md:px-10 rounded-t">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold text-lg">
          <span className="border-l-4 border-white pl-2">Explore With TOP</span> <br />
          <span className="text-3xl">BRANDS</span>
        </h3>
      </div>

      <div className="flex items-center justify-center gap-8 flex-wrap">
        {brands.length > 0 ? (
          brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain"
            />
          ))
        ) : (
          <p className="text-white">Loading brands...</p>
        )}
      </div>
    </div>
  );
};

export default BrandSection;
