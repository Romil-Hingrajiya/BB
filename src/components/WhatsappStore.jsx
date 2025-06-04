import React from "react";
import WAStore from "../assets/images/wa-banner.png";

function WhatsappStore() {
  return (
    <>
      <div className="relative my-20 w-full">
        <img src={WAStore} alt="Whatsapp Banner" />

        {/* Button Positioned Over Image */}
        <div className="absolute top-[25rem] left-[16rem] flex items-center justify-center z-10">
          <a
            href="/#"
            className="group hover:bg-white bg-green-500 border-2 hover:border-green-500 border-white font-semibold px-6 py-3 rounded-lg shadow-xl transition-all duration-300"
          >
            <span className="text-lg md:text-xl md:px-8 md:py-4 font-bold group-hover:text-green-500 text-white">
              Inquiry Now
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default WhatsappStore;
