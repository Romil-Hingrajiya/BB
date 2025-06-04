import React from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/images/logo-white.png";
import FooterPayment from "../assets/images/footer-payment.png";

const Footer = () => {
  return (
    <footer className="min-w-full bg-gray-800/95 backdrop-blur-2xl text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* 1. Logo & Description */}
        <div>
          <Link to="/" className="">
            <img src={LogoWhite} alt="" className="h-[70px] text-white" />
          </Link>
          <p className="mt-3 text-md text-left font-semibold text-gray-300">
            Your one-stop shop for quality products and reliable service.
            Trusted by thousands.
          </p>
          <div className="w-full">
            <div className="mb-10 w-full">
              <h4 className="my-4 text-left text-lg font-semibold">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                <a
                  href="javascript:void(0)"
                  className="group mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 hover:bg-white border-stroke sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    className="fill-orange-600 group-hover:fill-orange-500 transition-colors duration-300"
                  >
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 hover:bg-white group"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    className="fill-orange-600 group-hover:fill-orange-500 transition-colors duration-300"
                  >
                    <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 hover:bg-white group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    className="fill-orange-600 group-hover:fill-orange-500 transition-colors duration-300"
                  >
                    <path d="M16.003 0C7.168 0 0 7.168 0 16c0 2.819 0.738 5.531 2.141 7.941L0 32l8.273-2.106A15.938 15.938 0 0 0 16.003 32c8.835 0 16.002-7.168 16.002-16S24.838 0 16.003 0zm0 29.333c-2.623 0-5.173-0.695-7.414-2.004l-0.533-0.317-4.919 1.254 1.28-4.804-0.346-0.563a13.25 13.25 0 0 1-2.003-6.9c0-7.337 5.969-13.307 13.308-13.307S29.31 8.663 29.31 16c0 7.337-5.969 13.333-13.307 13.333zM23.252 19.545c-0.364-0.182-2.157-1.064-2.494-1.186s-0.582-0.182-0.828 0.182-0.951 1.186-1.165 1.429c-0.213 0.242-0.426 0.273-0.789 0.091-0.364-0.182-1.533-0.564-2.922-1.797-1.081-0.964-1.814-2.157-2.029-2.521-0.213-0.364-0.022-0.56 0.162-0.742 0.167-0.165 0.364-0.426 0.546-0.637s0.242-0.364 0.364-0.607c0.121-0.242 0.061-0.455-0.03-0.637-0.091-0.182-0.829-1.997-1.136-2.73-0.298-0.715-0.601-0.618-0.828-0.628l-0.707-0.012c-0.242 0-0.637 0.091-0.97 0.455s-1.273 1.243-1.273 3.03 1.303 3.515 1.485 3.757c0.182 0.242 2.541 3.879 6.153 5.439 0.859 0.37 1.529 0.591 2.053 0.757 0.863 0.274 1.648 0.236 2.27 0.143 0.692-0.104 2.157-0.879 2.459-1.729s0.303-1.588 0.212-1.729c-0.091-0.137-0.334-0.213-0.698-0.395z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 hover:bg-white group"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    className="fill-orange-600 group-hover:fill-orange-500 transition-colors duration-300"
                  >
                    <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Company Links */}
        <div className="sm:pl-8 flex flex-col items-start">
          <h3 className="inline-block text-xl text-left font-semibold mb-3 pb-2.5 border-b-2 border-b-orange-600 text-white [text-shadow:_0_0_6px_rgba(255,255,255,0.25)]">
            Company
          </h3>
          <ul className="space-y-2.5 text-left pl-2 text-md text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>About Us</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>Products</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>Contact Us</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>Buy / Sell</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>Privacy Policy</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>Terms of Service</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Products Links */}
        <div className="flex flex-col items-start">
          <h3 className="inline-block text-xl text-left font-semibold mb-3 pb-2.5 border-b-2 border-b-orange-600 text-white [text-shadow:_0_0_6px_rgba(255,255,255,0.25)]">
            Products
          </h3>
          <ul className="space-y-2.5 text-left pl-2 text-md text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>ERW Rectangle Pipe</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>ERW Round Pipe</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>ERW Square Pipe</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>SS Plates</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <RiArrowRightDoubleFill /> <span>SS Rod</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* 4. Payments & Subscribe */}
        <div className="col-span-2 flex flex-col items-start">
          <h3 className="inline-block text-xl text-left font-semibold mb-3 pb-2.5 border-b-2 border-b-orange-600 text-white [text-shadow:_0_0_6px_rgba(255,255,255,0.25)]">
            Stay Connected
          </h3>
          <p className="text-sm text-left text-gray-300 mb-2">
            We accept payments through all major platforms for your convenience
            and safety. Shop with confidence using your preferred method.
          </p>
          <div className="flex items-center space-x-3 text-xl mb-4">
            <img src={FooterPayment} alt="" className="h-[90px] text-white" />
          </div>
          <form>
            <h4 className="my-2 text-left text-lg font-semibold">
              Subscribe for Exclusive Offers & News !
            </h4>
            <div className="flex justify-start items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white border-2 border-orange-500 rounded-lg p-3 md:p-4 text-gray-800 shadow-inner shadow-gray-300 focus:outline-none  focus:border-orange-600 hover:border-orange-600 transition duration-150 ease-in-out placeholder-gray-400 font-bold"
              />
              <a
                href="/#"
                className="-ml-3 rounded-md bg-orange-500 hover:bg-orange-600 px-6 py-4 flex justify-center items-center space-x-3"
              >
                <span className="text-white font-bold text-lg">Subscribe</span>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full bg-gray-300 border-t shadow-2xl shadow-gray-100 border-gray-700 py-4 mt-12">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-2">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            © 2025 <span className="font-semibold text-orange-600">Build Bazar</span>.
            All rights reserved.
          </div>

          {/* Divider for small screens */}
          <div className="w-full h-px bg-gray-400 my-2 md:hidden" />

          {/* Right: Contact & Address */}
          <div className="text-center md:text-right">
            Contact:{" "}
            <a
              href="mailto:support@myshop.com"
            >
            <span className="text-orange-600 hover:underline">support@buildbazar.in</span>
            </a>
            <br />
            Address: A-21, Amrapali Complex, Nr. CitiGold Cinema, S.P.Ring Road, Bopal, Ahmedabad, Gujarat, India.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
