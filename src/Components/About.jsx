import React from "react";
import { motion } from "framer-motion";
import { assets, aboutInfo } from "../assets/assets";
import "react-icons";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="About"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          About <span className="text-orange-700">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              src={assets.profileImg}
              alt="profile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-4xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate web developer building digital solutions for
                businesses. My journey started with basic HTML/CSS websites and
                evolved into creating full-stack applications using modern
                frameworks.
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, I explore new technologies and learn from
                open-source projects. I believe in continuous growth and pushing
                boundaries in web development.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className="text-yellow-400 text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
