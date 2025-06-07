import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiArchive, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="">
          <img src={Logo} alt="" className="h-[70px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/">
            <span className="text-gray-700 hover:text-orange-600 font-bold uppercase">
              Home
            </span>
          </Link>
          <Link to="/product">
            <span className="text-gray-700 hover:text-orange-600 font-bold uppercase">
              Products
            </span>
          </Link>
          <Link to="/about">
            <span className="text-gray-700 hover:text-orange-600 font-bold uppercase">
              About Us
            </span>
          </Link>
          <Link to="/contact">
            <span className="text-gray-700 hover:text-orange-600 font-bold uppercase">
              Contact Us
            </span>
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden justify-end sm:flex sm:space-x-4 lg:pr-0">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-md bg-red-500 hover:bg-red-600 px-6 py-3 flex justify-center items-center space-x-3"
            >
              <FiUsers className="text-white" />
              <span className="text-white font-bold">Logout</span>
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 flex justify-center items-center space-x-3"
              >
                <FiArchive className="text-white" />
                <span className="text-white font-bold">Buy / Sell</span>
              </Link>

              <Link
                to="/login"
                className="rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-3 flex justify-center items-center space-x-3"
              >
                <FiUsers className="text-white" />
                <span className="text-white font-bold">Login</span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden min-h-[100vh] bg-white border-t border-gray-200 px-4 pt-2 pb-4">
          <nav className="flex flex-col space-y-2">
            <a
              href="/"
              onClick={toggleNav}
              className="text-gray-700 hover:text-orange-600"
            >
              Home
            </a>
            <a
              href="/shop"
              onClick={toggleNav}
              className="text-gray-700 hover:text-orange-600"
            >
              Shop
            </a>
            <a
              href="/about"
              onClick={toggleNav}
              className="text-gray-700 hover:text-orange-600"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={toggleNav}
              className="text-gray-700 hover:text-orange-600"
            >
              Contact
            </a>

            <div className="flex space-x-4 pt-2 border-t border-gray-100 mt-2">
              <a
                href="/cart"
                onClick={toggleNav}
                className="text-gray-700 hover:text-orange-600 flex items-center"
              ></a>
              <a
                href="/login"
                onClick={toggleNav}
                className="text-gray-700 hover:text-orange-600 flex items-center"
              ></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
