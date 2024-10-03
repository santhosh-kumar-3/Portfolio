import React from "react";
import logo from '../assests/sk-logo-white.png'

const Footer = () => {
  return (
    <div className="h-[10vh] w-full bg-black">
      <div className="w-[85%] h-full flex justify-between mx-auto items-center">
        <img src={logo} alt="logo" className="w-[45px] " />
        <h1 className="text-white">@2024-2025 Personal</h1>
      </div>
    </div>
  );
};

export default Footer;
