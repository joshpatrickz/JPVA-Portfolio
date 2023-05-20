import React from "react";
import Josh from "../assets/josh.JPG";
import JPVAHardware from '../assets/jpva-hardware.png'

const Hero = () => {
  return (
    <div name="home" className="w-full h-auto mx-auto text-[#404040] bg-slate-400">
      <div className="max-w-[800px] mt-16 h-auto mx-auto px-7 text-center flex flex-col justify-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
          Hi. I'm Josh.
        </h1>
        <div>
          <p className="md:text-2xl sm:text-lg text-1">
            Information Technology | Front-End Developer
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="md:w-[200px] sm:w-[150px] w-[130px] mt-10 rounded-full "
            src={Josh}
            alt="/"
          />
        </div>
      </div>
      <div className="flex justify-center w-screen bg-white">
          <img className="md:w-[800px] sm:w-[600px] w-[400px] mt-8" src={JPVAHardware} alt="/" />
        </div>
    </div>
  );
};

export default Hero;
