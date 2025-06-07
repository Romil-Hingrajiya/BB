// WhatsAppAndScroll.jsx
import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const WhatsAppAndScroll = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollPercent(scrolled);
      setShowScroll(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918780670096?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-400/50 flex items-center justify-center animate-bounce ring-4 ring-green-300 hover:scale-110 transition"
        title="Chat on WhatsApp"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </a>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 rounded-full cursor-pointer bg-white text-red-500  flex items-center justify-center group"
          title="Scroll to top"
        >
          <FiArrowUp size={20} />
          <svg
            className="absolute top-0 left-0 w-full h-full transform rotate-[180deg]"
            viewBox="0 0 36 36"
          >
            {/* Background ring */}
            <path
              className="text-gray-200"
              d="M18 2
       a 16 16 0 1 1 0 32
       a 16 16 0 1 1 0 -32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            {/* Animated progress ring */}
            <path
              className="text-red-500"
              d="M18 2
       a 16 16 0 1 1 0 32
       a 16 16 0 1 1 0 -32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={100 - scrollPercent}
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default WhatsAppAndScroll;
