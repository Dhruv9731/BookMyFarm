import React, { useState } from "react";

const Purpose = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 text-red-900 px-4 py-2 rounded-3xl font-semibold focus:outline-none hover:bg-gray-50 hover:border border-red-900"
      >
        Purpose
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-gray-50 border border-gray-300 rounded-md shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-red-900 cursor-pointer">
              Wedding
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-red-900 cursor-pointer">
              Engagement (Ring Ceremony)
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-red-900 cursor-pointer">
              Birthday Party
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-red-900 cursor-pointer">
              Baby Shower
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-red-900 cursor-pointer">
              Get Together
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Purpose;
