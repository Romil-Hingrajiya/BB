import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import BestDeals from "../components/BestDeals";
import LatestNews from "../components/LatestNews";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="mt-[3.5rem]">
        <div className="relative w-full overflow-hidden">
          {/* Top Map Section */}
          <div
            className="relative h-[50dvh] w-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('./src/assets/images/contact-map-bg.png')`, // Use public asset or imported image
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Centered Text */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
                Contact Us
              </h1>
            </div>
          </div>

          {/* Background Overlay for Content */}
          <div
            className="relative backdrop-blur-sm py-20 px-4 sm:px-8 lg:px-16"
            style={{
              backgroundImage: `url('./src/assets/images/contact-bg.jpg')`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/25"></div>

            <div className="relative z-[100] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 my-20">
              {/* Left Column */}
              <div className="lg:col-span-1 space-y-4">
                <div className="relative rounded-lg p-5">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl shadow-inner"></div>
                  <div className="relative z-10 bg-white rounded-lg p-8 shadow-inner shadow-gray-300">
                    <div className="bg-orange-500 text-white inline-block px-4 py-1 rounded-t-md mb-2">
                      Registered Office
                    </div>
                    <h2 className="text-xl font-bold">
                      Build Bazar Platform Pvt. Ltd.
                    </h2>
                    <p className="text-sm my-2">
                      A-21, Amrapali Complex, Nr. CitiGold Cinema, S.P.Ring
                      Road, Bopal, Ahmedabad, Gujarat, India.
                    </p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>📞 +917567199099</li>
                      <li>📱 +91 7940401234</li>
                      <li>📧 support@buildbazar.in</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div
                  className="bg-white p-4 rounded flex flex-col items-center justify-center gap-1"
                  style={{
                    boxShadow:
                      "inset 4px 4px 5px gray, inset -2px -2px 8px gray",
                    background: "#fff",
                  }}
                >
                  <h3 className="font-bold">INQUIRY INFO</h3>
                  <p>📞 +919265305058</p>
                  <p>📞 +917567199099</p>
                </div>
                <div
                  className="bg-white p-4 rounded flex flex-col items-center justify-center gap-1"
                  style={{
                    boxShadow:
                      "inset 4px 4px 5px gray, inset -2px -2px 8px gray",
                    background: "#fff",
                  }}
                >
                  <h3 className="font-bold">PAYMENT INFO</h3>
                  <p>📞 +919313389991</p>
                  <p>📞 +919704041204</p>
                </div>
                <div
                  className="bg-white p-4 rounded flex flex-col items-center justify-center gap-1"
                  style={{
                    boxShadow:
                      "inset 4px 4px 5px gray, inset -2px -2px 8px gray",
                    background: "#fff",
                  }}
                >
                  <h3 className="font-bold">LOGISTIC SERVICES</h3>
                  <p>📞 +917226092333</p>
                  <p>📞 +919704041206</p>
                </div>
                <div
                  className="bg-white p-4 rounded flex flex-col items-center justify-center gap-1"
                  style={{
                    boxShadow:
                      "inset 4px 4px 5px gray, inset -2px -2px 8px gray",
                    background: "#fff",
                  }}
                >
                  <h3 className="font-bold">ONLINE TRAINING</h3>
                  <p>📞 +917433910910</p>
                  <p>📞 +919704041202</p>
                </div>
                <div
                  className="bg-white p-4 rounded flex flex-col items-center justify-center gap-1"
                  style={{
                    boxShadow:
                      "inset 4px 4px 5px gray, inset -2px -2px 8px gray",
                    background: "#fff",
                  }}
                >
                  <h3 className="font-bold">FINANCE DEPARTMENT</h3>
                  <p>📞 +919313389991</p>
                  <p>📞 +919704041204</p>
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Map Box */}
                <div className="w-full h-[300px] sm:h-[400px] lg:h-full rounded-3xl shadow overflow-hidden">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29376.36065267487!2d72.4834536!3d23.0221169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0b5396de45%3A0xe158c19d9cd6673a!2sCity%20Gold!5e0!3m2!1sen!2sin!4v1748879545664!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-none"
                  ></iframe>
                </div>

                {/* Contact Form */}
                <div className="relative">
                  {/* Glass blur background layer */}
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl shadow-inner"></div>

                  {/* Content on top */}
                  <div className="relative z-10 p-12">
                    <h2 className="text-2xl font-bold mb-8 text-center">
                      Reach Out to Us
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-white border-2 border-orange-500 rounded-lg p-3 md:p-4 text-gray-800 shadow-inner shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-600 hover:border-orange-600 transition duration-150 ease-in-out placeholder-gray-400 font-bold"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-white border-2 border-orange-500 rounded-lg p-3 md:p-4 text-gray-800 shadow-inner shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-600 hover:border-orange-600 transition duration-150 ease-in-out placeholder-gray-400 font-bold"
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="col-span-2 bg-white border-2 border-orange-500 rounded-lg p-3 md:p-4 text-gray-800 shadow-inner shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-600 hover:border-orange-600 transition duration-150 ease-in-out placeholder-gray-400 font-bold"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="col-span-2 bg-white border-2 border-orange-500 rounded-lg p-3 md:p-4 text-gray-800 shadow-inner shadow-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-600 hover:border-orange-600 transition duration-150 ease-in-out placeholder-gray-400 font-bold"
                      ></textarea>
                      <button
                        type="submit"
                        className="col-span-2 relative inline-block px-8 py-3 mt-4 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-400 active:translate-y-1 active:shadow-inner transition duration-300 ease-in-out transform"
                      >
                        <span className="relative text-white text-2xl font-bold z-10">
                          Drop Us a Message !
                        </span>
                        {/* Glowing effect */}
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-75 filter animate-pulse"></span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
