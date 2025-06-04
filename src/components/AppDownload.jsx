import AppDwn from '../assets/images/app-dwn.jpg';
import AppQR from '../assets/images/dwn-qr.jpeg';
import AppStoreBg from '../assets/images/app-store-icon.jpg';
import PlayStoreBg from '../assets/images/play-store-icon.png';


export default function AppDownload() {
  return (
    <section
      className="w-full relative bg-fixed bg-cover bg-center py-16 px-6 md:px-12"
      style={{ 
        backgroundImage: `url(${AppDwn})` 
        }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center border-l-4 border-orange-500 pl-3">
            Download Our Application Now
          </h2>
          <p className="text-gray-50 font-bold text-lg text-left">
            Discover the smarter way to manage your industrial needs on the go. Whether you're a customer or a manufacturer, our mobile app makes it easier to connect, order, and grow — anytime, anywhere.
          </p>

          <p className="w-full text-white font-bold text-2xl text-left">
            717+ Manufacturers Already Trust Us
          </p>

          <div className="flex flex-wrap gap-6">
            {/* Android */}
            <div className="relative bg-orange-500 p-4 rounded-md w-40 hover:scale-105 transition transform duration-300 shadow-lg">
              <div className="text-white text-sm absolute top-2 right-3">
                Downloads
                <br />
                <span className="text-lg font-bold">100</span>
              </div>
              <img src={AppQR} alt="Play Store QR" className="w-full h-auto"
              />
              <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-2 border-orange-500">
                <img src={AppStoreBg} alt="Play Store Icon" className="w-6 h-6" />
              </div>
            </div>

            {/* iOS */}
            <div className="relative bg-orange-500 p-4 rounded-md w-40 hover:scale-105 transition transform duration-300 shadow-lg">
              <div className="text-white text-sm absolute top-2 right-3">
                Downloads
                <br />
                <span className="text-lg font-bold">1000</span>
              </div>
              <img src={AppQR} alt="Play Store QR" className="w-full h-auto"
              />
              <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-2 border-orange-500">
                <img src={PlayStoreBg} alt="Apple Icon" className="w-6 h-6"/>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/mobile-app-mockup.png"
            alt="App Preview"
            className="w-full max-w-xs mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
