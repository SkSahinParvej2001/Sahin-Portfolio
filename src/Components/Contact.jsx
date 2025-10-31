import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-orange-700"> Touch</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-2-5xl mx-auto">
          {/* contact form */}
          <div>
            <form
              action="mailto:sksahinparvej2001@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-700 hover:bg-orange-900 rounded-lg font-medium transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
          {/* contact info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-orange-700 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Location</h3>
                <p className="text-gray-400">Arambagh, West Bengal</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-orange-700 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <a
                  href="mailto:sksahinparvej2001@gmail.com"
                  className="block font-semibold mb-2 text-lg"
                >
                  Email
                </a>
                <a
                  href="mailto:sksahinparvej2001@gmail.com"
                  className="text-gray-400"
                >
                  sksahinparvej2001@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-orange-700 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <a
                  href="tel:+918918200097"
                  className="block font-semibold mb-2 text-lg"
                >
                  Phone
                </a>
                <a
                  href="mailto:sksahinparvej2001@gmail.com"
                  className="text-gray-400"
                >
                  +91 8918200097
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg mb-4 font-semibold">Follow Me</h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/SkSahinParvej2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-950/50 w-12 h-12 items-center  rounded-full justify-center flex text-white hover:text-dark-100 transition duration-300 hover:bg-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/sk-sahin-parvej-b89651329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-950/50 w-12 h-12 items-center  rounded-full justify-center flex text-cyan-500 hover:text-white transition duration-300 hover:bg-cyan-700"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/_sk_sahin_parvej/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-950/50 w-12 h-12 items-center  rounded-full justify-center flex text-pink-600 hover:text-white transition duration-300 hover:bg-pink-600"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/akhil.sribhastav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-950/50 w-12 h-12 items-center  rounded-full justify-center flex text-blue-700 hover:text-white transition duration-300 hover:bg-blue-700"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
