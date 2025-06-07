import React from "react";
import UserSidebarBG from "../assets/images/user-sidebar-bg.png";
import { Link, useLocation } from "react-router-dom";

function UserSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
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
            to="/buyer-dashboard"
            className={`flex py-2 px-4 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out ${
              currentPath === "/buyer-dashboard"
                ? "bg-orange-400"
                : "bg-white border-2 border-orange-500"
            }`}
          >
            <span
              className={`text-lg font-semibold flex items-center ${
                currentPath === "/buyer-dashboard"
                  ? "text-white"
                  : "text-orange-500"
              }`}
            >
              <FaTachometerAlt className="mr-2" /> Dashboard
            </span>
          </Link>

          <Link
            to="/buyer-profile"
            className={`flex py-2 px-4 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out ${
              currentPath === "/buyer-profile"
                ? "bg-orange-400"
                : "bg-white border-2 border-orange-500"
            }`}
          >
            <span
              className={`text-lg font-semibold flex items-center ${
                currentPath === "/buyer-profile"
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
    </div>
  );
}

export default UserSidebar;
