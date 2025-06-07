import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import SignupBG from "../assets/images/sign-up-bg.png";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const { title, role } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    gst_number: "",
    email: "",
    mobile_no: "",
    password: "",
    type: role,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailOnBlur = () => {
    const email = formData.email;
    console.log("email change");
    console.log("email", email);

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
    //   try {
    //   console.log("formData", formData);
    //   const response = await axios.post(
    //     "https://backend.buildbazar.in/public/api/create-user",
    //     formData
    //   );
    //   console.log("Signup successful:", response.data);
    // } catch (error) {
    //   console.error("OTP:", error);
    // }
    } else {
      console.log("Invalid email format");
      // show error message or set error state
    }
  };

  const signUpClick = async (event) => {
    event.preventDefault();

    if (!agree) {
      alert("Please accept the Terms and Conditions");
      return;
    }

    try {
      console.log("formData", formData);
      const response = await axios.post(
        "https://backend.buildbazar.in/public/api/create-user",
        formData
      );

      console.log("Signup successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Check console for details.");
    }

  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-full py-5 md:py-10 mt-[5.5rem] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${SignupBG})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative bg-white rounded-xl max-w-xl mx-auto p-5 md:p-12 z-10 shadow-inner shadow-gray-300">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            {title}
          </h2>

          <form className="space-y-6" onSubmit={signUpClick}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring shadow-inner shadow-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  GST No
                </label>
                <input
                  type="text"
                  name="gst_number"
                  value={formData.gst_number}
                  onChange={handleChange}
                  required
                  placeholder="Enter your GST No"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring shadow-inner shadow-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Person Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring shadow-inner shadow-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleEmailOnBlur}
                required
                placeholder="johndoe@example.com"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring shadow-inner shadow-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Mobile Number
              </label>
              <div className="flex items-center border rounded shadow-inner shadow-gray-300">
                <span className="px-3 bg-white border-r text-gray-700 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  required
                  placeholder="1234567890"
                  className="flex-1 px-4 py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="***********"
                  className="w-full px-4 py-2 border rounded pr-10 focus:outline-none focus:ring shadow-inner shadow-gray-300"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree with{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-red-600 font-medium hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupForm;
