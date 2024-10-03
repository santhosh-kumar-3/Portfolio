import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const ProjectSection = ({ index, image, title, des, url, reverse }) => {
  return (
    <div className="w-full h-[470px] flex font-sora mt-6">
      {reverse ? (
        <>
          <div className="w-1/2 h-full flex items-center">
            <div className="w-[80%] ml-[15%] ">
              <h1 className="text-[37px] font-extrabold">{index}</h1>

              <h1 className="text-[30px] font-bold pt-4">{title}</h1>

              <p className="text-[15px] font-light text-custom-neutral w-[95%] pt-4 mr-7">
                {des}
              </p>

              <IoOpenOutline size={20} className="mt-6" />
            </div>
          </div>

          <div className="w-1/2 h-full flex justify-center items-center">
            <img src={image} alt="projectImg" className="w-[530px] h-[400px]" />
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 h-full flex items-center justify-center">
            <img src={image} alt="projectImg" className="w-[530px] h-[400px]" />
          </div>

          <div className="w-1/2 h-full flex justify-center items-center">
            <div className="flex-col h-[280px] my-auto">
              <h1 className="text-[37px] font-extrabold">{index}</h1>

              <h1 className="text-[30px] font-bold pt-4">{title}</h1>

              <p className="text-[15px] font-light text-custom-neutral w-[80%] pt-4">
                {des}
              </p>

              <IoOpenOutline size={20} className="mt-6" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectSection;
