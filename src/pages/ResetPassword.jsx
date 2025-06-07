import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SignupBG from "../assets/images/sign-up-bg.png";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const input = localStorage.getItem("forgotInput");
      const token = localStorage.getItem("forgotToken");

      if (!input || !token) {
        alert("Session expired. Please try the forgot password process again.");
        navigate("/forgotpassword");
        return;
      }

      const response = await axios.post(
        "https://backend.buildbazar.in/public/api/reset-password",
        {
          input,
          password,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.response) {
        alert("Password updated successfully!");
        localStorage.removeItem("forgotInput");
        localStorage.removeItem("forgotToken");
        navigate("/login");
      } else {
        alert(response?.data?.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      alert("Something went wrong.");
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
          <p className="text-center text-2xl font-semibold text-gray-600 mb-4">
            Set a New Password
          </p>
          <p className="text-justify text-gray-600 mb-6">
            Please create a strong and secure password to protect your account.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              {/* New Password */}
              <div className="w-full relative">
                <label className="block text-left text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 pr-10 border rounded focus:outline-none focus:ring shadow-inner shadow-gray-300"
                />
                <span
                  className="absolute top-9 right-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="w-full relative">
                <label className="block text-left text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 pr-10 border rounded focus:outline-none focus:ring shadow-inner shadow-gray-300"
                />
                <span
                  className="absolute top-9 right-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-2/4 mx-auto py-2 mt-4 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
              >
                Set New Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
