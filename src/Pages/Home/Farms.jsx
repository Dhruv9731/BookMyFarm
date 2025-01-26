import FarmCard from "../../Componants/Card/FarmCard";
import React from "react";

function Farms() {
  return (
    <>
      <div className="flex flex-col items-center justify-between mt-6 z-0">
        <span className="text-red-900 underline underline-offset-4 text-2xl">
          Our Properties
        </span>
        <div className="flex flex-row justify-between mx-20 mt-10 mb-6 overflow-hidden">
          <div className="mx-5 my-6">
            <FarmCard
              imgpath={"https://res.cloudinary.com/dep6spxel/image/upload/v1737896625/unity-shangar_fjkbje.jpg"}
              name={"Ratan Farm"}
              content={
                "Ratan Farm is a perfect wedding and event destination, offering serene natural beauty, elegant spaces, and unforgettable celebrations."
              }
            />
          </div>
          <div className="mx-5 my-6">
            <FarmCard
              imgpath={"https://res.cloudinary.com/dep6spxel/image/upload/v1737896615/unity-prasang_qv0xcc.jpg"}
              name={"Unity One"}
              content={
                "Unity Shangar offers a picturesque venue for weddings, events, and birthday parties, creating unforgettable memories in a serene setting."
              }
            />
          </div>
          <div className="mx-5 my-6">
            <FarmCard
              imgpath={"https://res.cloudinary.com/dep6spxel/image/upload/v1737896582/ratan_i5z9fr.jpg"}
              name={"Unity Two"}
              content={
                "Unity Prasang is a perfect venue for weddings, birthday parties, and baby showers, offering a beautiful, serene setting."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Farms;
