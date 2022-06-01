import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen px-4 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            I have spent the last 2 years in the fire service working as a
            professional firefighter & paramedic. I have always had a knack for
            technology and working with computers. Im 2021 I started working
            with HTML & CSS to make minor edits on a small business website that
            I was operating. What I thought was just a few small edits turned
            into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fasinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies to the Shopify platform. I am
            now spending my time building projects with React Js, Firebase, and
            Learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out of my latest projects.
          </p>
        </div>
        <div className="mt-10 md:mt-0  w-full h-auto shadow-lg shadow-gray-300 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-500">
          <Image
            src="/assets/sahadat.png"
            width={350}
            height={350}
            alt="sahadat"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
