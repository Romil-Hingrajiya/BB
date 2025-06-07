import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SignupBG from "../assets/images/sign-up-bg.png";
import axios from "axios";

function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Auto focus to next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== 4) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }

    const token = localStorage.getItem("Token");
    if (!token) {
      alert("Session expired. Please login again.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend.buildbazar.in/public/api/verify-otp",
        { otp: fullOtp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.response) {
        alert("OTP verified successfully!");
        // Redirect to home or dashboard
        navigate("/");
      } else {
        alert(response?.data?.message || "Invalid OTP.");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleResend = () => {
    alert("OTP resend functionality not implemented yet.");
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-full py-5 md:py-10 mt-[5.5rem] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${SignupBG})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative bg-white rounded-xl max-w-xl mx-auto p-5 md:p-12 z-10 shadow-inner shadow-gray-300">
          <p className="text-center text-2xl font-semibold text-gray-600 mb-4">
            OTP Verification
          </p>
          <p className="text-justify text-gray-600 mb-6">
            We’ve sent a 4-digit OTP to your registered mobile/email. Please
            enter it below to verify your identity and continue.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="w-3/4 mx-auto">
              <label className="block text-center text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="w-10 h-12 border rounded text-center text-lg shadow-inner shadow-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleVerify}
              type="button"
              className="w-2/4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition block mx-auto"
            >
              Verify Now
            </button>

            <p className="text-center text-sm text-gray-600">
              Didn’t receive the OTP?{" "}
              <button
                className="text-blue-600 hover:underline font-medium"
                type="button"
                onClick={handleResend}
              >
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VerifyOTP;
