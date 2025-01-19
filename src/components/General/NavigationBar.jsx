import React from 'react'
import ResumeDownload from './ResumeDownload'
import { Link } from 'react-router-dom'

export default function NavigationBar({ activeElement }) {
  return (
    <div className="flex justify-between items-center px-24 py-8 bg-transparent z-10">
      <div className="flex">
        {/* Replace with your logo image or text */}
        <h1 className='text-2xl  engagement-regular text-[#5272b8]'>R</h1>
        <h1 className='text-2xl  engagement-regular text-slate-300'>K</h1>

      </div>
      <div className="flex space-x-4 josefin-sans text-slate-300">
        <Link to="/" className={`text-lg px-1 hover:underline ${activeElement === 'Home' ? 'active' : ''}`}>Home</Link>
        <Link to="/skills" className={`text-lg px-1 hover:underline ${activeElement === 'Skills' ? 'active' : ''}`}>Skills</Link>
        <Link to="/projects" className={`text-lg px-1 hover:underline ${activeElement === 'Projects' ? 'active' : ''}`}>Projects</Link>
        <Link to="/experience" className={`text-lg px-1 hover:underline ${activeElement === 'Experience' ? 'active' : ''}`}>Experience</Link>
        <Link to="/certificates" className={`text-lg px-1 hover:underline ${activeElement === 'Certificates' ? 'active' : ''}`}>Certificates</Link>
        <ResumeDownload></ResumeDownload>
      </div>
    </div>
  )
}
