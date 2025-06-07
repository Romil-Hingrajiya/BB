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
import ProductSection from "../../components/ProductSection";

function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;

  const cards = [
    {
      title: "Total Orders",
      count: 0,
      icon: <FaClipboardList className="text-2xl text-orange-500" />,
    },
    {
      title: "Total Inquiry",
      count: 12,
      icon: <FaBoxOpen className="text-2xl text-orange-500" />,
    },
  ];

  const recentOrders = [
    {
      id: 1,
      productName: "Mild Steel Rod",
      identifyNumber: "MSR-001",
      size: "12mm",
      kg: 250,
      pc: 50,
      price: "₹15,000",
    },
    {
      id: 2,
      productName: "Stainless Steel Sheet",
      identifyNumber: "SSS-005",
      size: "4x8 ft",
      kg: 180,
      pc: 20,
      price: "₹22,500",
    },
    {
      id: 3,
      productName: "Galvanized Steel Coil",
      identifyNumber: "GSC-002",
      size: "1.2mm",
      kg: 320,
      pc: 10,
      price: "₹30,200",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      productName: "Mild Steel Rod",
      transactionId: "TXN-001",
      paymentType: "Cash",
      amount: 15000,
      status: "Completed",
      date: "2025-06-06",
    },
    {
      id: 2,
      productName: "Stainless Steel Sheet",
      transactionId: "TXN-002",
      paymentType: "Credit",
      amount: 22500,
      status: "Pending",
      date: "2025-06-05",
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

        {/* Main Content */}
        <div className="w-full md:w-3/4 p-10">
          <div className="bg-white shadow-inner shadow-gray-400 rounded-xl p-6 md:p-14">
            <h2 className="text-2xl font-bold mb-6 text-left">Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white rounded-xl shadow-inner shadow-gray-300 border border-gray-200 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-[1.02]"
                >
                  {/* Icon Circle */}
                  <div className="bg-blue-50 shadow-inner shadow-gray-300 border border-orange-200 p-4 rounded-full flex items-center justify-center">
                    {card.icon}
                  </div>

                  {/* Text */}
                  <div className="text-right">
                    <p className="text-sm text-gray-500 font-medium">
                      {card.title}
                    </p>
                    <p className="text-3xl font-bold text-orange-500">
                      {card.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* recent orders */}
            <h2 className="text-2xl font-bold my-6 text-left">Recent Orders</h2>
            <div className="mt-5 p-4 bg-white rounded-xl shadow-md shadow-gray-300 border border-gray-300">
              {recentOrders.length === 0 ? (
                <p className="text-gray-500 text-center py-6">
                  No recent orders.
                </p>
              ) : (
                <div className="w-full overflow-x-auto">
                  <table className="min-w-[750px] w-full table-auto border-separate border-spacing-y-4">
                    <thead>
                      <tr className="text-center text-sm text-gray-700">
                        <th className="px-4">No.</th>
                        <th className="px-4">Product</th>
                        <th className="px-4">Product ID</th>
                        <th className="px-4">Size</th>
                        <th className="px-4">KG</th>
                        <th className="px-4">PC</th>
                        <th className="px-4">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr
                          key={order.id}
                          className="bg-white shadow-inner shadow-gray-300 rounded-xl "
                        >
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {order.productName}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {order.identifyNumber}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {order.size}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {order.kg} kg
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {order.pc}
                          </td>
                          <td className="px-4 py-3 text-orange-600 font-semibold whitespace-nowrap">
                            ₹{order.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* recent transactions */}
            <h2 className="text-2xl font-bold my-6 text-left"> Recent Transactions </h2>
            <div className="mt-5 mb-10 p-4 bg-white rounded-xl shadow-md shadow-gray-300 border border-gray-300">
              {recentTransactions.length === 0 ? (
                <p className="text-gray-500 text-center py-6">
                  No recent transactions.
                </p>
              ) : (
                <div className="w-full overflow-x-auto">
                  <table className="min-w-[750px] w-full table-auto border-separate border-spacing-y-4">
                    <thead>
                      <tr className="text-center text-sm text-gray-700">
                        <th className="px-4">No.</th>
                        <th className="px-4">Product</th>
                        <th className="px-4">Transaction ID</th>
                        <th className="px-4">Payment Type</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Status</th>
                        <th className="px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((txn, index) => (
                        <tr
                          key={txn.id}
                          className="bg-white shadow-inner shadow-gray-300 rounded-xl"
                        >
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {txn.productName}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {txn.transactionId}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {txn.paymentType}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap text-orange-600 font-semibold">
                            ₹{txn.amount}
                          </td>
                          <td className="px-4 py-3 border-r-2 border-dotted border-gray-200 whitespace-nowrap">
                            {txn.status}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {txn.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* related products = product API */}
            <ProductSection />

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
