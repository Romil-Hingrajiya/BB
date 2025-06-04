import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";

export default function ProductSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filters, setFilters] = useState({
    keyword: "",
    brand: [],
    category: ["ERW Rectangle & Square"],
  });

  const brands = ["JINDAL", "ASPL", "SHREE"];
  const categories = [
    "ERW Rectangle Pipe",
    "ERW Square Pipe",
    "ERW Round Pipe",
    "SS Rod",
    "SS Plates",
    "MS Square Pipe",
  ];

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const list = prev[type];
      const updated = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      return { ...prev, [type]: updated };
    });
  };

  const resetFilters = () => {
    setFilters({ keyword: "", brand: [], category: [] });
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button
          className="text-xl text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:block w-full md:w-96 bg-white p-4 md:p-6 rounded shadow-sm md:shadow-none`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filter by</h2>
          <button
            onClick={resetFilters}
            className="text-red-500 text-sm hover:underline"
          >
            <span className="text-red-500 text-sm hover:underline">
              Reset Filters
            </span>
          </button>
        </div>

        {/* Keyword Search */}
        <div className="mb-6 relative p-6 rounded shadow-sm shadow-red-400"
        style={{boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.15)'}}
        >
          <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-2xl rounded shadow-inner"></div>
          <div className="relative z-10">
            <label className="flex items-center text-lg text-left font-semibold mb-4">
              <span className="text-gray-500 mr-1">
                <RiArrowRightDoubleFill />
              </span>{" "}
              Keyword
            </label>
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) =>
                setFilters({ ...filters, keyword: e.target.value })
              }
              placeholder="What are you looking for?"
              className="w-full p-2 border rounded text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6 relative p-6 rounded shadow-sm shadow-red-400">
          <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-2xl rounded shadow-inner"></div>
          <div className="relative z-10">
            <label className="text-lg text-left flex items-center font-semibold mb-4">
              <span className="text-gray-500 mr-1">
                <RiArrowRightDoubleFill />
              </span>{" "}
              Brand
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center space-x-2 text-md"
                >
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={() => toggleFilter("brand", brand)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 relative p-6 rounded shadow-sm shadow-red-400">
          <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-2xl rounded shadow-inner"></div>
          <div className="relative z-10">
            <label className="flex items-center text-lg text-left font-semibold mb-4">
              <span className="text-gray-500 mr-1">
                <RiArrowRightDoubleFill />
              </span>{" "}
              Categories
            </label>
            <div className="flex flex-col space-y-2.5">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center space-x-2 text-md"
                >
                  <input
                    type="checkbox"
                    checked={filters.category.includes(cat)}
                    onChange={() => toggleFilter("category", cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
