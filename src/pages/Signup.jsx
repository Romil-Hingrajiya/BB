import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuyerIcon from "../assets/images/buyer-icon-signup.png";
import SellerIcon from "../assets/images/seller-icon-signup.png";
import ManufacturerIcon from "../assets/images/manufacturer-icon-signup.png";

const Signup = () => {
  const users = [
    {
      role: "Buyer",
      img: BuyerIcon,
      path: "/signup/buyer",
    },
    {
      role: "Seller",
      img: SellerIcon,
      path: "/signup/seller",
    },
    {
      role: "Manufacturer",
      img: ManufacturerIcon,
      path: "/signup/manufacturer",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-gray-500 flex items-center justify-center mt-[6rem] md:p-6 p-4">
        <div className="bg-white shadow-inner shadow-gray-300 rounded-xl w-full p-4 md:p-6">
          <h2 className="text-3xl font-bold text-center mb-7 text-gray-800">
            Sign Up
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {users.map((user, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between p-6 bg-white border border-gray-200 shadow-inner shadow-gray-300 rounded-lg"
              >
                <h3 className="text-xl font-bold uppercase mb-4">{user.role}</h3>
                <img
                  src={user.img}
                  alt={user.role}
                  className="w-48 h-48 object-contain mb-6"
                />
                <Link
                  to={user.path}
                  className="bg-red-500 group font-medium px-6 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
                >
                  <span className="text-lg text-white font-semibold"> Sign Up <span className="ml-1">→</span> </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
