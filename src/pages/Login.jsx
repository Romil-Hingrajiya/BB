import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginBG from "../assets/images/login-bg.png";
import MobBG from "../assets/images/mobile-design-bg.png";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); //
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailBlur = () => {
    if (!email || email.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handlePasswordBlur = () => {
    if (!password || password.length < 6) {
      alert("Password must be at least 6 characters long.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post("https://backend.buildbazar.in/public/api/do-login", {
        email,
        password,
      });

      if (response?.data?.response) {
        const token = response.data.data.token;
        localStorage.setItem("Token", token);

        alert(response.data.message || "Login successful. Redirecting to OTP...");
        navigate("/verifyotp"); // redirect to OTP page
      } else {
        alert(response.data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-[4.5rem] md:mt-[5.5rem]">
        <div className="relative w-full overflow-hidden">
          <div
            className="relative h-full w-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${LoginBG})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="relative z-10 md:flex md:justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
              <div className="md:flex md:items-start md:justify-center w-full">
                {/* Login Form */}
                <div className="relative w-[40%] md:mb-20">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-3xl shadow-inner"></div>
                  <div className="relative z-10 p-12">
                    <h2 className="text-2xl text-white uppercase font-bold mb-4 text-center">
                      Login
                    </h2>
                    <p className="text-gray-600/75 text-center mb-4 font-semibold text-lg">
                      Explore the world of steel with BuildBazar.
                    </p>
                    <form className="flex flex-col items-center" onSubmit={handleLoginSubmit}>
                      {/* Mobile/Email Input */}
                      <div className="w-full flex items-center bg-white/95 text-black font-bold rounded-md shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 px-4 py-3 mb-4">
                        <MdOutlinePhoneAndroid className="text-lg text-gray-800 mr-0.5" />
                        <span className="text-gray-600 font-medium mr-2">+91</span>
                        <input
                          type="tel"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={handleEmailBlur}
                          placeholder="Enter Mobile Number"
                          className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                        />
                      </div>

                      {/* Password Input */}
                      <div className="w-full flex items-center bg-white/95 font-bold text-black rounded-md px-4 py-3 gap-2 shadow-inner shadow-gray-700 hover:bg-white transition-all duration-150 relative">
                        <FaLock className="text-md text-gray-800" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={handlePasswordBlur}
                          placeholder="Please Enter Password"
                          className="bg-transparent outline-none w-full placeholder:text-gray-500 text-base"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 text-xl text-gray-600"
                        >
                          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                      </div>

                      <p className="w-full text-right">
                        <Link to="/forgotpassword">
                          <span className="text-md font-semibold text-gray-100 hover:text-gray-700 transition-all duration-150">
                            Forgot Password ?
                          </span>
                        </Link>
                      </p>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="relative inline-block px-16 py-3 mt-6 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-400 active:translate-y-1 active:shadow-inner transition duration-300 ease-in-out transform"
                      >
                        <span className="relative text-white text-xl font-bold z-10">
                          Login Now
                        </span>
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-75 filter animate-pulse"></span>
                      </button>

                      <p className="w-full text-center mt-6">
                        <span className="text-md font-semibold text-gray-700">
                          Dont have an account ?
                        </span>{" "}
                        <Link to="/signup">
                          <span className="text-md font-bold text-orange-400 hover:text-gray-100 transition-all duration-150">
                            Sign Up
                          </span>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>

                {/* Map Image */}
                <div className="w-[60%] relative flex justify-center sm:justify-end">
                  <img src={MobBG} className="w-full absolute -top-20" alt="Mobile App" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
