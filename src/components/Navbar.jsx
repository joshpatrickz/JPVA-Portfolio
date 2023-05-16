import React from "react";
import { Link } from "react-scroll";
import CV from "../assets/aquino-cv.pdf";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[100px] max-w-[1240px] mx-auto px-4 text-lg text-[#404040]">
      <h1 className="w-full text-2xl font-bold m-4">JPVA.</h1>
      <ul className="hidden md:flex">
        <li className="hidden p-4 hover:scale-110 duration-200 hover:text-[#E1C340]">
          Home
        </li>
        <li className="hidden p-4 hover:scale-110 duration-200 hover:text-[#E1C340]">
          About
        </li>
        <li className="hidden p-4 hover:scale-110 duration-200 hover:text-[#E1C340]">
          Skills
        </li>
        <li className="p-4 hover:scale-100 duration-200 hover:text-[#4CD7D0] cursor-pointer">
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>

      <div className="w-[160px] text-[16px] text-white border rounded-lg hover:text-black hover:bg-[#F8EA8C] bg-[#E1C340] py-2 px-2 cursor-pointer">
        <a href={CV} download="resumeCV">
          <button>Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
