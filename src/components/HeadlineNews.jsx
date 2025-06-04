import React from 'react';
import '../Style.css';

const HeadlineNews = () => {
  const headlines = [
    "Steel prices rise again amid global demand recovery.",
    "HRC exports up by 12% in Q2 2024, says report.",
    "Government to review metal trade tariffs.",
    "LohaLive introduces new advertising tools for sellers.",
    "European market reacts to raw material shortages.",
  ];

  return (
    <div className="bg-yellow-500 text-black w-full text-center flex items-center overflow-hidden relative h-12">
      <p className="bg-red-700 text-white mx-auto font-bold md:w-[10rem] h-full flex justify-center items-center">
        Latest News
      </p>
      <div className="headline-ticker-wrap">
        <div className="headline-ticker-move">
          {headlines.map((text, idx) => (
            <span key={idx} className="mx-4 whitespace-nowrap">
              {text}
              <span className="mx-2 text-gray-800">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlineNews;
