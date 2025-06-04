import React, { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://backend.buildbazar.in/public/api/get-products");
        const json = await res.json();

        if (json.response && json.data?.products) {
          const baseUrl = json.data.imageDirUrl;
          const productList = json.data.products.map((item) => ({
            id: item.id,
            name: item.name,
            image: `${baseUrl}/${item.image}`,
          }));
          setProducts(productList);
        }
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-white w-full my-12">
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
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
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
                  <FaTools className="w-12 h-12 mb-2 bg-white text-orange-500 p-2 rounded-full" />
                  <h4 className="text-lg font-bold">{item.name}</h4>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full py-10 text-gray-500">Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
