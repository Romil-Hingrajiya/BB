import React from "react";

function Buttons() {
  return (
    <div>
      <p className="bg-red-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded flex items-center space-x-2 hover:bg-red-700 transition">
        <FaEnvelope />
        <span>Create Inquiry</span>
      </p>
      <p className="bg-red-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded flex items-center space-x-2 hover:bg-red-700 transition">
        <FaShoppingCart />
        <span>View Cart</span>
      </p>
    </div>
  );
}

export default Buttons;
