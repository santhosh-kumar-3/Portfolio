import React, { useEffect, useState } from "react";
import downloadimg from "../assests/download.png";
import { FiDownload } from "react-icons/fi";
import logo from '../assests/sk-logo.png'

const Navbar = () => {

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 90) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }

      if (currentScrollY > scrollY && currentScrollY > 90) {
        setIsScrollingUp(false);
      } else if (currentScrollY < scrollY) {
        setIsScrollingUp(true);
      }

      setScrollY(currentScrollY);
    };  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);


  return (
    <div className={`w-full h-[70px] flex justify-between rounded-lg px-[55px] mx-auto items-center transition-transform duration-300 ease-in-out 
      ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'}  ${showShadow ? 'shadow-lg' : 'shadow-none'} font-sora sticky top-0 bg-white z-50`}>
      
      <div className="w-[70px] flex justify-center">
        <img src={logo} alt="logo" className="w-[45px] "/>
      </div>

      <div>
        <ul className="flex gap-[32px] font-semibold text-[18px]">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>
      </div>

      <div>
        <button className="flex items-center bg-black text-white text-[16px] px-4 py-2 rounded-md hover:bg-custom-neutral">
          <span className="mr-2">Resume</span>
          <FiDownload/>
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;
