import React, { useState } from "react";
import SkillCard from "./SkillCard";
import skills from "../data/skillsdata"; // Update the path if needed

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Languages");

  const allSkills =
    selectedCategory === "All"
      ? Object.values(skills).flat()
      : skills[selectedCategory];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 
          ${selectedCategory === "All" ? "bg-[#5272b8] text-white" : "bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800/50"}`}
        >
          All
        </button>
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 
            ${selectedCategory === category ? "bg-[#5272b8] text-white" : "bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800/50"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 gap-6">
        {allSkills.map((skill) => (
          <SkillCard
            key={skill.name}
            Icon={skill.Icon}
            skillName={skill.name}
          />
        ))}
      </div>
    </div>
  );
}
