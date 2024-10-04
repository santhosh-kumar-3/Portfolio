import React from "react";

const SmallCards = ({ icon, w, h }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-center hover:text-white hover:bg-black border-2 rounded-md border-black"
      style={{ width: w, height: h }} 
    >
      <div className="z-10 ">{icon}</div>
    </div>
  );
};

export default SmallCards;
