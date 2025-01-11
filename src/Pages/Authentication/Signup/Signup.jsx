import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center "
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="flex flex-col space-y-32 justify-center items-center w-full h-full bg-black bg-opacity-50">
          <form
            action=""
            className="bg-white bg-opacity-30 border border-gray-400 shadow-lg shadow-red-400 rounded-3xl"
          >
            <div className="mx-3 my-3">
              <span className="mr-2 text-red-900">Full Name :</span>
              <input
                type="text"
                className="border border-gray-400 rounded-3xl text-red-900 bg-gray-200 bg-opacity-30 px-3"
              />
            </div>
            <div className="mx-3 my-3">
              <span className="mr-2 text-red-900">Contact No. :</span>
              <input
                type="number"
                className="border border-gray-400 rounded-3xl text-red-900 bg-gray-200 bg-opacity-30 px-3"
              />
            </div>
            <div className="mx-3 my-3">
              <span className="mr-2 text-red-900">Email :</span>
              <input
                type="email"
                className="border border-gray-400 rounded-3xl text-red-900 bg-gray-200 bg-opacity-30 px-3"
              />
            </div>
            <div className="mx-3 my-3">
              <span className="mr-2 text-red-900">Username :</span>
              <input
                type="text"
                className="border border-gray-400 rounded-3xl text-red-900 bg-gray-200 bg-opacity-30 px-3"
              />
            </div>
            <div className="mx-3 my-3">
              <span className="mr-2 text-red-900">Password :</span>
              <input
                type="password"
                className="border border-gray-400 rounded-3xl text-red-900 bg-gray-200 bg-opacity-30 px-3"
              />
            </div>
            <div className="mx-3 my-3">
              <span className="mr-2 text-red-900">Confirm Password :</span>
              <input
                type="password"
                className="border border-gray-400 rounded-3xl text-red-900 bg-gray-200 bg-opacity-30 px-3"
              />
            </div>
            <div className="flex items-center justify-between mb-2 ml-40">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="hidden md:block bg-red-900 bg-opacity-30 text-white px-5 py-1 rounded-3xl font-semibold hover:bg-gray-50 hover:text-red-900 border border-red-900"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
