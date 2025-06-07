import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About"
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import BuyerSignup from "./pages/Buyers/BuyersSignup";
import SellerSignup from "./pages/Sellers/SellersSignup";
import ManufacturerSignup from "./pages/Manufacturers/ManufacturersSignup";
import BuyerProfile from "./pages/Buyers/ProfileSetting";
import BuyerDashboard from "./pages/Buyers/Dashboard";
import SellerProfile from "./pages/Sellers/ProfileSetting";
import SellerDashboard from "./pages/Sellers/Dashboard";
import ManufacturerProfile from "./pages/Manufacturers/ProfileSetting";
import ManufacturerDashboard from "./pages/Manufacturers/Dashboard";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />

          {/* Auth */}
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/verifyotp" element={<VerifyOTP/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />          

          {/* Buyer Modules */}
          <Route path="/signup/buyer" element={<BuyerSignup/>} />
          <Route path="/buyer-profile" element={<BuyerProfile/>} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard/>} />

          {/* Seller Modules */}
          <Route path="/signup/seller" element={<SellerSignup/>} />
          <Route path="/seller-profile" element={<SellerProfile/>} />
          <Route path="/seller-dashboard" element={<SellerDashboard/>} />

           {/* Manufacturer Modules */}
          <Route path="/signup/manufacturer" element={<ManufacturerSignup/>} />
          <Route path="/manufacturer-profile" element={<ManufacturerProfile/>} />
          <Route path="/manufacturer-dashboard" element={<ManufacturerDashboard/>} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
