import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 mt-5">
        {/* Left Column */}
        <div className="lg:w-1/2 w-full mx-auto p-6 border border-white bg-white">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-relaxed">
            Your One-Step Investment Platform
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            A trusted partner with 2 years of experience
          </p>
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-500">
              <p className="leading-relaxed">4.3+ App Rating</p>
              <p className="leading-relaxed">Counting+ Users</p>
              <p className="leading-relaxed">₹0* Brokerage</p>
              <p className="text-sm text-gray-400">
                *Flat ₹0 brokerage for any orders placed in the first 30 days
              </p>
            </div>

            {/* Later if you want to add QR code */}
            {/* <div className="bg-white border-0">
        <img
          src="/path-to-your-qr-code.png"
          alt="QR Code"
          className="w-24 h-24"
        />
        <p className="text-sm text-gray-500">
          Scan the QR Code to Login/Register from your mobile
        </p>
      </div> */}
          </div>
          <Link
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded btn-animated shadow-animation no-underline"
            to="./register"
          >
            Get Started
          </Link>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full mx-auto p-6 border border-black bg-white mt-5 lg:mt-0 flex flex-col">
          <h1 className="text-2xl md:text-3xl leading-relaxed text-center">
            Worried About Taxes & Brokerage?
          </h1>
          <h3 className="text-center pt-2">Calculate Your Brokerage</h3>
          <Link
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded btn-animated shadow-animation text-center mt-5 self-center no-underline"
            to="/calculate"
          >
            Click Here
          </Link>
        </div>
      </div>

      {/* Part 2 */}

      <div className="pricing-container mt-5">
        <h2 className="pricing-title text-5xl">
          TRANSPARENT PRICING. NO HIDDEN CHARGES
        </h2>
        <div className="pricing-cards mb-10">
          <div className="pricing-card  bgWhite">
            <h3 className="h3bg">₹0</h3>
            <p className="h3bg">Brokerage On Equity Delivery</p>
            <small className="h3bg">
              *Brokerage will not exceed the SEBI prescribed limit
            </small>
          </div>
          <div className="pricing-card">
            <h3 className="h3bg">₹0</h3>
            <p className="h3bg">
              Brokerage Per Order for Intraday, F&O, Currencies & Commodities
              for first 30 days
            </p>
          </div>
          <div className="pricing-card">
            <h3 className="h3bg">0%</h3>
            <p className="h3bg">Interest on MTF for first 30 days</p>
          </div>
          <div className="pricing-card">
            <h3 className="h3bg">₹0</h3>
            <p className="h3bg">
              Commission for Mutual Funds & IPO Investments
            </p>
          </div>
        </div>
        <a href="/pricing" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2
        px-4 rounded btn-animated shadow-animation no-underline p-3">
          View Pricing
        </a>
      </div>
    </div>
  );
};

export default Hero;
