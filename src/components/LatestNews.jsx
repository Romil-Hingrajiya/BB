import React from "react";

const newsData = [
  {
    title: "India's Iron Ore Imports Expected to Rise Amid Growing Steel Demand",
    description:
      "India's steel sector is expanding rapidly, aiming to increase production capacity from 200 million to 300 million metric tons annually by 2030. This growth necessitates a higher demand for iron ore. Although India is the fourth-largest iron ore producer, its 2024–2025 output of 289 million tons falls short of the projected requirement of approximately 460 million tons. This shortfall is expected to lead to increased imports of high-grade iron ore. In the first five months of 2025, India imported 4.57 million tons of iron ore,",
    link: "https://www.reuters.com/markets/commodities/indias-iron-ore-imports-trend-higher-its-no-china-russell-2025-06-03/",
  },
  {
    title: "Skepticism Surrounds China's Steel Output Reduction Plans",
    description:
      "In March 2025, China announced plans to cut crude steel output to restructure its oversized steel sector. However, industry stakeholders express doubts about the enforcement of these plans. From January to April, Chinese crude steel output rose by 0.4%, and industry profits reached 16.9 billion yuan ($2.35 billion), a significant turnaround from a 22.2 billion yuan loss the previous year.",
    link: "https://www.reuters.com/markets/commodities/steel-industry-doubts-china-will-enforce-output-cut-plans-2025-05-28/",
  },
  {
    title: "Turkish Scrap Metal Prices Surge Amid Renewed Demand",
    description:
      "In early May 2025, Turkish scrap metal prices experienced an increase, with HMS 1&2 (80:20) scrap prices rising from $330/t to $338/t CFR between April 30 and May 6. This surge is attributed to Turkish steel mills returning to procurement after a period of inactivity. Despite this price increase, rebar producers have struggled to pass the higher scrap costs onto their quotations,",
    link: "https://gmk.center/en/news/turkish-scrap-prices-increased-by-8-t-in-early-may/",
  },
];

const LatestNews = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
          Latest News
        </h2>
        <a
          href="#"
          className="text-orange-500 font-medium hover:underline text-sm border-r-4 border-orange-500 pr-3"
        >
          View More
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#1f1f1f] via-[#2b2b2b] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 shadow-sm shadow-gray-300 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Inner glow border layer */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10"></div>

            <h3 className="text-lg font-semibold text-white mb-2 truncate">
              {news.title}
            </h3>
            <p className="text-gray-300 text-sm text-justify line-clamp-4">
              {news.description}
            </p>
            <div className="inline-flex justify-center rounded-lg items-center mt-4">
              <a href={news.link} target="_blank" >
                <span className="text-orange-400 hover:text-blue-500 font-bold text-sm transition-colors duration-150">Read more</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
