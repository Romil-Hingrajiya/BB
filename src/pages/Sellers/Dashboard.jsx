import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useLocation } from "react-router-dom";
import UserSidebarBG from "../../assets/images/user-sidebar-bg.png";
import {
  FaUser,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUpload,
} from "react-icons/fa";
import { FaClipboardList, FaBoxOpen } from "react-icons/fa";
import {
  FaUserPlus,
  FaPaperPlane,
  FaChartBar,
  FaClipboardCheck,
  FaExchangeAlt,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaRegListAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";

function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;

  const cardGroups = [
    {
      title: "Inquiries",
      cards: [
        {
          title: "New Inquiries",
          count: 0,
          icon: <FaUserPlus className="text-white text-xl" />,
          bg: "bg-blue-100",
          grid: "lg:col-span-2",
          iconBg: "bg-blue-600",
        },
        {
          title: "My Inquiries",
          count: 0,
          icon: <FaPaperPlane className="text-white text-xl" />,
          bg: "bg-green-100",
          grid: "lg:col-span-1",
          iconBg: "bg-green-600",
        },
        {
          title: "Quoted Inquiries",
          count: 0,
          icon: <FaChartBar className="text-white text-xl" />,
          bg: "bg-yellow-100",
          grid: "lg:col-span-1",
          iconBg: "bg-yellow-500",
        },
        {
          title: "PO Confirmed Inquiries",
          count: 0,
          icon: <FaClipboardCheck className="text-white text-xl" />,
          bg: "bg-yellow-100",
          grid: "lg:col-span-1",
          iconBg: "bg-yellow-500",
        },
        {
          title: "Inquiries with Credit Orders",
          count: 0,
          icon: <FaExchangeAlt className="text-white text-xl" />,
          bg: "bg-red-100",
          grid: "lg:col-span-1",
          iconBg: "bg-red-500",
        },
      ],
    },
    {
      title: "Quotations",
      cards: [
        {
          title: "All Quotations",
          count: 0,
          icon: <FaFileAlt className="text-white text-xl" />,
          bg: "bg-blue-100",
          grid: "lg:col-span-2",
          iconBg: "bg-cyan-500",
        },
        {
          title: "Quoted → PO",
          count: 0,
          icon: <FaClipboardList className="text-white text-xl" />,
          bg: "bg-green-100",
          grid: "lg:col-span-1",
          iconBg: "bg-green-600",
        },
        {
          title: "Quoted → Credit",
          count: 0,
          icon: <FaMoneyCheckAlt className="text-white text-xl" />,
          bg: "bg-red-100",
          grid: "lg:col-span-1",
          iconBg: "bg-red-500",
        },
      ],
    },
    {
      title: "Purchase Orders (PO)",
      cards: [
        {
          title: "All Purchase Orders",
          count: 0,
          icon: <FaBoxOpen className="text-white text-xl" />,
          bg: "bg-blue-100",
          grid: "lg:col-span-2",
          iconBg: "bg-blue-600",
        },
        {
          title: "PO → Credit Orders",
          count: 0,
          icon: <FaRegListAlt className="text-white text-xl" />,
          bg: "bg-yellow-100",
          grid: "lg:col-span-2",
          iconBg: "bg-yellow-500",
        },
      ],
    },
    {
      title: "Credit Orders",
      cards: [
        {
          title: "All Credit Orders",
          count: 0,
          icon: <FaMoneyBillAlt className="text-white text-xl" />,
          bg: "bg-pink-100",
          grid: "lg:col-span-4",
          iconBg: "bg-red-500",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-400 flex flex-col md:flex-row mt-[6rem]">
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
            <h2 className="text-2xl font-bold mb-6 text-left">Dashboard</h2>

            <div className="">
              {cardGroups.map((group, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl text-left font-semibold text-gray-800 mb-3">
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {group.cards.map((card, i) => (
                      <div
                        key={i}
                        className={`${card.grid} rounded-lg shadow-md flex items-center justify-between p-4 lg:py-6 ${card.bg}`}
                      >
                        <div
                          className={`rounded-full p-3 ${card.iconBg} shadow-md`}
                        >
                          {card.icon}
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-md font-medium text-gray-700">
                            {card.title}
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            {card.count}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
