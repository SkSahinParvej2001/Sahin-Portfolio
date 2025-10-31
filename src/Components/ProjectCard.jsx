import { span } from "framer-motion/client";
import React from "react";
const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={demo}
            target="_blank"
            className="flex-1 text-center px-4 py-2 rounded-lg font-medium hover:bg-orange-900 transition duration-300 bg-orange-700"
          >
            View Demo
          </a>
          <a
            href={code}
            target="_blank"
            className="flex flex-1 text-center px-4 py2 items-center justify-center border-orange-700 font-medium transition duration-300 hover:bg-orange-400/20 rounded-lg border-2"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
