import React from "react";
import { motion } from "framer-motion";
import { education } from "../assets/assets";

const Work = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="Education"
        className="bg-dark-100 py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            My <span className="text-orange-700">Education</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            My educational journey has equipped me with the skills and mindset
            to transform ideas into impactful creations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer text-center"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.board} logo`}
                  className="w-40 h-40 mx-auto mb-4 object-contain rounded-full border border-gray-700 p-2 bg-dark-400"
                />
                <h3 className="text-xl font-semibold text-white">
                  {edu.institute}
                </h3>
                <p className="text-green-600 text-sm hover:text-amber-100 hover:text-[15px] mt-1 transition duration-30 active:font-semibold active:text-green-600">
                  <a href={edu.website} target="_blank">
                    {edu.board}
                  </a>
                </p>
                <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
