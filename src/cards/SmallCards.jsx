import React from "react";

const SmallCards = ({ icon }) => {
  return (
      <div className="w-[52px] cursor-pointer h-[52px] flex items-center justify-center hover:text-white hover:bg-black border-2 rounded-md border-black">
        <div className="z-10 ">
          {icon}
        </div>
      </div>
  );
};

export default SmallCards;
