import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="absolute w-full h-[500px] flex flex-col bg-[#E1C340] shadow-xl"
    >
      <div className="md:max-w-[800px] sm:max-w-[600px] max-w-[400px] md:mt-20 sm:mt-14 mt-10 mb-10 mx-auto text-center justify-center">
        <h1 className="md:text-4xl sm:text-2xl text-xl font-bold text-white py-4">
          Hi. I'm Josh. Nice to meet you.
        </h1>
        <p className="md:text-xl sm:text-lg text-1 text-white mb-5">
          I'm a Front-End Developer building the Front-end of Websites that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </p>
        <p className="md:text-xl sm:text-lg text-1 text-white">
        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
