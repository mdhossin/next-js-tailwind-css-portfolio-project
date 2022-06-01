import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-20 sm:pt-0">
          <p className="text-sm tracking-widest text-gray-600">
            Let&apos;s Build Something Together
          </p>
          <h1 className="text-3xl pt-2 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Sahadat</span>
          </h1>
          <h1 className="py-2 text-3xl text-gray-700">
            A Full Stack Developer
          </h1>
          <p className="text-gray-400 max-w-[70%] m-auto py-2 sm:py-4">
            I&apos;m a full stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building responsive front end web applications
            while learning back-end technologies.
          </p>

          <div className="flex  justify-between items-center max-w-[150px] m-auto py-4">
            <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-500">
              <AiOutlineGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
