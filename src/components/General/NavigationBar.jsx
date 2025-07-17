import React, { useState } from "react";
import ResumeDownload from "./ResumeDownload";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavigationBar({ activeElement }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex justify-between items-center px-6 md:px-24 py-6 bg-transparent z-10 relative">
      {/* Logo */}
      <div className="flex text-2xl engagement-regular">
        <h1 className="text-[#5272b8]">R</h1>
        <h1 className="text-slate-300">K</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4 josefin-sans text-slate-300 items-center">
        <Link
          to="/"
          className={`text-lg px-1 hover:underline ${
            activeElement === "Home" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/skills"
          className={`text-lg px-1 hover:underline ${
            activeElement === "Skills" ? "active" : ""
          }`}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={`text-lg px-1 hover:underline ${
            activeElement === "Projects" ? "active" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          className={`text-lg px-1 hover:underline ${
            activeElement === "Experience" ? "active" : ""
          }`}
        >
          Experience
        </Link>
        <Link
          to="/certificates"
          className={`text-lg px-1 hover:underline ${
            activeElement === "Certificates" ? "active" : ""
          }`}
        >
          Certificates
        </Link>
        <ResumeDownload />
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-xl" />
          ) : (
            <FaBars className="text-white text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center py-4 gap-3 z-50 text-slate-300 josefin-sans md:hidden">
          <Link to="/" onClick={toggleMenu} className="text-lg">
            Home
          </Link>
          <Link to="/skills" onClick={toggleMenu} className="text-lg">
            Skills
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="text-lg">
            Projects
          </Link>
          <Link to="/experience" onClick={toggleMenu} className="text-lg">
            Experience
          </Link>
          <Link to="/certificates" onClick={toggleMenu} className="text-lg">
            Certificates
          </Link>
          <ResumeDownload />
        </div>
      )}
    </div>
  );
}
