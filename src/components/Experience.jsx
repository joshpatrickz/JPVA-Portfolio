import React from "react";

const Experience = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] flex flex-col justify-center text-center mt-20">
        <div className="text-4xl mb-10">My Experience</div>
        <div className="text-[#404040] grid md:grid-cols-2 grid-cols-1 gap-5 px-10">
          <div className="text-2xl border rounded-xl shadow-md hover:shadow-2xl duration-1000 py-10 px-10 bg-white">
            Work Experience
            <div className="text-left font-bold text-[18px] mt-5">
              Computer Operator II
            </div>
            <div className="text-left text-[16px]">MWSS Regulatory Office</div>
            <div className="text-left text-[15px]">
              May 3, 2018 to August 31, 2022
            </div>
            <div className="text-[14px]">
              <ul className="text-left list-disc flex flex-col px-5 leading-normal">
                <li className="list-disc">
                  Assist the Management Information System(MIS) unit in the
                  maintenance of ICT Infrastructures.
                </li>
                <li>Perform Inventory of ICT structures.</li>
                <li>Provide technical supports to MWSS RO events.</li>
                <li>
                  Perform such other general services functions as may be
                  required.
                </li>
                <li>Perform Network Troubleshooting.</li>
                <li>Perform Website update and posting.</li>
                <li>Computer Hardware and Software Troubleshooting.</li>
              </ul>
            </div>
          </div>
          <div className="text-2xl border rounded-xl shadow-md hover:shadow-2xl duration-1000 py-10 px-10 bg-white">
            Trainings and Certificates
            <div className="leading-normal text-center  text-[15px] mt-5 border py-1 px-1 rounded-md shadow-inner">
              <span className="font-bold">
                Power of 2FA Authentication in Digital Transformation
              </span>
              <br />
              AirCUVE Network Access Authentication <br /> August 17, 2021
            </div>
            <div className="leading-normal text-center text-[15px] mt-2 border py-1 px-1 rounded-md shadow-inner">
              <span className="font-bold">
                Backup and Disaster Recovery on AWS Webinar
              </span>
              <br />
              VBusiness Software and Solution Inc. <br /> May 14, 2020
            </div>
            <div className="leading-normal text-center text-[15px] mt-2 border py-1 px-1 rounded-md shadow-inner">
              <span className="font-bold">
                Webinar on Intermediate Cybersecurity
              </span>
              <br />
              Department of Information and Communications Technology <br />
              April 29, 2020
            </div>
            <div className="leading-normal text-center text-[15px] mt-2 border py-1 px-1 rounded-md shadow-inner">
              <span className="font-bold">
                Advance Malware Awareness:
                <br />
                Your Endpoint Security Against Advanced Threats
              </span>
              <br />
              Sophos Cybersecurity <br /> September 21, 2018
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
