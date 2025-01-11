import React from "react";
import Purpose from "./Purpose";
import { useNavigate } from "react-router-dom";

function BookNowBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex bg-white bg-opacity-30 back mt-20 mx-11 p-3 items-center justify-between rounded-3xl shadow-md shadow-red-400 border border-gray-100">
        <button className="hidden md:block bg-gray-200 text-red-900 mx-5 px-3 py-2 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 hover:border border-red-900 shadow-md">
          Check-in Date
        </button>
        <button className="hidden md:block bg-gray-200 text-red-900 mx-5 px-3 py-2 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 hover:border border-red-900 shadow-md">
          Check-out Date
        </button>
        <Purpose />
        <button
          onClick={() => {
            navigate("/BookNow");
          }}
          className="hidden md:block bg-red-900 text-white mx-5 px-3 py-2 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 border border-red-900"
        >
          Book Now
        </button>
      </div>
    </>
  );
}

export default BookNowBar;
