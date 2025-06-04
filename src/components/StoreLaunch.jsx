import React from "react";
import BookStore from "../assets/images/store-banner.png";

function StoreLaunch() {
  return (
    <>
      <div className="relative my-20 w-full">
        <img src={BookStore} alt="Store Banner" />

        {/* Button Positioned Over Image */}
        <div className="absolute right-[20rem] bottom-[3.5rem] flex items-center justify-center z-10">
          <a
            href="/#"
            className="group bg-white hover:bg-green-500 border-2 border-green-500 hover:border-white font-semibold px-6 py-3 rounded-lg shadow-xl transition-all duration-300"
          >
            <span className="text-lg md:text-xl font-bold text-green-500 group-hover:text-white">Turn Your Idea Into a Store !</span>
          </a>
        </div>

      </div>
    </>
  );
}

export default StoreLaunch;
