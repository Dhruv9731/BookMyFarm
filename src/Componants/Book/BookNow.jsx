import React from "react";

function BookNow() {
  return (
    <>
      <div className="flex flex-col mt-24 mb-7">
        <div className="mx-12 text-red-900 border-4 border-red-900 rounded-xl shadow-lg shadow-red-400 mb-5 overflow-hidden">
          <div className="flex flex-row my-2 mx-2">
            <span className="mr-1">Name :</span>
            <input type="text" className="border-2 border-red-900 rounded-lg" />
          </div>
          <div className="flex flex-row my-2 mx-2">
            <span className="mr-1">Mobile No. :</span>
            <input
              type="number"
              className="border-2 border-red-900 rounded-lg"
            />
          </div>
          <div className="flex flex-row my-2 mx-2">
            <span className="mr-1">From :</span>
            <input type="date" className="border-2 border-red-900 rounded-lg" />
          </div>
          <div className="flex flex-row my-2 mx-2">
            <span className="mr-1">To :</span>
            <input type="date" className="border-2 border-red-900 rounded-lg" />
          </div>
          <div className="flex flex-row my-2 mx-2">
            <span className="mr-1">Farm :</span>
            <input type="text" className="border-2 border-red-900 rounded-lg" />
          </div>
          <div className="mb-2">
            <button className="hidden md:block bg-red-900 text-white mx-2 px-3 py-1 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 border border-red-900">
              Pay Now
            </button>
          </div>
        </div>
        <div className="items-center justify-between mx-12">
          <p className="text-red-900">
            Welcome to [Your Farm Name], the perfect destination for weddings,
            birthday parties, baby showers, and get-togethers. Nestled in
            nature’s beauty, our farm offers a serene and picturesque setting
            for your special moments. Experience rustic charm, personalized
            services, and unforgettable celebrations. Book your event today and
            create lasting memories with us!
          </p>
        </div>
      </div>
    </>
  );
}

export default BookNow;
