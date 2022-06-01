import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[74px] shadow z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 md:px-4 2xl:px-16">
        <Image
          src="/assets/sahadat-logo.png"
          width={40}
          height={40}
          alt="Sahdat"
        />

        <div>
          <ul className="hidden md:flex items-center">
            <Link href="#home">
              <a>
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </a>
            </Link>
            <Link href="#about">
              <a>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </a>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <h1>S</h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-sm shadow-gray-400  bg-slate-100 p-3  cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* <div>
              <p>Let&apos;s start togeter</p>
            </div> */}

            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <a>
                    <li onClick={handleNav} className="py-4 text-sm">
                      Home
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li onClick={handleNav} className="py-4 text-sm">
                      About
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li onClick={handleNav} className="py-4 text-sm">
                      Skills
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li onClick={handleNav} className="py-4 text-sm">
                      Projects
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li onClick={handleNav} className="py-4 text-sm">
                      Contact
                    </li>
                  </a>
                </Link>
              </ul>

              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s Connect
                </p>
                <div className="flex justify-between items-center gap-x-1 my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineGithub />
                  </div>
                  <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiFillFacebook />
                  </div>
                  <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiFillInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
