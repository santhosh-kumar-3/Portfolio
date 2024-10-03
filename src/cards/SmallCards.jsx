import React from "react";

const SmallCards = ({ icon,w,h }) => {
  return (
      <div className={`w-[${w}] h-[${h}] cursor-pointer flex items-center justify-center hover:text-white hover:bg-black border-2 rounded-md border-black`}>
        <div className="z-10 ">
          {icon}
        </div>
      </div>
  );
};

export default SmallCards;
