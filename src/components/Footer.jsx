import React from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="min-w-full bg-gray-900 text-white pt-24 pb-6">
      <div className="w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* 1. Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">MyShop</h2>
          <p className="mt-3 text-sm text-gray-300">
            Your one-stop shop for quality products and reliable service. Trusted by thousands.
          </p>
        </div>

        {/* 2. Company Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* 3. Products Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Products</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white">Offers</a></li>
            <li><a href="#" className="hover:text-white">Gift Cards</a></li>
          </ul>
        </div>

        {/* 4. Payments & Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Stay Connected</h3>
          <p className="text-sm text-gray-300 mb-2">We accept</p>
          <div className="flex items-center space-x-3 text-xl mb-4">
            <FaCcVisa />
            <FaCcMastercard />
            <FaPaypal />
          </div>
          <form>
            <label htmlFor="email" className="block text-sm mb-1">Subscribe to Newsletter</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-black rounded-md mb-2"
            />
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © 2025 MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
