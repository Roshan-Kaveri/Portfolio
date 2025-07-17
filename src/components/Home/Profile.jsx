import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import img from "../images/gfg.png";
import * as motion from "motion/react-client";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col h-[calc(100vh-6.5rem)] items-center justify-center px-4 text-center">
        <motion.div
          className="flex flex-col items-center justify-center text-white"
          custom={2}
          initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <div className="flex text-6xl sm:text-8xl md:text-9xl">
            <h1 className="engagement-regular text-[#5272b8]">R</h1>
            <h1 className="engagement-regular text-slate-300">K</h1>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-2">
            <span className="bg-gradient-to-r from-[#779ffc] to-[#779ffc] poppins-eb bg-clip-text text-transparent">
              Roshan Kumar.
            </span>
          </h1>
          <pre className="text-lg sm:text-lg md:text-xl max-w-md mb-2">
            Final Year Student at MIT Manipal
            <br />
            Freelance Plugin Developer
          </pre>
        </motion.div>

        <div className="text-center mb-2">
          <div className="flex justify-center items-center gap-4 flex-wrap mt-4">
            <motion.a
              href="https://github.com/Roshan-Kaveri"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: "-50%" }}
              animate={{
                opacity: [0, 1, 1],
                scale: [0, 1.1, 1],
                y: "0%",
              }}
              transition={{
                delay: 0.8,
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: "easeOut",
              }}
            >
              <FaGithub className="text-4xl text-[#fff]" />
            </motion.a>

            <motion.a
              href="https://www.geeksforgeeks.org/user/roshan_kaveri/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: "-50%" }}
              animate={{
                opacity: [0, 1, 1],
                scale: [0, 1.1, 1],
                y: "0%",
              }}
              transition={{
                delay: 0.8,
                duration: 1,
                times: [0, 0.6, 1],
                ease: "easeOut",
              }}
            >
              <img
                src={img}
                alt="GFG"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full"
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/roshan-k-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: "-50%" }}
              animate={{
                opacity: [0, 1, 1],
                scale: [0, 1.1, 1],
                y: "0%",
              }}
              transition={{
                delay: 0.8,
                duration: 1.5,
                times: [0, 0.6, 1],
                ease: "easeOut",
              }}
            >
              <FaLinkedin className="text-4xl text-[#2fbdff]" />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}
