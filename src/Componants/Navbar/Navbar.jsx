import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 p-4 shadow-lg shadow-red-400">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Name */}
        <div className="flex items-center">
          <img src="/vite.svg" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-red-900 text-3xl font-bold">Book My Farm</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-red-900" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 text-red-900 font-medium absolute md:static bg-gray-100 w-full md:w-auto left-0 md:flex-row flex-col items-center md:items-start p-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <li><Link to="#home" className="hover:text-red-950 hover:underline decoration-red-950 underline-offset-4 block py-2 md:py-0 transform hover:scale-125">Home</Link></li>
          <li><Link to="#about" className="hover:text-red-950 hover:underline decoration-red-950 underline-offset-4 block py-2 md:py-0 transform hover:scale-125">About Us</Link></li>
          <li><Link to="#contact" className="hover:text-red-950 hover:underline decoration-red-950 underline-offset-4 block py-2 md:py-0 transform hover:scale-125">Contact Us</Link></li>
        </ul>

        {/* Button */}
        <button onClick={()=>{navigate("/Login")}} className="hidden md:block bg-red-900 text-white px-4 py-2 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 border border-red-900">
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
