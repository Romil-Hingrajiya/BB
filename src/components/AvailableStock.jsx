import React from "react";
import { FaEnvelope, FaShoppingCart, FaStar } from "react-icons/fa";
import { useState } from "react";
import { FiGrid } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "ERW Square Pipe",
    size: "200x200",
    weight: "1.5kg",
    image: "./src/assets/images/pr-1-square-pipe.png",
    rating: 4.5,
    price: "₹ 1099.99",
    desc: "Durable and precision-welded ERW square pipe for structural and fabrication use. Ideal for industrial and commercial applications.",
    variants: ["400x400", "600x600", "800x800"],
  },
  {
    id: 2,
    name: "SS Plates",
    size: "1200x800",
    weight: "5.5kg",
    image: "./src/assets/images/pr-3-ss-plates.png",
    rating: 4.2,
    price: "₹ 1599.99",
    desc: "High-quality stainless steel plates with excellent durability and corrosion resistance. Ideal for industrial and structural use.",
    variants: ["400x400", "600x600", "800x800"],
  },
  {
    id: 3,
    name: "ERW Round Pipe",
    size: "200x200",
    weight: "7.5kg",
    image: "./src/assets/images/pr-2-round-pipe.png",
    rating: 4.7,
    price: "₹ 2099.99",
    desc: "Durable round pipes made from high-grade steel, perfect for fluid transport and structural applications.",
    variants: ["400x400", "600x600", "800x800"],
  },
  {
    id: 4,
    name: "ERW Rectangle Pipe",
    size: "200x200",
    weight: "1.5kg",
    image: "./src/assets/images/pr-1-square-pipe.png",
    rating: 4.5,
    price: "₹ 1099.99",
    desc: "High-strength rectangular pipes designed for structural integrity and versatile fabrication uses.",
    variants: ["400x400", "600x600", "800x800"],
  },
];

const AvailableStock = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="w-full bg-white p-4 md:p-6 rounded">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h2 className="flex items-center justify-start space-x-2 text-xl md:text-xl font-bold text-gray-800 border-b-2 border-red-500">
          <span className="text-red-500"><FiGrid /></span> <span>Available Stock</span>
        </h2>
        <div className="flex space-x-2">
          <a
            href="/#"
            className="rounded-md bg-red-500 hover:bg-red-600 px-5 py-3 flex items-center space-x-2"
          >
            <FaEnvelope className="text-white" />
            <span className="text-white font-bold text-sm">Create Inquiry</span>
          </a>
          <a
            href="/#"
            className="rounded-md bg-red-500 hover:bg-red-600 px-5 py-3 flex items-center space-x-2"
          >
            <FaShoppingCart className="text-white" />
            <span className="text-white font-bold text-sm">View Cart</span>
          </a>
        </div>
      </div>

      {/* Products or Message */}
      {products.length === 0 ? (
        <p className="text-center text-red-600 font-medium">
          No products available.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-lg shadow-lg overflow-hidden group bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[450px] object-center  transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

              <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-lg text-left font-semibold text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <p className="flex justify-start items-center text-xs text-left text-gray-600 my-1">
                      <span>Size: {product.size}</span>{" "}
                      <span className="mx-2">|</span>{" "}
                      <span>Weight: {product.weight}</span>
                    </p>
                  </div>
                  <div className="inline-flex text-sm bg-amber-300/95 px-2 py-1.5 rounded-lg">
                    <div className="flex justify-center items-center text-white">
                      <FaStar className="mr-1" />
                      <span className="font-semibold">
                        {product.rating} <span className="text-xs">ratings</span>
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-justify text-xs my-2.5">
                  Durable and precision-welded ERW square pipe for structural
                  and fabrication use. Ideal for industrial and commercial
                  applications.
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-black text-shadow-lg font-bold text-lg">
                    {product.price}
                  </div>
                  <button
                    onClick={() => openModal(product)}
                    className="text-xs text-orange-500 bg-white border border-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-md"
                  >
                    Explore Variants
                  </button>
                </div>

                <div className="flex justify-evenly items-center mt-5">
                  <button
                    className="text-lg font-bold text-red-500 bg-white border border-red-600 hover:bg-red-600 hover:text-white px-5 py-1 rounded-md"
                  >
                    Inquiry
                  </button>
                  <button
                    className="flex items-center text-lg font-bold text-white bg-green-500 hover:bg-green-600 px-5 py-1 rounded-md"
                  >
                  <FaShoppingCart className="text-white mr-2.5" />
                    Add to Cart
                  </button>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Variant Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {selectedProduct.name} Variants
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {selectedProduct.variants.map((variant, index) => (
                <li key={index}>{variant}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableStock;
