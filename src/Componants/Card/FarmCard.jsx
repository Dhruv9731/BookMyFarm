import React from "react";

const FarmCard = ({ imgpath, name, content }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-red-400 overflow-hidden transform hover:scale-110">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={imgpath} alt={name} />

      {/* Content */}
      <div className="p-5">
        <h5 className="text-lg font-semibold tracking-tight text-red-900">
          {name}
        </h5>
        <p className="mt-2 text-red-900 text-sm">{content}</p>

        {/* Buttons */}
        <div className="mt-4 flex flex-row justify-between items-center">
          <button className="hidden md:block bg-red-900 text-white mx-5 px-3 py-2 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 border border-red-900">
            Book Now
          </button>
          <button className="hidden md:block bg-red-900 text-white mx-5 px-3 py-2 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 border border-red-900">
            Show Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;
