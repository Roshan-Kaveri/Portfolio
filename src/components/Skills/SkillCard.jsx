import React from 'react'

export default function SkillCard({ imageUrl, skillName }) {
  return (
    <div className="relative group p-4 cursor-pointer">
      <div className="flex gap-6 items-center hover:scale-105 transition-all duration-300 p-3 rounded-xl border border-slate-700/30 hover:border-[#6b8ad1]/30">
        <div className="w-[64px] h-[64px] flex items-center justify-center group-hover:animate-bounce"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          }}>
        </div>
        <div className="roboto font-bold text-[20px] flex items-center tracking-wider text-[#6b8ad1] group-hover:text-[#8aa9e0] transition-all duration-300 group-hover:translate-x-2 group-hover:tracking-widest">
          {skillName}
        </div>
      </div>
      <div className="absolute inset-0 bg-[#6b8ad1]/5 blur-3xl rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
    </div>
  )
}