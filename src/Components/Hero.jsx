import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-dark-100
"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/*left side content(name and description)*/}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I am <span className="text-orange-700">Sk Sahin Parvej</span>
          </h1>

          {/* 👇 Typewriter Section */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-orange-700 glow">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Engineer",
                "Web Developer",
                "UI/UX Designer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>
          <div className="flex gap-3">
            <a
              href="#Projects"
              className="px-6 py-3 bg-orange-700 rounded-lg font-medium active:bg-orange-900 hover:bg-orange-800 transition duration-300 "
            >
              View Work
            </a>
            <a
              href="#Contact"
              className="px-6 py-3 border-orange-700 border rounded-lg font-medium active:bg-orange-900 hover:bg-orange-700/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-68 h-68 md:w-84 md:h-84">
            <div className="absolute inset-0 rounded-full bg-dark-400 ">
              <motion.img
                animate={{ y: [-1, -12, -1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: easeInOut,
                }}
                src={assets.profileImg}
                alt="DP"
                className="relative inset-0 rounded-full w-68 h-68 md:h-84 md:w-84 z-10 animate-float"
              ></motion.img>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
