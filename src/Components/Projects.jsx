import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
const Projects = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="Projects"
        className="py-20 bg-dark-200"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-center  font-bold mb-4">
            My <span className="text-orange-700 ">Projects</span>
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-dark-400">
            A selection of my recent work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* project caard */}
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/SkSahinParvej2001"
              target="_blank"
              className="inline-flex px-6 py-3 items-center rounded-lg border-2 border-orange-700 font-medium hover:bg-orange-400/20 transition duration-300"
            >
              <span>View More Projects</span>
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
