import React from "react";
import {
  FaUser,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUpload,
} from "react-icons/fa";
import { GrEmergency } from "react-icons/gr";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebarBG from "../../assets/images/user-sidebar-bg.png";
import { Link, useLocation } from "react-router-dom";

const ProfileSetting = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <Navbar />
      <div className="bg-yellow-400 mt-[6rem] flex items-center justify-center border border-yellow-300 text-yellow-800 p-4 rounded text-sm">
        <GrEmergency className="mr-4" /> Please
        <a href="#">
          <span className="font-semibold text-yellow-900">
            {" "}
            &nbsp; complete your profile &nbsp;{" "}
          </span>
        </a>
        to enable all features.
      </div>

      <div className="min-h-screen bg-gray-400 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div
          className="bg-gray-900 rounded-2xl shadow-inner shadow-gray-300 w-full mx-auto md:w-80 m-4 h-full p-6 md:py-16 md:sticky md:my-10 md:top-[6.5rem] border border-gray-50 transition-all duration-300 ease-in-out bg-center bg-contain bg-fixed"
          style={{
            backgroundImage: `url(${UserSidebarBG})`,
          }}
        >
          <div className="flex flex-col justify-center items-center space-y-4 mb-5 md:mb-10">
            <div>
              <img
                src="https://i.pravatar.cc/300"
                alt="User"
                className="w-40 h-40 rounded-full shadow-md shadow-gray-50"
              />
            </div>
            <div>
              <p className="text-xl font-bold text-center text-white">Romil</p>
            </div>
          </div>
          <nav className="space-y-4">
            <Link
              to="/seller-dashboard"
              className={`flex py-2 px-4 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out ${
                currentPath === "/seller-dashboard"
                  ? "bg-orange-400"
                  : "bg-white border-2 border-orange-500"
              }`}
            >
              <span
                className={`text-lg font-semibold flex items-center ${
                  currentPath === "/seller-dashboard"
                    ? "text-white"
                    : "text-orange-500"
                }`}
              >
                <FaTachometerAlt className="mr-2" /> Dashboard
              </span>
            </Link>

            <Link
              to="/seller-profile"
              className={`flex py-2 px-4 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out ${
                currentPath === "/seller-profile"
                  ? "bg-orange-400"
                  : "bg-white border-2 border-orange-500"
              }`}
            >
              <span
                className={`text-lg font-semibold flex items-center ${
                  currentPath === "/seller-profile"
                    ? "text-white"
                    : "text-orange-500"
                }`}
              >
                <FaUser className="mr-2" /> Account
              </span>
            </Link>

            <Link
              to="/logout"
              className={`flex py-2 px-4 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out ${
                currentPath === "/logout"
                  ? "bg-orange-400"
                  : "bg-white border-2 border-orange-500"
              }`}
            >
              <span
                className={`text-lg font-semibold flex items-center ${
                  currentPath === "/logout" ? "text-white" : "text-orange-500"
                }`}
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </span>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 p-10">
          <div className="bg-white shadow-inner shadow-gray-400 rounded-xl p-6 md:p-14">
            <h2 className="text-2xl font-bold mb-6 text-left">
              Account Settings
            </h2>

            {/* Profile Picture */}
            <div className="mb-6 border-t border-t-gray-300 pt-6">
              <label className="block text-gray-700 text-xl text-left font-bold mb-2">
                Profile Picture
              </label>
              <div className="flex items-center space-x-4 my-4">
                <img
                  src="https://i.pravatar.cc/150"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  <FaUpload className="mr-2" /> Upload
                </button>
              </div>
              <p className="text-sm text-left text-gray-500 mt-1">
                *Image size should be at least 250px (bigger) and less than
                500kb. Allowed files: .png and .jpg
              </p>
            </div>

            {/* General Info */}
            <div className="border-t border-t-gray-300 pt-6 mt-6">
              <h3 className="text-xl text-left font-bold text-gray-700 mb-4">
                General Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8">
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">Name</label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name Here.."
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    User Name
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="text"
                      placeholder="Your User Name"
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">Email</label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    Mobile Number
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="tel"
                      placeholder="Your Number"
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">Gender</label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 mb-4">
                    <select className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base p-2 py-3 rounded col-span-1 md:col-span-2 mr-4">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="border-t border-t-gray-300 pt-6 mt-6">
              <h3 className="font-bold text-xl text-left text-gray-700 mb-4">
                Company Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    Company Name
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name Here.."
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    Business Type
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 mb-4">
                    <select className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base p-2 py-3 rounded col-span-1 md:col-span-2 mr-4">
                      <option>Choose Your Business Type</option>
                      <option>Manufacturer - Producer</option>
                      <option>Seller - Trader</option>
                      <option>Buyer - Customer</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    Organization Type
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 mb-4">
                    <select className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base p-2 py-3 rounded col-span-1 md:col-span-2 mr-4">
                      <option>Choose Your Organization Type</option>
                      <option>Limited</option>
                      <option>LLP</option>
                      <option>Private Limited</option>
                      <option>Public Limited Company</option>
                      <option>Proprietor</option>
                    </select>
                  </div>
                </div>
                {/* <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    GST Number
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="number"
                      placeholder="Your Contact"
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div> */}
                <div className="sm:col-span-3">
                  <div className="flex flex-col items-start space-y-2">
                    <label className="text-gray-600 font-semibold">
                      Address
                    </label>
                    <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                      <input
                        type="text"
                        placeholder="Address"
                        className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base py-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="flex flex-col items-start space-y-2">
                    <label className="text-gray-600 font-semibold">
                      Country
                    </label>
                    <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 mb-4">
                      <select className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base p-2 py-3 rounded col-span-1 md:col-span-2 mr-4">
                        <option>Select Your Country</option>
                        <option>India</option>
                        <option>Russia</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Dubai</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-2">
                    <label className="text-gray-600 font-semibold">State</label>
                    <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 mb-4">
                      <select className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base p-2 py-3 rounded col-span-1 md:col-span-2 mr-4">
                        <option>Select Country First</option>
                        <option>Gujarat</option>
                        <option>Maharashtra</option>
                        <option>J & K</option>
                        <option>Punjab</option>
                        <option>UK</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-2">
                    <label className="text-gray-600 font-semibold">City</label>
                    <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 mb-4">
                      <select className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base p-2 py-3 rounded col-span-1 md:col-span-2 mr-4">
                        <option>Select State First</option>
                        <option>Junagadh</option>
                        <option>Ahmedabad</option>
                        <option>Morbi</option>
                        <option>Surat</option>
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col items-start space-y-2">
                      <label className="text-gray-600 font-semibold">
                        Postal Code
                      </label>
                      <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                        <input
                          type="text"
                          placeholder="Enter your postal code"
                          className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    Alternate No.
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="text"
                      placeholder="Enter your alternate no."
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    PAN Number
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="text"
                      placeholder="Enter your alternate no."
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <label className="text-gray-600 font-semibold">
                    GST Number
                  </label>
                  <div className="w-full flex items-center bg-white/95 text-black rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                    <input
                      type="text"
                      placeholder="Enter your alternate no."
                      className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end mt-6 space-x-4">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Cancel
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileSetting;
