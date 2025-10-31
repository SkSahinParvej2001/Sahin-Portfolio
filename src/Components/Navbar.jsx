import { div } from "framer-motion/client";
import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="fixed w-full z-50 bg-dark-200 backdrop-blur-sm py-4 px-8 shadow-lg">
        <div className="container mx-auto flex justify-between">
          <div>
            <a href="#Home" className="text-3xl font-bold text-white">
              SkSahin
              <span className="text-orange-700">Parvej</span>
              <div className="w-4 h-4 bg-orange-700 rounded-full"></div>
            </a>
          </div>
          <div className="hidden md:flex space-x-10 flex flex-row items-center text-[16px]">
            <a
              href="#Home"
              className="relative text-white/80 transition duration-300 hover:text-orange-700 group"
            >
              <span className="font-bold">Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#About"
              className="relative text-white/80 transition duration-300 hover:text-orange-700 group"
            >
              <span className="font-bold">About</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Skills"
              className="relative text-white/80 transition duration-300 hover:text-orange-700 group"
            >
              <span className="font-bold">Skills</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Projects"
              className="relative text-white/80 transition duration-300 hover:text-orange-700 group"
            >
              <span className="font-bold">Projects</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Education"
              className="relative text-white/80 transition duration-300 hover:text-orange-700 group"
            >
              <span className="font-bold">Education</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Contact"
              className="relative text-white/80 transition duration-300 hover:text-orange-700 group"
            >
              <span className="font-bold">Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
          </div>
          <div className="md:hidden ">
            {showMenu ? (
              <FaXmark
                onClick={() => setShowMenu(!showMenu)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setShowMenu(!showMenu)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>

        {/*Mobile Menus*/}

        {showMenu && (
          <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 justify-center items-center ">
            <a
              href="#Home"
              onClick={() => setShowMenu(!showMenu)}
              className="relative text-white/80 transition duration-100 active:text-orange-700 group"
            >
              <span className="font-bold">Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#About"
              onClick={() => setShowMenu(!showMenu)}
              className="relative text-white/80 transition duration-100 active:text-orange-700 group"
            >
              <span className="font-bold">About</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Skills"
              onClick={() => setShowMenu(!showMenu)}
              className="relative text-white/80 transition duration-100 active:text-orange-700 group"
            >
              <span className="font-bold">Skills</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Projects"
              onClick={() => setShowMenu(!showMenu)}
              className="relative text-white/80 transition duration-100 active:text-orange-700 group"
            >
              <span className="font-bold">Projects</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Education"
              onClick={() => setShowMenu(!showMenu)}
              className="relative text-white/80 transition duration-100 active:text-orange-700 group"
            >
              <span className="font-bold">Education</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
            <a
              href="#Contact"
              onClick={() => setShowMenu(!showMenu)}
              className="relative text-white/80 transition duration-100 active:text-orange-700 group"
            >
              <span className="font-bold">Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full top-5.5"></span>
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
