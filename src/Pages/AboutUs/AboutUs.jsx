import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import { Phone, Mail } from "lucide-react";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col bg-red-900 text-white overflow-hidden">
        <div className="flex bg-red-900 text-white mt-5 justify-between overflow-hidden px-7">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Legal Inforamation</h3>
            <Link to="#" className="transform hover:scale-110">
              Privacy Policy
            </Link>
            <Link to="#" className="transform hover:scale-110">
              Terms & Conditions
            </Link>
            <Link to="#" className="transform hover:scale-110">
              Refund & Cansellaiton Policy
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Navigation Links</h3>
            <Link to="#" className="transform hover:scale-110">
              Home
            </Link>
            <Link to="#" className="transform hover:scale-110">
              Farms
            </Link>
            <Link to="#" className="transform hover:scale-110">
              Gallery
            </Link>
            <Link to="#" className="transform hover:scale-110">
              Pricing & Packages
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-row items-center">
              <Phone className="w-4 h-5 mr-2" />
              <Link to="#">Mobile No.</Link>
            </div>
            <div className="flex flex-row items-center">
              <Mail className="w-4 h-5 mr-2" />
              <Link to="#">Email Id</Link>
            </div>
            <SocialMedia />
          </div>
          {/* WhatsApp Newsletter Form */}
          <div className="bg-red-400 flex flex-col items-center rounded-xl px-7 ">
            <span className="text-sm">Subscribe to our</span>
            <span className="font-semibold">WhatsApp Newsletter</span>
            <div className="flex flex-col items-center justify-between mt-3">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-lg px-3 text-red-900 placeholder-red-400 border border-red-900 shadow-lg"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  placeholder="Your WhatsApp Number"
                  className="rounded-lg px-3 text-red-900 placeholder-red-400 border border-red-900 shadow-lg"
                />
              </div>
              <div className="mb-3">
                <button className="bg-red-900 text-white hover:bg-white hover:text-red-900 rounded-3xl p-2 hover:border border-red-900">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-3 px-7">
          Copyright &copy; 2025 all rights reserved by Book My Farm
        </footer>
      </div>
    </>
  );
}

export default AboutUs;
