import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import img from "../images/gfg.png";
import * as motion from "motion/react-client";
import { Directions } from "@mui/icons-material";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col h-[calc(100vh-6.5rem)] items-center justify-center">
        <motion.div
          className="flex flex-col  items-center justify-center text-white"
          custom={2}
          initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <div className="flex">
            {/* Replace with your logo image or text */}
            <h1 className="text-9xl engagement-regular text-[#5272b8]">R</h1>
            <h1 className="text-9xl engagement-regular text-slate-300">K</h1>
          </div>

          <h1 className="text-6xl  mb-2">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-[#779ffc] to-[#779ffc] poppins-eb bg-clip-text text-transparent">
              Roshan Kumar.
            </span>
          </h1>
          <pre className="text-center text-2xl max-w-md mb-2">
            Pre-Final Year Student at MIT Manipal
            <br></br>
            Freelance Plugin Developer
          </pre>
        </motion.div>
        <div className="text-center mb-2">
          {/* Social Links */}

          <div className="flex justify-center items-center space-x-4">
            <motion.a
              href="https://github.com/Roshan-Kaveri"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: "-50%" }}
              animate={{
                opacity: [0, 1, 1],
                scale: [0, 1.1, 1], // Subtle bounce during landing
                y: "0%",
              }}
              transition={{
                delay: 0.8,
                duration: 0.5, // Balanced duration for a smooth effect
                times: [0, 0.6, 1], // Adjusted timing for better pacing
                ease: "easeOut", // Smooth landing feel
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
                scale: [0, 1.1, 1], // Subtle bounce during landing
                y: "0%",
              }}
              transition={{
                delay: 0.8,
                duration: 1, // Balanced duration for a smooth effect
                times: [0, 0.6, 1], // Adjusted timing for better pacing
                ease: "easeOut", // Smooth landing feel
              }}
            >
              <img
                src={img}
                alt="GFG"
                className="w-16 h-16 object-cover rounded-full mx-auto"
              />

            </motion.a>
    
            <motion.a
              href="https://www.linkedin.com/in/roshan-k-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: "-50%" }}
              animate={{
                opacity: [0, 1, 1],
                scale: [0, 1.1, 1], // Subtle bounce during landing
                y: "0%",
              }}
              transition={{
                delay: 0.8,
                duration: 1.5, // Balanced duration for a smooth effect
                times: [0, 0.6, 1], // Adjusted timing for better pacing
                ease: "easeOut", // Smooth landing feel
              }}
            >
              

              <FaLinkedin className="text-4xl text-[#2fbdff]" />
              </motion.a>

            {/* Image */}
          </div>
        </div>
      </div>
      <div>
      
    </div>

    </>
  );
}
