import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SignupBG from "../assets/images/sign-up-bg.png";
import axios from "axios";

function ForgotPassword() {
  const [step, setStep] = useState("input"); // "input" or "otp"
  const [input, setInput] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!input) {
      alert("Please enter your email or mobile number.");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend.buildbazar.in/public/api/forgot-password",
        { input }
      );

      if (response?.data?.response) {
        alert("OTP sent to your email/mobile.");
        const receivedToken = response.data.data.token;
        setToken(receivedToken);
        localStorage.setItem("forgotToken", receivedToken);
        localStorage.setItem("forgotInput", input);
        setStep("otp");
      } else {
        alert(response?.data?.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something went wrong.");
    }
  };

  const handleOtpChange = (value, index) => {
    if (!isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyOtp = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== 4) {
      alert("Please enter 4-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend.buildbazar.in/public/api/verify-otp",
        {
          input,
          otp: fullOtp,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.response) {
        alert("OTP verified successfully.");
        navigate("/resetpassword");
      } else {
        alert(response?.data?.message || "Invalid OTP.");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("Something went wrong.");
    }
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
            {step === "input" ? "Forgot Password" : "Verify OTP"}
          </p>

          <p className="text-justify text-gray-600 mb-6">
            {step === "input"
              ? "Enter your registered email or mobile to receive an OTP."
              : "We’ve sent a 4-digit OTP to your registered contact. Enter it to continue."}
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {step === "input" && (
              <div className="w-3/4 mx-auto">
                <label className="block text-left text-sm font-medium text-gray-700 mb-1">
                  Email / Mobile
                </label>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter email or mobile"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring shadow-inner shadow-gray-300"
                />

                <button
                  onClick={handleSendOtp}
                  type="button"
                  className="w-full mt-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
                >
                  Send OTP
                </button>
              </div>
            )}

            {step === "otp" && (
              <>
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
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        className="w-10 h-12 border rounded text-center text-lg shadow-inner shadow-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleVerifyOtp}
                  type="button"
                  className="w-2/4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition block mx-auto"
                >
                  Verify OTP
                </button>

                <p className="text-center text-sm text-gray-600">
                  Didn’t receive the OTP?{" "}
                  <button
                    className="text-blue-600 hover:underline font-medium"
                    type="button"
                    onClick={() => alert("Resend functionality not implemented.")}
                  >
                    Resend
                  </button>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
