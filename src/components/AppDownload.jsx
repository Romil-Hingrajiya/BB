export default function AppDownload() {
  return (
    <section
      className="bg-fixed bg-cover bg-center py-16 px-6 md:px-12"
      style={{ backgroundImage: "url('./src/assets/images/app-dwn.jpg')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <span className="w-3 h-3 bg-orange-500 mr-2"></span>
            Download Our Application Now
          </h2>
          <p className="text-gray-200 text-lg">We have ios & android application available</p>

          <div className="text-orange-400 font-semibold">Customer</div>
          <div className="text-4xl font-bold text-white">414</div>

          <div className="flex flex-wrap gap-6">
            {/* Android */}
            <div className="relative bg-orange-500 p-4 rounded-md w-40 hover:scale-105 transition transform duration-300 shadow-lg">
              <div className="text-white text-sm absolute top-2 right-3">Downloads<br /><span className="text-lg font-bold">100</span></div>
              <img src="/playstore-qr.png" alt="Play Store QR" className="w-full h-auto" />
              <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-2 border-orange-500">
                <img src="/playstore-icon.png" alt="Play Store Icon" className="w-6 h-6" />
              </div>
            </div>

            {/* iOS */}
            <div className="relative bg-orange-500 p-4 rounded-md w-40 hover:scale-105 transition transform duration-300 shadow-lg">
              <div className="text-white text-sm absolute top-2 right-3">Downloads<br /><span className="text-lg font-bold">1000</span></div>
              <img src="/appstore-qr.png" alt="App Store QR" className="w-full h-auto" />
              <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-2 border-orange-500">
                <img src="/apple-icon.png" alt="Apple Icon" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img src="/mobile-app-mockup.png" alt="App Preview" className="w-full max-w-xs mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
}