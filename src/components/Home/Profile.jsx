import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import img from '../images/gfg.png';

export default function Profile() {
  return (
    <>
      <div className="flex flex-col h-[calc(100vh-6.5rem)] items-center justify-center text-white">

        <div className="flex">
          {/* Replace with your logo image or text */}
          <h1 className="text-6xl engagement-regular text-[#5272b8]">R</h1>
          <h1 className="text-6xl engagement-regular text-slate-300">K</h1>
        </div>

        <h1 className="text-2xl font-bold mb-2">
          Hey, I'm{' '}
          <span className="bg-gradient-to-r from-[#5272b8] to-[#779ffc] bg-clip-text text-transparent">
            Roshan Kumar
          </span>
        </h1>
        <p className="text-center max-w-md mb-2">
          Pre-Final Year Student at MIT Manipal
          <p>Freelance Plugin Developer</p>
        </p>
        <div className="text-center mb-2">
        {/* Social Links */}
        
        <div className="flex justify-center items-center space-x-4">
        <a href="https://github.com/roshankumar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-[#fff]" />
          </a>
        <div className="">
          <img src={img} alt="GFG" className="w-16 h-16 object-cover rounded-full mx-auto" />
        </div>
          <a href="https://www.linkedin.com/in/roshan-kumar" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-[#2fbdff]" />
          </a>
          
          {/* Image */}
        
      </div>
        </div>

      </div>

      

        
    </>
  );
}
