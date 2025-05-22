import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-orange-600">
          MyShop
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
          <a href="/shop" className="text-gray-700 hover:text-orange-600">Shop</a>
          <a href="/about" className="text-gray-700 hover:text-orange-600">About</a>
          <a href="/contact" className="text-gray-700 hover:text-orange-600">Contact</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/cart" className="text-gray-700 hover:text-orange-600">
            <FiShoppingCart size={20} />
          </a>
          <a href="/login" className="text-gray-700 hover:text-orange-600">
            <FiUser size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNav} className="md:hidden text-gray-700 focus:outline-none">
          {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4">
          <nav className="flex flex-col space-y-2">
            <a href="/" onClick={toggleNav} className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/shop" onClick={toggleNav} className="text-gray-700 hover:text-orange-600">Shop</a>
            <a href="/about" onClick={toggleNav} className="text-gray-700 hover:text-orange-600">About</a>
            <a href="/contact" onClick={toggleNav} className="text-gray-700 hover:text-orange-600">Contact</a>
            <div className="flex space-x-4 pt-2 border-t border-gray-100 mt-2">
              <a href="/cart" onClick={toggleNav} className="text-gray-700 hover:text-orange-600 flex items-center">
                <FiShoppingCart className="mr-1" /> Cart
              </a>
              <a href="/login" onClick={toggleNav} className="text-gray-700 hover:text-orange-600 flex items-center">
                <FiUser className="mr-1" /> Login
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
