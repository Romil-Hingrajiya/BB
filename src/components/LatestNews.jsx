import React from "react";

const newsData = [
  {
    title: "Steel Imports Rise Despite Global Pressure",
    description:
      "India’s steel imports continue rising amid calls for protectionist measures by domestic producers.",
    link: "#",
  },
  {
    title: "China’s Demand Slows as Inventories Build Up",
    description:
      "Steel inventories in China are piling up as demand weakens due to construction slowdowns.",
    link: "#",
  },
  {
    title: "Scrap Metal Prices See Unexpected Surge",
    description:
      "Global scrap prices surged this week as Turkish demand returned after holidays.",
    link: "#",
  },
];

const LatestNews = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="w-4 h-4 bg-orange-500 rotate-45"></span> Latest News
        </h2>
        <a
          href="#"
          className="text-orange-500 font-medium hover:underline text-sm"
        >
          View More
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white border rounded-md p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
              {news.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {news.description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={news.link}
                className="text-orange-600 font-medium hover:underline text-sm"
              >
                Read more
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 3.94a.75.75 0 010 1.34L3 17.25M21 12H12"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
