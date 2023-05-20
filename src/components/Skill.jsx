import React from "react";
import DesignLogo from "../assets/design-logo.png";
import DevLogo from "../assets/dev-logo.png";

const Skill = () => {
  return (
    <div className="relative w-full h-auto mt-[400px]">
      <div className="max-w-[800px] mx-auto grid md:grid-cols-2">
        <div className="w-96 mx-auto text-center border-0 shadow-lg hover:shadow-2xl duration-1000 rounded-xl px-10 py-10 mb-5 text-[#404040] bg-white">
          <div className="w-[60px] mx-auto mb-5">
            <img src={DesignLogo} alt="devlogo" />
          </div>
          <div className="mb-10 ">
            <h1 className="text-2xl font-bold">Information Technology</h1>
            <p>
              Information technology (IT) is the use of any computers, storage,
              networking and other physical devices, infrastructure and
              processes to create, process, store, secure and exchange all forms
              of electronic data.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-[#E1C340] font-bold">
              My Information Technology Skill:
            </h2>
            <p>Computer Hardware Troubleshooting</p>
            <p>Computer Software Troubleshooting</p>
            <p>Technical Support</p>
            <p>Network Troubleshooting</p>
            <p>Network Administration</p>
            <p></p>
          </div>
        </div>
        <div className="w-96 mx-auto text-center border-0 shadow-lg hover:shadow-2xl duration-1000 rounded-xl px-10 py-10 mb-5 text-[#404040] bg-white">
          <div className="w-[60px] mx-auto mb-5">
            <img src={DevLogo} alt="devlogo" />
          </div>
          <div className="mb-10 ">
            <h1 className="text-2xl font-bold">Front-End Developer</h1>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-[#E1C340] font-bold">Languages I speak:</h2>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>
          <div>
            <h2 className="text-[#E1C340] font-bold">Design Tools:</h2>
            <p>Bootstrap</p>
            <p>Bulma</p>
            <p>Tailwind CSS</p>
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
