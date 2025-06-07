import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api"; // adjust path if needed

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const json = await getProducts();

        if (json.response && json.data?.products) {
          const productBaseURL = json.data.productImageDirUrl;
          const categoryBaseURL = json.data.categoryIconDirUrl;

          const productList = json.data.products.map((item) => ({
            id: item.id,
            name: item.name,
            image: `${productBaseURL}/${item.image}`,
            icon: `${categoryBaseURL}/${item.category_icon}`,
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
    <section className="bg-white w-full mx-auto">
      <div className="flex justify-between items-center px-6 md:px-10 pt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          <span className="border-l-4 border-orange-500 pl-2">
            Leading Flat Products
          </span>
        </h2>
        <a href="#" className="text-orange-500 font-semibold hover:underline">
          View More
        </a>
      </div>

      <div className="overflow-x-hidden">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 m-8">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[250px] h-[225px] bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                <div className="absolute inset-0 bg-gray-900/40"></div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-4 text-center">
                  <div className="p-2 bg-gray-100 rounded-full border-4 border-orange-500 shadow-2xl shadow-gray-900">
                    <img src={item.icon} alt="icon" className="w-10 h-10" />
                  </div>
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
