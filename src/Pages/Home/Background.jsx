import React from "react";
import BookNowBar from "./BookNowBar";
import { TypeAnimation } from "react-type-animation";

const Background = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center shadow-lg"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/14716281/pexels-photo-14716281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="flex flex-col space-y-32 justify-center items-center w-full h-full bg-black bg-opacity-50">
        {/* <span className="bg-white bg-opacity-0 text-white text-3xl font-bold shadow-lg shadow-gray-50 typing">
          "Book My Farm – Escape, Explore, Experience Nature!"
        </span> */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Book My Farm – Escape, Explore, Experience Nature!",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Book My Farm – Where Your Dream Wedding Blossoms!",
            1000,
            "Book My Farm – Celebrate Birthdays, Naturally!",
            1000,
            "Book My Farm – Cherish New Beginnings in Nature!",
            1000,
            "Book My Farm – Gather, Celebrate, and Create Memories!",
            1000,            
          ]}
          wrapper="span"
          speed={50}
          className="text-white font-bold text-3xl shadow-lg shadow-gray-50"
          repeat={Infinity}
        />
        <BookNowBar />
        <div className="text-white text-center text-lg mx-20">
          <b>Book My Farm</b> offers the perfect venue for weddings,
          engagements, birthday parties, corporate events, and get-togethers.
          Experience scenic farm locations with lush greenery, elegant setups,
          and premium services. Whether it’s an intimate gathering or a grand
          celebration, we provide a seamless, unforgettable experience tailored
          to your needs. Book your dream venue today!
        </div>
      </div>
    </div>
  );
};

export default Background;
